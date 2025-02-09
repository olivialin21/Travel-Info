<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="svgName" :fill="color" />
  </svg>
</template>

<script setup>
import { computed, defineProps } from "vue";
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  className: {
    type: String,
  },
  color: {
    type: String,
    default: "#333",
  },
});
const svgName = computed(() => {
  if (props.name.includes("/")) {
    return `#${props.name}`;
  } else {
    return `#/${props.name}`;
  }
});
const svgClass = computed(() =>
  props.className ? "svg-icon " + props.className : "svg-icon"
);
</script>

<style>
.svg-icon {
  width: 100%;
  height: 100%;
  max-width: 100px;
  max-height: 100px;
  fill: currentColor;
  overflow: hidden;
}
</style>