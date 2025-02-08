import axios from 'axios';

// Access Token 設定
const localStorageKey = 'access_token';  // 存取 Token 的鍵值
let tokenExpirationKey = 'token_expiration';  // 存取 Token 過期時間的鍵值

// 創建 axios 實例
const api = axios.create({
  baseURL: 'https://tdx.transportdata.tw/api/tourism/service/odata/V2/Tourism/',
  timeout: 10000,  // 請求超時設置
});

// 取得 Access Token 的函數
const getAccessToken = async () => {
  const storedToken = localStorage.getItem(localStorageKey);
  const storedExpiration = localStorage.getItem(tokenExpirationKey);

  // 檢查是否存在有效的 Token
  if (storedToken && storedExpiration && Date.now() < parseInt(storedExpiration)) {
    return storedToken;  // 如果 Token 尚未過期，則直接返回
  }

  try {
    // 使用 Client Id 和 Client Secret 取得 Access Token
    const response = await axios.post(
      'https://tdx.transportdata.tw/auth/realms/TDXConnect/protocol/openid-connect/token',
      new URLSearchParams({
        grant_type: 'client_credentials',
        client_id: import.meta.env.VITE_API_CLIENT_ID,  // 替換為你的 Client Id
        client_secret: import.meta.env.VITE_APP_CLIENT_SECRET,  // 替換為你的 Client Secret
      }),
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
    );

    const newToken = response.data.access_token;
    const expiresIn = response.data.expires_in;  // Token 的有效期限（秒）

    // 儲存新的 Token 和過期時間到 localStorage
    localStorage.setItem(localStorageKey, newToken);
    localStorage.setItem(tokenExpirationKey, (Date.now() + expiresIn * 1000).toString());  // 設定過期時間

    return newToken;
  } catch (error) {
    console.error('取得 Access Token 失敗', error);
    throw new Error('無法取得 Access Token');
  }
};

// 設定請求攔截器，將 Access Token 添加到每次請求的 headers
api.interceptors.request.use(
  async (config) => {
    const token = await getAccessToken();  // 確保我們有有效的 Access Token
    config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 使用 api instance 進行 API 請求
export const searchCategary = async (category: string, filterQuery: string, perPage: number, skip: number) => {
  try {
    const response = await api.get(`/${category}?${filterQuery}&$top=${perPage}&$skip=${skip}`);
    console.log('success: ', response.data);
    return response.data;
  } catch (error) {
    console.error('error: ', error);
  }
};
