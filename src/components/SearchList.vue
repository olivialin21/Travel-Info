<template>
  <div class="container pt-[52px] pb-[72px]">
    <div class="flex justify-between items-center mb-[22px]">
      <h3>搜尋結果</h3>
      <div class="flex items-center gap-4">
        <p>排序</p>
        <select
          class="select select-bordered"
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

    <div v-if="loading">載入中...</div>
    <div v-else-if="results.length === 0">沒有找到符合條件的結果</div>
    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <router-link
        v-for="item in results"
        :key="item.AttractionID"
        :to="`/${category}/details/${item[`${category}ID`]}`"
        class="block w-full"
      >
        <Card :data="item" />
      </router-link>
    </div>

    <!-- 分頁 -->
    <div class="mt-4 flex justify-center gap-4">
      <button
        class="btn"
        :disabled="currentPage === 1"
        @click="updatePage(currentPage - 1)"
      >
        上一頁
      </button>
      <button
        class="btn"
        @click="updatePage(currentPage + 1)"
        :disabled="results.length < perPage"
      >
        下一頁
      </button>
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
