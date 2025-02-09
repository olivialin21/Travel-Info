<template>
  <div class="container pt-[24px] md:pt-[52px] pb-[20px] md:pb-[72px]">
    <div class="flex justify-between items-center mb-[22px]">
      <h3 class="sub_title">搜尋結果</h3>
      <div class="flex items-center gap-4">
        <p class="text-[14px]/[19px] text-gray">排序</p>
        <select
          class="select focus:outline-none"
          v-model="selectedOrder"
          @change="updateOrder"
        >
          <option value="">預設</option>
          <option value="Name-asc">名稱升冪（A-Z）</option>
          <option value="Name-desc">名稱降冪（Z-A）</option>
          <option value="UpdateTime-asc">更新時間（遠-近）</option>
          <option value="UpdateTime-desc">更新時間（近-遠）</option>
        </select>
      </div>
    </div>
    <div
      v-if="loading"
      class="flex justify-center items-center text-gray text-2xl min-h-40"
    >
      <font-awesome-icon icon="spinner" spin />
    </div>
    <div
      v-else-if="results.length === 0"
      class="text-[14px]/[19px] md:text-[16px]/[21px]"
    >
      沒有找到符合條件的結果
    </div>
    <div v-else>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <router-link
          v-for="item in results"
          :key="item.AttractionID"
          :to="`/${category}/details/${item[`${category}ID`]}`"
          class="block w-full"
        >
          <Card :data="item" :horizontal="true" />
        </router-link>
      </div>
      <div class="mt-[31px] md:mt-[52px] flex justify-center gap-4">
        <button
          class="btn min-h-0 w-[44px] h-[44px] text-gray bg-white hover:bg-red hover:text-white border-0 font-normal"
          :disabled="currentPage === 1"
          @click="updatePage(currentPage - 1)"
        >
          <font-awesome-icon icon="angle-left" class="w-[20px] h-[20px]" />
        </button>
        <button
          class="btn min-h-0 w-[44px] h-[44px] text-gray bg-white hover:bg-red hover:text-white border-0 font-normal"
          @click="updatePage(currentPage + 1)"
          :disabled="results.length < perPage"
        >
          <font-awesome-icon icon="angle-right" class="w-[20px] h-[20px]" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, computed, watch } from "vue";
import Card from "./Card.vue";
import { searchCategary } from "@/api";
import { useRoute, useRouter } from "vue-router"; // Vue Router

const route = useRoute(); // 當前 URL 資訊
const router = useRouter(); // 修改 URL
const category = computed(() => route.params.category);

const results = ref([]); // API 回傳的結果
const loading = ref(false);
const perPage = 16;
const currentPage = ref(1);
const selectedOrder = ref(""); // 排序條件

// 監聽 URL 變化並更新狀態
onMounted(() => {
  syncStateWithURL();
});

// **抓取資料**
const fetchResults = async () => {
  loading.value = true;
  try {
    const { city, keyword, order } = route.query;

    let filters = [];
    if (city) filters.push(`PostalAddress/City eq '${city}'`);
    if (keyword) filters.push(`contains(${category.value}Name, '${keyword}')`);

    const filterQuery = filters.length
      ? `$filter=${filters.join(" and ")}`
      : "";
    const skip = (currentPage.value - 1) * perPage;

    const response = await searchCategary(
      category.value,
      filterQuery,
      perPage,
      skip,
      order || ""
    );
    results.value = response.value;
  } catch (error) {
    console.error("搜尋發生錯誤", error);
  } finally {
    loading.value = false;
  }
};

// **同步 URL 到狀態**
const syncStateWithURL = () => {
  const queryParams = route.query;
  currentPage.value = Number(queryParams.page) || 1;
  selectedOrder.value = queryParams.order || "";
  fetchResults();
};

watch(
  () => [category.value, route.query], // 監聽 category 和 query 變化
  () => {
    syncStateWithURL();
  },
  { immediate: true }
);

// **更新排序並修改 URL**
const updateOrder = () => {
  router.push({
    path: `/${category.value}`,
    query: { ...route.query, order: selectedOrder.value, page: 1 },
  });
};

// **更新頁碼並修改 URL**
const updatePage = (page: number) => {
  router.push({
    path: `/${category.value}`,
    query: { ...route.query, page },
  });
};
</script>

<style lang="scss" scoped>
.sub_title {
  @apply text-[14px]/[19px] md:text-[20px]/[26px] pl-[8px] relative;
}
.sub_title::before {
  @apply bg-blue absolute top-[-1px] left-0 block w-[4px] h-[21px] md:h-[28px];
  content: "";
}
</style>
