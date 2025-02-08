<template>
  <div
    class="h-[400px] bg-cover bg-center banner"
    :data-category="store.category"
  >
    <div class="container h-full pt-[23px] pb-[28px] flex flex-col justify-between">
      <div class="flex justify-between items-center">
        <img src="/logo_white.svg" alt="logo" />
        <!-- <CollectBtnWide /> -->
      </div>

      <div class="px-[106px]">
        <h2 class="text-[80px]/[106px] font-bold text-white text-shadow-md">
          {{ categories[store.category] }}
        </h2>
        <CategoryBtn text="景點" @click="handleSetCategory('Attraction')" />
        <CategoryBtn text="餐飲" @click="handleSetCategory('Restaurant')" />
        <CategoryBtn text="旅宿" @click="handleSetCategory('Hotel')" />
        <CategoryBtn text="活動" @click="handleSetCategory('Event')" />

        <!-- 直接在父層處理狀態 -->
        <div class="flex">
          <!-- 縣市選擇 -->
          <select v-model="selectedCity" class="select select-bordered">
            <option value="">請選擇縣市</option>
            <option v-for="city in cities" :key="city" :value="city">
              {{ city }}
            </option>
          </select>

          <!-- 關鍵字輸入 -->
          <input
            v-model="keyword"
            type="text"
            placeholder="Type here"
            class="input input-bordered w-full max-w-xs"
          />

          <!-- 搜尋按鈕 -->
          <button class="btn" @click="handleSearch">搜尋</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useTourismStore } from "@/store/tourism";
import CategoryBtn from "@/components/CategoryBtn.vue";
import CollectBtnWide from "@/components/CollectBtnWide.vue";

const store = useTourismStore();
const keyword = ref(""); // 關鍵字
const selectedCity = ref(""); // 縣市選擇
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
  "全部縣市",
  "國外",
  "其他",
];

const emit = defineEmits(["search"]);

const handleSetCategory = (category: string) => {
  store.setCategory(category); // 呼叫 store 中的 action
  handleSearch(); // 當改變類別時，自動觸發搜尋
};

const handleSearch = () => {
  emit("search", {
    city: selectedCity.value,
    keyword: keyword.value,
  });
};
</script>

<style lang="scss" scoped>
.banner[data-category="Attraction"] {
  background-image: url("banner_attraction.png"); /* 預設圖片 */
  background-image: image-set(
    url("banner_attraction.png") 1x,
    url("banner_attraction@2x.png") 2x
  ); /* 根據解析度選擇圖片 */
}

/* 針對不同的類別設定背景圖 */
.banner[data-category="Restaurant"] {
  background-image: image-set(
    url("banner_restaurant.png") 1x,
    url("banner_restaurant@2x.png") 2x
  );
}

.banner[data-category="Hotel"] {
  background-image: image-set(
    url("banner_hotel.png") 1x,
    url("banner_hotel@2x.png") 2x
  );
}

.banner[data-category="Event"] {
  background-image: image-set(
    url("banner_event.png") 1x,
    url("banner_event@2x.png") 2x
  );
}
</style>