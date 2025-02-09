<template>
  <div
    :class="[
      'group card bg-base-100 shadow-xl h-full overflow-hidden rounded md:rounded-xl transition-all outline outline-2 outline-transparent hover:outline-red',
      { 'grid grid-cols-12 md:block ': horizontal },
    ]"
  >
    <figure :class="['rounded-none', { 'col-span-5': horizontal }]">
      <img
        class="w-full object-cover object-center group-hover:scale-110 transition-all duration-300 h-[128px] md:h-[190px]"
        :src="props.data.Images[0]?.URL || '/img_notFound.png'"
        :alt="props.data[`${category}Name`]"
        @error="handleImgError"
      />
    </figure>
    <div
      :class="[
        'card-body gap-0 md:p-[16px] md:pt-[12px]',
        horizontal ? 'py-[12px] px-[8px]' : 'p-[8px] pt-[7px]',
        { 'col-span-7': horizontal },
      ]"
    >
      <h4 class="text-[14px]/[19px] md:text-[16px]/[21px] mb-1 md:mb-2">
        {{ props.data[`${category}Name`] }}
      </h4>
      <div class="flex items-center gap-1 text-blue mb-2 md:mb-3">
        <div
          class="w-[16px] md:w-[20px] h-[16px] md:h-[20px] flex justify-center items-center"
        >
          <font-awesome-icon
            icon="location-dot"
            class="w-[14px] md:w-[16px] h-[14px] md:h-[16px]"
          />
        </div>
        <p class="text-[12px]/[16px] md:text-[14px]/[19px]">
          {{ props.data.PostalAddress.City }}
        </p>
      </div>
      <ul
        v-if="
          category &&
          props.data[
            `${category === 'Restaurant' ? 'Cuisine' : category}Classes`
          ]
        "
        class="flex flex-wrap gap-2"
      >
        <li
          v-for="(classNum, index) in props.data[
            `${category === 'Restaurant' ? 'Cuisine' : category}Classes`
          ]"
          :key="index"
          class="text-dark_gray bg-medium_gray rounded text-[12px]/[16px] md:text-[14px]/[19px] py-[2px] md:py-[4px] px-[4px] md:px-[8px]"
        >
          {{
            category === "Restaurant" && isSpecialCategory(classNum)
              ? "特殊分類"
              : classEnum[category]?.[classNum] ?? "未知分類"
          }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import classEnum from "@/jsons/classEnum.json";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute(); // 當前 URL 資訊
const category = computed(() => {
  const param = route.params.category;
  return Array.isArray(param) ? param[0] : param; // 確保是 string
});

const props = defineProps({
  data: Object,
  horizontal: {
    type: Boolean,
    default: false,
  },
});

const isSpecialCategory = (classNum: number) => {
  return (
    (classNum >= 6 && classNum <= 95) ||
    (classNum >= 117 && classNum <= 199) ||
    (classNum >= 205 && classNum <= 253)
  );
};

const handleImgError = (event: Event) => {
  const target = event.target as HTMLImageElement;
  target.src = "/img_notFound.png";
};
</script>

<style scoped>
</style>