<template>
  <Breadcrumb :current="lookbook.title" />
  <div class="text-center my-8">
    <h1 class="text-2xl font-bold uppercase">{{ lookbook.title }}</h1>
    <p class="text-sm mt-1 text-gray-600">{{ lookbook.subtitle }}</p>
    <p class="text-xs text-gray-400 mt-2">DoThanh</p>
  </div>
  <div class="max-w-3xl mx-auto px-4 py-10">
    <div v-for="(img, i) in lookbook.images" :key="i" class="mb-6">
      <img :src="img" class="w-full object-cover" />
    </div>

  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { gallery } from '../data'
import Breadcrumb from '@/components/Breadcrumb.vue'

const route = useRoute()
const router = useRouter()
const id = route.params.id as string

const lookBookId = Number(id)

const lookbook = gallery.find((g) => g.id === lookBookId) || {
  title: 'Không tìm thấy',
  subtitle: '',
  images: [],
}
</script>
