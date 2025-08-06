<template>
  <Breadcrumb :current="'Sản phẩm'" />
  <div class="px-4 md:px-20 py-10">
    <div
      class="flex justify-center space-x-6 overflow-x-auto pb-4 mb-6 text-xl font-medium uppercase"
    >
      <button
        v-for="cat in categories"
        :key="cat.value"
        :class="[
          'whitespace-nowrap cursor-pointer pb-2',
          selectedCategory === cat.value
            ? 'border-b text-black'
            : 'text-[#7e7e7e] hover:text-black',
        ]"
        @click="selectCategory(cat.value)"
      >
        {{ cat.label }}
      </button>
    </div>
    <div class="flex justify-between items-center mb-6">
      <h2 class="text-2xl font-semibold">Tất cả sản phẩm</h2>
      <select v-model="sortOption" class="border border-gray-300 text-sm px-3 py-1 rounded">
        <option value="name-asc">Tên A → Z</option>
        <option value="name-desc">Tên Z → A</option>
        <option value="price-asc">Giá tăng dần</option>
        <option value="price-desc">Giá giảm dần</option>
      </select>
    </div>
    <div v-if="isLoading" class="grid grid-cols-2 md:grid-cols-3 gap-6">
      <div v-for="n in 6" :key="n" class="animate-pulse space-y-4">
        <div class="bg-gray-200 h-68 w-full rounded"></div>
        <div class="bg-gray-200 h-4 w-3/4 rounded"></div>
        <div class="bg-gray-200 h-4 w-1/2 rounded"></div>
      </div>
    </div>
    <div v-else class="grid grid-cols-2 md:grid-cols-3 gap-6">
      <ProductCard v-for="product in sortedProducts" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, onMounted } from 'vue'
import ProductCard from '@/components/ProductCard.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import { products } from '../data/index'
import { useRoute, useRouter } from 'vue-router'

const sortOption = ref('name-asc')
const route = useRoute()
const router = useRouter()

const isLoading = ref(true)
onMounted(() => {
  setTimeout(() => {
    isLoading.value = false
  }, 1000)
})

const categories = [
  { label: 'Tất cả', value: 'all' },
  { label: 'Áo', value: 'shirt' },
  { label: 'Quần', value: 'pant' },
  { label: 'Phụ kiện', value: 'accessory' },
]

const selectedCategory = ref(route.query.category || 'all')
watch(
  () => route.query.category,
  (newCategory) => {
    selectedCategory.value = newCategory || 'all'
  },
)

const selectCategory = (cat: string) => {
  if (cat === 'all') {
    const { category, ...rest } = route.query
    router.push({ query: rest })
  } else {
    router.push({ query: { ...route.query, category: cat } })
  }
}

const productsFilter = computed(() =>
  route.query.category ? products.filter((p) => p.category === route.query.category) : products,
)
const sortedProducts = computed(() => {
  const sorted = [...productsFilter.value]
  switch (sortOption.value) {
    case 'name-asc':
      return sorted.sort((a, b) => a.name.localeCompare(b.name))
    case 'name-desc':
      return sorted.sort((a, b) => b.name.localeCompare(a.name))
    case 'price-asc':
      return sorted.sort((a, b) => a.price - b.price)
    case 'price-desc':
      return sorted.sort((a, b) => b.price - a.price)
    default:
      return sorted
  }
})
</script>
