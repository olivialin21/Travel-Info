<template>
  <button
    @click="scrollToTop"
    :class="[
      'fixed z-50 bottom-4 md:bottom-20 2xl:bottom-32 right-4 2xl:right-20 text-white bg-red w-[48px] h-[48px] rounded-full shadow-lg cursor-pointer transition-all',
      isVisible ? 'opacity-100' : 'opacity-0',
    ]"
  >
    <font-awesome-icon icon="angle-up" class="w-[24px] h-[24px] mt-1" />
  </button>
</template>

<script setup>
import { ref, onMounted } from "vue";

// 用來控制按鈕是否顯示
const isVisible = ref(false);

// 監聽滾動事件，當頁面滾動到一定位置時顯示按鈕
const checkScrollPosition = () => {
  if (window.scrollY > 300) {
    isVisible.value = true;
  } else {
    isVisible.value = false;
  }
};

// 點擊按鈕時滾動回頁面最上方
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", checkScrollPosition);
});
</script>

<style scoped>
/* 這裡已經設定好按鈕的樣式 */
</style>
