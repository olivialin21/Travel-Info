<template>
  <button :class="['btn', { active: active }]">{{ text }}</button>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string;
  active: boolean;
}>();
</script>

<style lang="scss" scoped>
.btn {
  @apply px-[24px] pt-[14px] pb-[13px] bg-white text-gray rounded-[24px] border-0 text-[16px]/[21px];
}

.btn:hover {
  @apply bg-light_gray;
}

.active {
  @apply text-white bg-red;
}

.active:hover {
  @apply text-white bg-red;
}
</style>