<template>
  <Transition name="fade-slide-down">
    <div class="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" @click.self="close">
      <div class="bg-white ">
        <div class="container mx-auto flex items-center justify-between py-3">
          <router-link to="/" class="text-2xl font-bold tracking-tight"
            >DoThanh<sup>®</sup></router-link
          >
          <div class="relative w-1/2 px-4">
            <div class="flex items-center bg-white rounded-full border-[1px] border-solid shadow-lg overflow-hidden">
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Tìm sản phẩm..."
                class="flex-1 px-6 py-3 outline-none text-sm"
              />
              <button class="bg-black text-white px-4 py-3">
                <MagnifyingGlassIcon class="w-5 h-5" />
              </button>
            </div>
    
            <ul
              v-if="searchQuery"
              class="absolute b-0 l-0 w-full bg-white rounded-lg mt-4 shadow-md divide-y overflow-hidden max-h-[400px] overflow-y-auto"
            >
              <li
                v-for="product in filteredProducts"
                :key="product.id"
                class="px-6 py-3 hover:bg-gray-100 cursor-pointer text-sm"
                @click="goToProduct(product.id)"
              >
                {{ product.name }}
              </li>
              <li v-if="filteredProducts.length === 0" class="px-6 py-3 text-gray-400 text-sm">
                Không tìm thấy sản phẩm nào.
              </li>
            </ul>
          </div>
          <div class="flex items-center space-x-4">
            <router-link :to="'/cart'" class="relative" aria-label="cart">
              <ShoppingCartIcon class="w-8 h-8" />
              <span
                v-if="totalItems"
                class="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
                >{{ totalItems }}</span
              >
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import { products } from '@/data/index'
import { MagnifyingGlassIcon, ShoppingCartIcon } from '@heroicons/vue/16/solid'
import { useStore } from 'vuex';

defineProps<{ modelValue: boolean }>()
const emit = defineEmits(['update:modelValue'])

const searchQuery = ref('')
const router = useRouter()

const close = () => {
  emit('update:modelValue', false)
  searchQuery.value = ''
}

const filteredProducts = computed(() =>
  products.filter((p) => p.name.toLowerCase().includes(searchQuery.value.toLowerCase())),
)

const goToProduct = (id: number) => {
  router.push(`/products/${id}`)
  close()
}

const store = useStore()
const totalItems = computed(() => store.getters.totalItems)
</script>
<style scoped>
.fade-slide-down-enter-active,
.fade-slide-down-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.fade-slide-down-enter-from,
.fade-slide-down-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
.fade-slide-down-enter-to,
.fade-slide-down-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
