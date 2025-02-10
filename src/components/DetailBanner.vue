<template>
  <div
    class="h-[300px] bg-cover bg-center banner pb-[30px] hidden md:block"
    :data-category="category"
  >
    <div class="container flex flex-col h-full justify-end">
      <h2 class="text-[80px]/[106px] font-bold text-white drop-shadow-lg">
        {{ categories[category] }}
      </h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const category = computed(() => {
  const param = route.params.category;
  return Array.isArray(param) ? param[0] : param; // 確保是 string
});
const categories = {
  Attraction: "景點",
  Restaurant: "餐飲",
  Hotel: "旅宿",
  Event: "活動",
};
</script>

<style lang="scss" scoped>
.banner[data-category="Attraction"] {
  background-color: #a3c7e6;
  background-image: url("/background_attraction.png"); /* 預設圖片 */
}

/* 針對不同的類別設定背景圖 */
.banner[data-category="Restaurant"] {
  background-color: #f7883c;
  background-image: url("/background_restaurant.png");
}

.banner[data-category="Hotel"] {
  background-color: #362932;
  background-image: url("/background_hotel.png");
}

.banner[data-category="Event"] {
  background-color: #b3daf6;
  background-image: url("/background_event.png");
}
</style>