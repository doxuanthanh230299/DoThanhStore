<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
    <div
      v-for="item in gallery"
      :key="item.title"
      class="relative group h-[300px] md:h-[500px] overflow-hidden cursor-pointer"
    >
      <img
        :src="item.thumb"
        alt="gallery"
        class="w-full h-full object-cover transform group-hover:scale-105 transition duration-300"
      />
      <div
        class="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center"
      >
        <div class="text-white text-center">
          <h3 class="text-xl font-bold">{{ item.title }}</h3>
          <p class="text-sm">{{ item.subtitle }}</p>
        </div>
      </div>
      <router-link :to="`/lookbook/${item.id}`" class="absolute inset-0" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { gallery } from '../data/index'
</script>
