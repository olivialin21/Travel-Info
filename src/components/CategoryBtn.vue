<template>
  <button :class="['btn', { active: active }]">
    <p>
      {{ text }}
    </p>
    <div
      class="w-[14px] md:w-[20px] h-[14px] md:h-[20px] flex justify-center items-center"
    >
      <font-awesome-icon
        v-if="icon"
        :icon="icon"
        class="w-[12px] md:w-[18px] h-[12px] md:h-[18px]"
      />
    </div>
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  text: string;
  icon: string;
  active: boolean;
}>();
</script>

<style lang="scss" scoped>
.btn {
  @apply min-h-0 h-auto flex items-center gap-1 md:gap-2 font-normal px-[12px] md:px-[24px] py-[8px] md:pt-[14px] md:pb-[13px] bg-white text-gray rounded-[24px] text-[14px]/[19px] md:text-[16px]/[21px];
}
.btn:hover {
  @apply text-red border-red;
}

.active,
.active:hover {
  @apply text-white bg-red border-red;
}
</style>