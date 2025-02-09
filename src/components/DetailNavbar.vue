<template>
  <div class="pt-[23px] pb-[22px] fixed top-0 left-0 w-full bg-white shadow-md z-10">
    <div class="container">
      <div class="flex justify-between items-center">
        <router-link :to="`/${category}`">
          <img
            class="hover:opacity-70 transition-opacity"
            src="/logo_blue.svg"
            alt="logo"
          />
        </router-link>
        <CollectBtnWide />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import CollectBtnWide from "./CollectBtnWide.vue";
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();
const category = computed(() => route.params.category);
</script>

<style scoped>
</style>