<template>
  <h3>你可能會喜歡</h3>
  <Swiper
    :style="{
      '--swiper-navigation-color': '#fff',
      '--swiper-pagination-color': '#fff',
    }"
    :slidesPerView="4"
    :spaceBetween="20"
    :navigation="true"
    :modules="swiperModules"
    class="mySwiper"
  >
    <SwiperSlide v-for="item in data" :key="item[`${category}ID`]">
      <router-link
        :to="`/${category}/details/${item[`${category}ID`]}`"
        class="block w-full"
      >
        <Card :data="item" />
      </router-link>
    </SwiperSlide>
  </Swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";
import { searchCategary } from "@/api";
import Card from "./Card.vue";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

const props = defineProps({
  city: String,
  classes: Number,
});
const route = useRoute();
const category = computed(() => route.params.category);
const loading = ref(false);
const data = ref([]);
const swiperModules = [Navigation];

onMounted(() => {
  fetchResults();
});

// **抓取資料**
const fetchResults = async () => {
  loading.value = true;
  try {
    let filterQuery = `$filter=PostalAddress/City eq '${props.city}' and ${
      category.value === "Restaurant" ? "Cuisine" : category.value
    }Classes/any(c: c eq ${props.classes})`;

    const response = await searchCategary(category.value, filterQuery, 12, 0);
    data.value = response.value;
  } catch (error) {
    console.error("搜尋發生錯誤", error);
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  /* Center slide text vertically */
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>