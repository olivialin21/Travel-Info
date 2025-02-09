<template>
  <div
    class="md:rounded-lg bg-white pt-[14px] md:pt-[17px] px-[20px] pb-[48px] md:pb-[24px]"
  >
    <h1
      class="text-[20px]/[26px] md:text-[24px]/[32px] font-bold mb-[12px] md:mb-[15px]"
    >
      {{ data[`${category}Name`] }}
    </h1>
    <ul class="flex flex-col gap-5 md:gap-6">
      <li class="flex items-center gap-2">
        <font-awesome-icon
          icon="location-dot"
          class="w-[20px] h-[20px] text-red"
        />
        <a
          class="text-[16px]/[21px] text-blue underline hover:text-red"
          :href="`https://www.google.com/maps?q=${data.PositionLat},${data.PositionLon}`"
          target="_blank"
          >{{ data.PostalAddress?.City }}</a
        >
      </li>
      <li class="flex items-start gap-2">
        <div class="w-[20px] h-[20px] flex justify-center items-center">
          <font-awesome-icon icon="tag" class="w-[18px] h-[18px] text-red" />
        </div>
        <div>
          <h4 class="text-[16px]/[21px] font-bold mb-1 md:mb-2">標籤</h4>
          <ul
            v-if="
              category &&
              data[`${category === 'Restaurant' ? 'Cuisine' : category}Classes`]
            "
            class="flex flex-wrap gap-2"
          >
            <li
              v-for="(classNum, index) in data[
                `${category === 'Restaurant' ? 'Cuisine' : category}Classes`
              ]"
              :key="index"
              class="text-dark_gray bg-medium_gray rounded text-[14px]/[19px] py-[2px] md:py-[4px] px-[4px] md:px-[8px]"
            >
              {{
                category === "Restaurant" && isSpecialCategory(classNum)
                  ? "特殊分類"
                  : classEnum[category]?.[classNum] ?? "未知分類"
              }}
            </li>
          </ul>
        </div>
      </li>
      <li v-if="data.ServiceTimeInfo" class="flex items-start gap-2">
        <div class="w-[20px] h-[20px] flex justify-center items-center">
          <font-awesome-icon icon="clock" class="w-[18px] h-[18px] text-red" />
        </div>
        <div>
          <h4 class="text-[16px]/[21px] font-bold mb-1 md:mb-2">開放時間</h4>
          <p class="text-[14px]/[19px]">{{ data.ServiceTimeInfo }}</p>
        </div>
      </li>
      <li v-if="data.Description" class="flex items-start gap-2">
        <div class="w-[20px] h-[20px] flex justify-center items-center">
          <font-awesome-icon
            icon="file-lines"
            class="w-[18px] h-[18px] text-red"
          />
        </div>
        <div>
          <h4 class="text-[16px]/[21px] font-bold mb-1 md:mb-2">簡介</h4>
          <p class="text-[14px]/[19px]">{{ data.Description }}</p>
        </div>
      </li>
      <li class="grid grid-cols-12 md:flex gap-[10px] md:gap-5">
        <a
          v-if="data.Telephones"
          :href="`tel:${data.Telephones[0]?.Tel}`"
          :class="[
            'btn font-normal flex gap-1 items-center text-[14px]/[19px] md:text-[16px]/[21px] min-h-0 h-auto bg-white text-red border border-red hover:text-white hover:bg-red hover:border-red py-[15px] md:py-[20px] px-[18px] md:px-[26px]',
            data.WebsiteUrl ? 'col-span-6' : 'col-span-12',
          ]"
        >
          <font-awesome-icon icon="phone" class="w-[18px] h-[18px]" />
          <p>{{ data.Telephones[0]?.Tel }}</p>
        </a>
        <a
          v-if="data.WebsiteUrl"
          :href="data.WebsiteUrl"
          target="_blank"
          :class="[
            'btn font-normal text-[14px]/[19px] md:text-[16px]/[21px] min-h-0 h-auto bg-red text-white border border-red hover:opacity-70 hover:text-white hover:bg-red hover:border-red py-[15px] md:py-[20px] px-[18px] md:px-[26px]',
            data.Telephones ? 'col-span-6' : 'col-span-12',
          ]"
        >
          官方網站
        </a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import classEnum from "@/jsons/classEnum.json";

const props = defineProps({
  data: Object,
});

const route = useRoute();
const category = computed(() => {
  const param = route.params.category;
  return Array.isArray(param) ? param[0] : param; // 確保是 string
});

const isSpecialCategory = (classNum: number) => {
  return (
    (classNum >= 6 && classNum <= 95) ||
    (classNum >= 117 && classNum <= 199) ||
    (classNum >= 205 && classNum <= 253)
  );
};
</script>

<style scoped>
</style>
