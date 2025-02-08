<template>
  <div>
    <SearchBanner @search="handleSearch" />
    <SearchList :searchParams="searchParams" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import SearchBanner from "@/components/SearchBanner.vue";
import SearchList from "@/components/SearchList.vue";

const searchParams = ref({ city: "", keyword: "" });

const handleSearch = ({ city, keyword }) => {
  searchParams.value = { city, keyword };
};
</script>