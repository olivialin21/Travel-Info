<template>
  <div class="min-h-screen flex flex-col">
    <SearchBanner />
    <SearchList />
    <Footer class="mt-auto" />
    <BackToTop />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SearchBanner from "@/components/SearchBanner.vue";
import SearchList from "@/components/SearchList.vue";
import Footer from "@/components/Footer.vue";
import BackToTop from "@/components/BackToTop.vue";
</script>