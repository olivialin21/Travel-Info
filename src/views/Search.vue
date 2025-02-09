<template>
  <div class="min-h-screen">
    <SearchBanner />
    <SearchList />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SearchBanner from "@/components/SearchBanner.vue";
import SearchList from "@/components/SearchList.vue";
import Footer from "@/components/Footer.vue";
</script>