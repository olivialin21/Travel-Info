<template>
  <div className="card bg-base-100 shadow-xl">
    <figure>
      <img
        class="w-full h-[190px] object-fit object-cover object-center"
        :src="props.data.Images[0]?.URL || '/img_notFound.png'"
        :alt="props.data[`${store.category}Name`]"
      />
    </figure>
    <div className="card-body p-4 pt-3">
      <h2 className="card-title">
        {{ props.data[`${store.category}Name`] }}
      </h2>
      <p>{{ props.data.PostalAddress.City }}</p>
      <ul
        v-if="store.category === 'Attraction'"
        className="card-actions justify-end"
      >
        <li
          v-for="(classNum, index) in props.data.AttractionClasses.length"
          :key="index"
          className="badge badge-outline"
        >
          {{ classEnum[store.category][classNum] }}
        </li>
      </ul>
      <ul
        v-if="store.category === 'Restaurant'"
        className="card-actions justify-end"
      >
        <li
          v-for="(classNum, index) in props.data.CuisineClasses"
          :key="index"
          class="badge badge-outline"
        >
          <span
            v-if="
              (classNum >= 6 && classNum <= 95) ||
              (classNum >= 117 && classNum <= 199) ||
              (classNum >= 205 && classNum <= 253)
            "
          >
            特殊分類
          </span>
          <span v-else>
            {{ classEnum[store.category][classNum] }}
          </span>
        </li>
      </ul>
      <ul
        v-if="store.category === 'Hotel'"
        className="card-actions justify-end"
      >
        <li
          v-for="(classNum, index) in props.data.HotelClasses.length"
          :key="index"
          className="badge badge-outline"
        >
          {{ classEnum[store.category][classNum] }}
        </li>
      </ul>
      <ul
        v-if="store.category === 'Event'"
        className="card-actions justify-end"
      >
        <li
          v-for="(classNum, index) in props.data.EventClasses.length"
          :key="index"
          className="badge badge-outline"
        >
          {{ classEnum[store.category][classNum] }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTourismStore } from "@/store/tourism";
import classEnum from "@/jsons/classEnum.json";

const store = useTourismStore();
const props = defineProps({
  data: Object,
});
</script>

<style scoped>
</style>