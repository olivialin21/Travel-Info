<template>
  <div
    class="pt-[29px] md:pt-[23px] pb-[27px] placeholder:md:pb-[22px] fixed top-0 left-0 w-full bg-white shadow-md z-10"
  >
    <div class="container">
      <div class="flex justify-between items-center">
        <router-link
          :to="`/${category}`"
          class="hidden md:block py-[3.5px] hover:opacity-70 transition-opacity"
        >
          <img src="/logo_blue.svg" alt="logo" />
        </router-link>
        <router-link
          :to="`/${category}`"
          class="flex items-center gap-2 md:hidden hover:opacity-70 transition-opacity"
        >
          <div class="w-[24px] h-[24px] flex justify-center items-center">
            <font-awesome-icon icon="chevron-left" class="w-[20px] h-[20px]" />
          </div>
          <p class="text-[14px]/[19px]">返回</p>
        </router-link>
        <!-- <CollectBtnWide /> -->
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import CollectBtnWide from "./CollectBtnWide.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const category = computed(() => route.params.category);
</script>

<style scoped>
</style>