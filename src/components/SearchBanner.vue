<template>
  <div class="h-[400px] bg-cover bg-center banner" :data-category="category">
    <div
      class="container h-full pt-[23px] pb-[28px] flex flex-col justify-between"
    >
      <div class="flex justify-between items-center">
        <img src="/logo_white.svg" alt="logo" />
        <CollectBtnWide />
      </div>

      <div class="px-[106px]">
        <h2
          class="text-[80px]/[106px] font-bold text-white drop-shadow-lg mb-3.5"
        >
          {{ categories[category] }}
        </h2>
        <div class="flex gap-3 mb-4">
          <CategoryBtn
            text="景點"
            :active="category === 'Attraction'"
            @click="handleSetCategory('Attraction')"
          />
          <CategoryBtn
            text="餐飲"
            :active="category === 'Restaurant'"
            @click="handleSetCategory('Restaurant')"
          />
          <CategoryBtn
            text="旅宿"
            :active="category === 'Hotel'"
            @click="handleSetCategory('Hotel')"
          />
          <CategoryBtn
            text="活動"
            :active="category === 'Event'"
            @click="handleSetCategory('Event')"
          />
        </div>

        <!-- 直接在父層處理狀態 -->
        <div class="grid grid-cols-12 gap-3">
          <!-- 縣市選擇 -->
          <select v-model="selectedCity" class="select select-bordered col-span-5">
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
            class="input input-bordered w-full col-span-5"
          />

          <!-- 搜尋按鈕 -->
          <button class="btn col-span-2" @click="handleSearch">搜尋</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import CollectBtnWide from "@/components/CollectBtnWide.vue";
import CategoryBtn from "@/components/CategoryBtn.vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const category = computed(() => route.params.category);

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
];

const handleSetCategory = (newCategory: string) => {
  router.push({
    path: `/${newCategory}`,
    query: { ...route.query, page: 1 },
  });
};

const handleSearch = () => {
  if (selectedCity.value.trim() === "" && keyword.value.trim() === "") return;
  router.push({
    path: `/${category.value}`,
    query: Object.fromEntries(
      Object.entries({
        ...route.query, // 保留原有參數
        page: 1, // 重設頁碼
        city: selectedCity.value,
        keyword: keyword.value,
      }).filter(([_, value]) => value)
    ),
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