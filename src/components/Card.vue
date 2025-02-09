<template>
  <div className="card bg-base-100 shadow-xl h-full">
    <figure>
      <img
        class="w-full h-[190px] object-fit object-cover object-center"
        :src="props.data.Images[0]?.URL || '/img_notFound.png'"
        :alt="props.data[`${category}Name`]"
        @error="handleImgError"
      />
    </figure>
    <div className="card-body p-4 pt-3">
      <h2 className="card-title">
        {{ props.data[`${category}Name`] }}
      </h2>
      <p>{{ props.data.PostalAddress.City }}</p>
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
          class="badge badge-neutral"
        >
          <span v-if="category === 'Restaurant' && isSpecialCategory(classNum)">
            特殊分類
          </span>
          <span v-else>
            {{ classEnum[category]?.[classNum] ?? "未知分類" }}
          </span>
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
const category = computed(() => route.params.category);

const props = defineProps({
  data: Object,
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