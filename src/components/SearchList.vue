<template>
  <div class="container pt-[52px] pb-[72px]">
    <div class="flex justify-between items-center">
      <h3>搜尋結果</h3>
      <div class="flex items-center gap-4">
        <p>排序</p>
        <select className="select select-bordered">
          <option value="name-asc">名稱升冪（A-Z）</option>
          <option value="name-desc">名稱降冪（Z-A）</option>
          <option value="update-time-asc">更新時間（遠-近）</option>
          <option value="update-time-desc">更新時間（近-遠）</option>
        </select>
      </div>
    </div>
    <div v-if="loading">載入中...</div>
    <div v-else-if="results.length === 0">沒有找到符合條件的結果</div>
    <div v-else class="grid grid-cols-4 gap-4">
      <SearchCard
        v-for="item in results"
        :key="item.AttractionID"
        :data="item"
      />
    </div>

    <!-- 分頁 -->
    <div class="mt-4 flex justify-center gap-4">
      <button
        class="btn"
        :disabled="currentPage === 1"
        @click="fetchResults(currentPage - 1)"
      >
        上一頁
      </button>
      <button
        class="btn"
        @click="fetchResults(currentPage + 1)"
        :disabled="results.length < perPage"
      >
        下一頁
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import SearchCard from "./SearchCard.vue";
import { useTourismStore } from "@/store/tourism";
import { searchCategary } from "@/api";

const store = useTourismStore();
const props = defineProps(["searchParams"]);

const results = ref([]); // 存 API 回傳的搜尋結果
const loading = ref(false);
const perPage = 16;
const currentPage = ref(1);

onMounted(() => {
  fetchResults(currentPage.value);
});

watch(
  () => props.searchParams,
  (newSearchParams, oldSearchParams) => {
    // 只有當 searchParams 改變時才呼叫 fetchResults
    if (newSearchParams !== oldSearchParams) {
      currentPage.value = 1; // 變更搜尋條件時，將頁面重設為第1頁
      fetchResults(currentPage.value);
    }
  },
  { deep: true } // deep 監聽，當 searchParams 內部的屬性變動時也會觸發
);

const fetchResults = async (page = 1) => {
  loading.value = true;
  currentPage.value = page;

  try {
    const { city, keyword } = props.searchParams;

    let filters = [];
    if (city.trim() !== "") {
      filters.push(`PostalAddress/City eq '${city}'`);
    }
    if (keyword.trim() !== "") {
      filters.push(`contains(${store.category}Name,'${keyword}')`);
    }

    const filterQuery = filters.length
      ? `$filter=${filters.join(" and ")}`
      : "";
    const skip = (page - 1) * perPage;

    const response = await searchCategary(
      store.category,
      filterQuery,
      perPage,
      skip
    );

    results.value = response.value; // 查詢結果
  } catch (error) {
    console.error("搜尋發生錯誤", error);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.btn:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
