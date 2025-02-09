<template>
  <div class="min-h-screen">
    <DetailNavbar />
    <DetailBanner />
    <main class="container pt-[40px] pb-[60px]">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-[20px] mb-[40px]">
        <DetailCarousel :data="data" />
        <DetailInfo :data="data" />
      </div>
      <DetailRecommend v-if="data"
        :classes="
          data[`${category === 'Restaurant' ? 'Cuisine' : category}Classes`][0]
        "
        :city="data.PostalAddress?.City"
      />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import DetailNavbar from "@/components/DetailNavbar.vue";
import DetailBanner from "@/components/DetailBanner.vue";
import DetailCarousel from "@/components/DetailCarousel.vue";
import DetailInfo from "@/components/DetailInfo.vue";
import DetailRecommend from "@/components/DetailRecommend.vue";
import Footer from "@/components/Footer.vue";

import { ref, computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import { searchCategaryDetail } from "@/api";

const route = useRoute();
const data = ref(null); // 預設 null，避免 undefined 問題
const category = computed(() => route.params.category);

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
