<template>
  <Breadcrumb :current="'Chi tiết sản phẩm'" />
  <div
    v-if="isLoading"
    class="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-20 py-10 animate-pulse"
  >
    <div class="flex flex-col md:flex-row gap-6">
      <div class="flex md:flex-col gap-2">
        <div v-for="i in 3" :key="i" class="w-16 h-16 bg-gray-200 rounded" />
      </div>
      <div class="flex-1">
        <div class="w-full h-[500px] bg-gray-200 rounded" />
      </div>
    </div>

    <div class="space-y-4">
      <div class="h-6 bg-gray-300 w-1/2 rounded" />
      <div class="h-5 bg-gray-300 w-1/3 rounded" />
      <div class="flex gap-2">
        <div class="w-8 h-10 bg-gray-200 rounded" />
        <div class="w-16 h-10 bg-gray-200 rounded" />
        <div class="w-8 h-10 bg-gray-200 rounded" />
      </div>
      <div class="h-12 bg-gray-300 w-full rounded" />
      <div class="h-12 bg-gray-300 w-full rounded" />
      <div class="h-6 bg-gray-200 w-1/3 rounded mt-10" />
      <div class="h-20 bg-gray-200 w-full rounded" />
      <div class="h-6 bg-gray-200 w-1/3 rounded" />
      <div class="h-20 bg-gray-200 w-full rounded" />
    </div>
  </div>

  <div v-else-if="product" class="grid grid-cols-1 md:grid-cols-2 gap-10 px-4 md:px-20 py-10">
    <div class="flex flex-col md:flex-row gap-6">
      <div class="flex md:flex-col gap-2">
        <img
          v-for="(img, index) in product.images"
          :key="index"
          :src="img"
          class="w-16 h-16 object-cover border cursor-pointer"
          :class="{ 'border-black': selectedImg === img }"
          @click="selectedImg = img"
        />
      </div>

      <div class="flex-1">
        <img :src="selectedImg" class="w-full object-contain max-h-[500px]" />
      </div>
    </div>

    <div>
      <h1 class="text-2xl font-semibold">{{ product.name }}</h1>
      <p class="text-xl font-medium text-red-600 mt-2">
        {{ product.price.toLocaleString('vi-VN') }}₫
      </p>

      <div class="flex items-center gap-4 mt-6">
        <button class="cursor-pointer border px-3 py-1" @click="decrease">-</button>
        <!-- <span>{{ quantity }}</span> -->

        <input
          type="number"
          class="w-16 border text-center py-1 text-sm"
          :value="quantity"
          @input="onInputQuantity($event, product)"
          @blur="onBlur(product)"
          min="1"
        />
        <button class="cursor-pointer border px-3 py-1" @click="increase">+</button>
      </div>

      <div class="mt-6 space-y-3">
        <button
          @click="addToCart"
          class="cursor-pointer hover:opacity-[0.8] w-full bg-black text-white py-3 uppercase"
        >
          Thêm vào giỏ
        </button>
        <button
          @click="buyNow"
          class="cursor-pointer hover:opacity-[0.8] w-full bg-red-600 text-white py-3 uppercase"
        >
          Mua ngay
        </button>
      </div>

      <div class="mt-10 border-t pt-4">
        <div class="mb-4">
          <div class="font-semibold text-lg cursor-pointer">Mô tả sản phẩm</div>
          <p class="mt-2 text-sm text-gray-700 whitespace-pre-line">
            {{ product.description }}
          </p>
        </div>

        <div>
          <div class="font-semibold text-lg cursor-pointer">Chính sách đổi trả</div>
          <p class="mt-2 text-sm text-gray-700 whitespace-pre-line">
            {{ product.returnPolicy }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Breadcrumb from '@/components/Breadcrumb.vue'
import { products } from '../data/index'
import { useStore } from 'vuex'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const route = useRoute()
const router = useRouter()
const productId = Number(route.params.id)
const product = ref(products.find((p) => p.id === productId) || null)
if (!product) {
  router.replace('/products')
}

const selectedImg = ref(product.value?.images[0] || '')
const quantity = ref(1)

const onBlur = (item: any) => {
  if (!quantity.value || quantity.value < 1) {
    quantity.value = 1
  }
}

const onInputQuantity = (e: Event, item: any) => {
  const value = Number((e.target as HTMLInputElement).value)
  quantity.value = value
}

const increase = () => quantity.value++
const decrease = () => {
  if (quantity.value > 1) quantity.value--
}

const store = useStore()
const addToCart = () => {
  if (product) {
    store.commit('addToCart', { product: product.value, quantity: quantity.value })
    toast.success(`Đã thêm "${product.value.name}" vào giỏ hàng!`, {
      position: 'top-left',
    })
  }
}

const buyNow = () => {
  if (!product) return
  store.commit('addToCart', { product: product.value, quantity: quantity.value })
  router.push('/cart')
}

const isLoading = ref(true)
watch(
  () => route.params.id,
  async (newId) => {
    isLoading.value = true
    await new Promise((r) => setTimeout(r, 500))
    const found = products.find((p) => p.id === Number(newId))
    if (!found) {
      router.replace('/products')
      return
    }
    product.value = found
    selectedImg.value = found.images[0]
    quantity.value = 1
    isLoading.value = false
  },
  { immediate: true },
)
</script>

<style scoped>
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
