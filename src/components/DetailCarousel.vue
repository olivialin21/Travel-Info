<template>
  <div
    v-if="data && data.Images && data.Images.length"
    class="mb-[20px] lg:mr-[20px]"
  >
    <div class="hidden md:block">
      <Swiper
        :style="{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }"
        :spaceBetween="10"
        :navigation="{ clickable: true }"
        :thumbs="{ swiper: thumbsSwiper }"
        :modules="swiperModules"
        class="mySwiper2"
      >
        <SwiperSlide v-for="img in data.Images" :key="img.URL">
          <img :src="img.URL" :alt="img.Description" />
        </SwiperSlide>
      </Swiper>

      <Swiper
        @swiper="setThumbsSwiper"
        :spaceBetween="10"
        :slidesPerView="3"
        :freeMode="true"
        :watchSlidesProgress="true"
        :modules="swiperModules"
        class="mySwiper"
      >
        <SwiperSlide v-for="img in data.Images" :key="img.URL">
          <img :src="img.URL" :alt="img.Description" />
        </SwiperSlide>
      </Swiper>
    </div>
    <div class="block md:hidden">
      <img
        :src="data.Images[0].URL"
        :alt="data.Images[0].Description"
        class="object-cover object-center h-[239px] w-full"
      />
    </div>
  </div>
  <div v-else class="lg:mr-[20px]">
    <img
      class="hidden lg:block w-full object-cover object-center rounded-lg"
      src="/img_notFound.png"
      alt="notFound"
    />
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

const props = defineProps({ data: Object });

// 避免 data 為 null 時出錯
const images = computed(
  () => props.data?.Images ?? [{ URL: "/img_notFound.png" }]
);

const thumbsSwiper = ref(null);
const setThumbsSwiper = (swiper) => {
  thumbsSwiper.value = swiper;
};

// 定義 Swiper 需要的模組
const swiperModules = [FreeMode, Navigation, Thumbs];
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}

.swiper-slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
  cursor: pointer;
}

.mySwiper2 {
  height: 387px;
  width: 100%;
  margin-bottom: 12px;
}

.mySwiper {
  height: 125px;
  box-sizing: border-box;
}

.mySwiper .swiper-slide {
  width: 25%;
  opacity: 0.4;
}

.mySwiper .swiper-slide-thumb-active {
  opacity: 1;
}
</style>
