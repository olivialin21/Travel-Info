<template>
  <div
    class="h-auto md:h-[400px] bg-cover bg-center banner"
    :data-category="category"
  >
    <div
      class="container min-h-[260px] h-full pt-[23px] pb-[12px] md:pb-[28px] flex flex-col justify-between items-start"
    >
      <!-- <div class="flex justify-between items-center"> -->
      <router-link
        to="/Attraction"
        class="inline-block hover:opacity-70 transition-opacity py-[3.5px] mb-2"
      >
        <img class="h-[21px] md:h-[28px]" src="/logo_white.svg" alt="logo" />
      </router-link>
      <!-- <CollectBtnWide /> -->
      <!-- </div> -->

      <div class="lg:px-[106px] w-full">
        <h2
          class="hidden md:block text-[80px]/[106px] font-bold text-white drop-shadow-lg mb-3.5"
        >
          {{ categories[category] }}
        </h2>
        <div class="flex flex-wrap gap-3 mb-3 md:mb-4">
          <CategoryBtn
            text="景點"
            icon="camera"
            :active="category === 'Attraction'"
            @click="handleSetCategory('Attraction')"
          />
          <CategoryBtn
            text="餐飲"
            icon="utensils"
            :active="category === 'Restaurant'"
            @click="handleSetCategory('Restaurant')"
          />
          <CategoryBtn
            text="旅宿"
            icon="house-chimney-window"
            :active="category === 'Hotel'"
            @click="handleSetCategory('Hotel')"
          />
          <CategoryBtn
            text="活動"
            icon="palette"
            :active="category === 'Event'"
            @click="handleSetCategory('Event')"
          />
        </div>

        <div class="grid grid-cols-12 gap-3">
          <!-- 縣市選擇 -->
          <div class="dropdown border-0 col-span-12 md:col-span-5">
            <div
              role="button"
              :class="[
                'btn hover:bg-white hover:border-blue h-auto flex gap-2 justify-start items-center bg-white text-gray font-normal py-[12px] md:py-[17px] px-[12px] w-full',
                { 'border-blue': isOpen },
              ]"
              @click="toggleDropdown"
            >
              <div class="w-[24px] h-[24px] flex justify-center items-center">
                <font-awesome-icon
                  icon="location-dot"
                  :class="[
                    'w-[20px] h-[20px]',
                    { 'text-blue': selectedCity !== '選擇想去的地區' },
                  ]"
                />
              </div>
              <p
                :class="[
                  'text-[14px]/[19px]',
                  { 'text-black': selectedCity !== '選擇想去的地區' },
                ]"
              >
                {{ selectedCity }}
              </p>
            </div>
            <ul
              v-show="isOpen"
              class="absolute mt-3 py-2 px-0 w-full md:w-[200px] h-[256px] overflow-y-scroll bottom-100 left-0 bg-base-100 rounded-lg z-[1] shadow-md"
            >
              <li @click="selectCity('選擇想去的地區')">
                <button
                  class="flex items-center gap-2 w-full rounded-none p-3 hover:bg-light_blue text-gray"
                >
                  <div
                    class="w-[24px] h-[24px] flex justify-center items-center"
                  >
                    <font-awesome-icon
                      icon="location-dot"
                      class="w-[20px] h-[20px]"
                    />
                  </div>
                  <p class="text-[14px]/[19px]">選擇想去的地區</p>
                </button>
              </li>
              <li v-for="city in cities" :key="city" @click="selectCity(city)">
                <button
                  class="flex items-center gap-2 w-full rounded-none p-3 hover:bg-light_blue"
                >
                  <div
                    class="w-[24px] h-[24px] flex justify-center items-center"
                  >
                    <font-awesome-icon
                      icon="location-dot"
                      class="w-[20px] h-[20px] text-blue"
                    />
                  </div>
                  <p class="text-[14px]/[19px]">{{ city }}</p>
                </button>
              </li>
            </ul>
          </div>

          <!-- 關鍵字輸入 -->
          <input
            v-model="keyword"
            type="text"
            placeholder="輸入景點名稱"
            class="btn col-span-8 md:col-span-5 focus:outline-none focus:border-blue hover:bg-white hover:border-blue h-auto bg-white placeholder:text-gray font-normal pt-[15px] md:pt-[20px] pb-[14px] md:pb-[19px] px-[20px] w-full text-left text-[14px]/[19px] text-black"
          />

          <!-- 搜尋按鈕 -->
          <button
            class="btn flex items-center h-full col-span-4 md:col-span-2 gap-2 font-normal px-[12px] py-[8px] bg-gray text-white border-0 hover:bg-red rounded-lg duration-300"
            @click="handleSearch"
          >
            <div
              class="w-[20px] md:w-[24px] h-[20px] md:h-[24px] flex justify-center items-center"
            >
              <font-awesome-icon
                icon="magnifying-glass"
                class="w-[16px] md:w-[20px] h-[16px] md:h-[20px]"
              />
            </div>
            <p class="mr-2 text-[16px]/[21px] md:text-[18px]/[24px]">搜尋</p>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
// import CollectBtnWide from "@/components/CollectBtnWide.vue";
import CategoryBtn from "@/components/CategoryBtn.vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const category = computed(() => {
  const param = route.params.category;
  return Array.isArray(param) ? param[0] : param; // 確保是 string
});

const keyword = ref(""); // 關鍵字
const selectedCity = ref("選擇想去的地區"); // 縣市選擇
const categories = {
  Attraction: "景點",
  Restaurant: "餐飲",
  Hotel: "旅宿",
  Event: "活動",
};

const cities = [
  "臺北市",
  "高雄市",
  "新北市",
  "臺中市",
  "臺南市",
  "桃園市",
  "宜蘭縣",
  "新竹縣",
  "苗栗縣",
  "彰化縣",
  "南投縣",
  "雲林縣",
  "嘉義縣",
  "屏東縣",
  "臺東縣",
  "花蓮縣",
  "澎湖縣",
  "基隆市",
  "新竹市",
  "嘉義市",
  "連江縣",
  "金門縣",
];
const isOpen = ref(false); // 控制 dropdown 的開關狀態

// 切換 dropdown 顯示狀態
const toggleDropdown = (event: Event) => {
  const target = event.target as HTMLElement;
  isOpen.value = !isOpen.value;
};

// 選擇城市並關閉 dropdown
const selectCity = (city: string) => {
  selectedCity.value = city;
  isOpen.value = false;
};

const handleSetCategory = (newCategory: string) => {
  router.push({
    path: `/${newCategory}`,
    query: { ...route.query, page: 1 },
  });
};

const handleSearch = () => {
  if (selectedCity.value.trim() === "" && keyword.value.trim() === "") return;
  const city =
    selectedCity.value === "選擇想去的地區" ? "" : selectedCity.value;
  router.push({
    path: `/${category.value}`,
    query: Object.fromEntries(
      Object.entries({
        ...route.query, // 保留原有參數
        page: 1, // 重設頁碼
        city: city,
        keyword: keyword.value,
      }).filter(([_, value]) => value)
    ),
  });
};
</script>

<style lang="scss" scoped>
.banner[data-category="Attraction"] {
  background-image: url("/banner_attraction.png"); /* 預設圖片 */
}

/* 針對不同的類別設定背景圖 */
.banner[data-category="Restaurant"] {
  background-image: url("/banner_restaurant.png");
}

.banner[data-category="Hotel"] {
  background-image: url("/banner_hotel.png");
}

.banner[data-category="Event"] {
  background-image: url("/banner_event.png");
}
</style>