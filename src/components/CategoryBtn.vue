<template>
  <button class="btn">{{ props.text }}</button>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string;
}>();
</script>

<style lang="scss" scoped>
</style>