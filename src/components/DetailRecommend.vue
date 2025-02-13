<template>
  <div>
    <h3 class="sub_title">你可能會喜歡</h3>
    <Swiper
      :style="{
        '--swiper-navigation-color': '#fff',
        '--swiper-pagination-color': '#fff',
        '--swiper-navigation-sides-offset': swiperNavigationOffset + 'px',
      }"
      :slidesPerView="slidesPerView"
      :spaceBetween="spaceBetween"
      :modules="swiperModules"
      :navigation="navigationOptions as any"
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
  </div>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";
import { searchCategary } from "@/api";
import Card from "./Card.vue";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const props = defineProps({
  city: String,
  classes: Number,
});

const route = useRoute();
const category = computed(() => {
  const param = route.params.category;
  return Array.isArray(param) ? param[0] : param;
});

const navigationOptions = {
  enabled: true
};

const loading = ref(false);
const data = ref([]);
const swiperModules = [Navigation];
const slidesPerView = ref(4);
const spaceBetween = ref(20);
const swiperNavigationOffset = ref(70);

const updateSlidesPerView = () => {
  const width = window.innerWidth;

  if (width >= 1024) {
    slidesPerView.value = 4;
    spaceBetween.value = 20;
    swiperNavigationOffset.value = 70;
  } else if (width >= 768) {
    slidesPerView.value = 3;
    spaceBetween.value = 10;
    swiperNavigationOffset.value = 70;
  } else {
    slidesPerView.value = 2;
    spaceBetween.value = 10;
    swiperNavigationOffset.value = 30;
  }
};

onMounted(() => {
  fetchResults();
  updateSlidesPerView();
  window.addEventListener("resize", updateSlidesPerView);
});

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

<style lang="scss" scoped>
.swiper {
  width: calc(100% + 120px);
  height: 100%;
  padding: 60px;
  margin: -60px;

  mask-image: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0px,
    rgba(241, 241, 241, 1) 60px,
    rgba(241, 241, 241, 1) calc(100% - 60px),
    rgba(255, 255, 255, 0) 100%
  );
}

@media (max-width: 767px) {
  .swiper {
    width: calc(100% + 40px);
    padding: 20px 20px 32px;
    margin: -20px -20px -32px;

    mask-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0px,
      rgba(241, 241, 241, 1) 20px,
      rgba(241, 241, 241, 1) calc(100% - 20px),
      rgba(255, 255, 255, 0) 100%
    );
  }
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: stretch;
  height: auto;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.swiper-wrapper {
  display: flex;
  align-items: stretch;
}

.sub_title {
  @apply text-[16px]/[21px] text-gray md:text-black md:text-[20px]/[26px] pl-0 md:pl-[8px] relative mb-[9px] md:mb-[20px];
}
.sub_title::before {
  @apply hidden md:block bg-blue absolute top-[-1px] left-0 block w-[4px] h-[21px] md:h-[28px];
  content: "";
}
</style>