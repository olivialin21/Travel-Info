<template>
  <div class="rounded-lg bg-white pt-[17px] px-[20px] pb-[24px]" v-if="data">
    <div class="p-[20px]">
      <h1 class="text-[24px] font-bold">{{ data[`${category}Name`] }}</h1>
      <ul>
        <li>{{ data.PostalAddress?.City }}</li>
        <li>
          <h4>標籤</h4>
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
              class="badge badge-neutral"
            >
              <span
                v-if="category === 'Restaurant' && isSpecialCategory(classNum)"
              >
                特殊分類
              </span>
              <span v-else>
                {{ classEnum[category]?.[classNum] ?? "未知分類" }}
              </span>
            </li>
          </ul>
        </li>
        <li v-if="data.ServiceTimeInfo">
          <h4>開放時間</h4>
          <p>{{ data.ServiceTimeInfo }}</p>
        </li>
        <li v-if="data.Description">
          <h4>簡介</h4>
          <p>{{ data.Description }}</p>
        </li>
      </ul>
      <a
        v-if="data.Telephones"
        :href="`tel:${data.Telephones[0]?.Tel}`"
        class="btn"
      >
        {{ data.Telephones[0]?.Tel }}
      </a>
      <a
        v-if="data.WebsiteUrl"
        :href="data.WebsiteUrl"
        target="_blank"
        class="btn"
      >
        官方網站
      </a>
    </div>
  </div>
  <div v-else class="text-center text-gray-500">加載中...</div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import classEnum from "@/jsons/classEnum.json";

const props = defineProps({
  data: Object,
});

const route = useRoute();
const category = computed(() => route.params.category);

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
