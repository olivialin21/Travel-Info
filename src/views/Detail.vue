<template>
  <div class="min-h-screen flex flex-col">
    <DetailNavbar />
    <DetailBanner />
    <main v-if="data" class="pt-[80px] md:pt-[40px] pb-[32px] md:pb-[60px]">
      <div
        class="container md_no_padding grid grid-cols-1 lg:grid-cols-2 mb-[40px]"
      >
        <DetailCarousel :data="data" />
        <DetailInfo :data="data" />
      </div>
      <DetailRecommend
        v-if="data"
        :classes="
          data[`${category === 'Restaurant' ? 'Cuisine' : category}Classes`][0]
        "
        :city="data.PostalAddress?.City"
        class="container mt-8 md:mt-10"
      />
    </main>
    <main
      v-else
      class="flex justify-center items-center text-gray text-2xl min-h-40"
    >
      <font-awesome-icon icon="spinner" spin />
    </main>
    <Footer class="mt-auto" />
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
import DetailNavbar from "@/components/DetailNavbar.vue";
import DetailBanner from "@/components/DetailBanner.vue";
import DetailCarousel from "@/components/DetailCarousel.vue";
import DetailInfo from "@/components/DetailInfo.vue";
import DetailRecommend from "@/components/DetailRecommend.vue";
import Footer from "@/components/Footer.vue";
import BackToTop from "@/components/BackToTop.vue";

import { ref, computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { searchCategaryDetail } from "@/api";

const route = useRoute();
const data = ref(null); // 預設 null，避免 undefined 問題
const category = computed(() => {
  const param = route.params.category;
  return Array.isArray(param) ? param[0] : param; // 確保是 string
});

watch([() => route.params.category, () => route.params.id], () => {
  fetchInfo();
});

onMounted(() => {
  fetchInfo();
});

const fetchInfo = async () => {
  try {
    data.value = await searchCategaryDetail(category.value, route.params.id);
  } catch (error) {
    console.error("獲取詳細資料失敗", error);
  }
};
</script>

<style scoped>
@media (max-width: 767px) {
  .md_no_padding {
    padding-left: 0;
    padding-right: 0;
  }
}
</style>
