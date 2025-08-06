<script setup lang="ts">
import {
  Bars3Icon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
  UserIcon,
} from '@heroicons/vue/16/solid'
import { computed, ref } from 'vue'
import { RouterLink } from 'vue-router'
import { useStore } from 'vuex'
import SearchOverlay from './SearchOverlay.vue'

const store = useStore()
const totalItems = computed(() => store.getters.totalItems)
const isMobileMenuOpen = ref(false)
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const showSearch = ref(false)
</script>

<template>
  <header class="border-b shadow-sm bg-white sticky top-0 z-50">
    <div class="container mx-auto flex items-center justify-between px-4 py-3">
      <button class="lg:hidden" aria-label="menu" @click="toggleMobileMenu">
        <Bars3Icon class="w-5 h-5" />
      </button>

      <router-link to="/" class="text-2xl font-bold tracking-tight"
        >DoThanh<sup>®</sup></router-link
      >

      <nav class="hidden lg:flex space-x-6 text-sm font-medium uppercase">
        <div class="relative group">
          <router-link to="/products" class="hover:underline flex items-center">
            Sản phẩm
            <ChevronDownIcon class="w-5 h-5 ml-1" />
          </router-link>
          <div
            class="absolute left-0 top-full mt-2 w-48 bg-white border rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10"
          >
            <router-link
              :to="{ path: '/products', query: { category: 'shirt' } }"
              class="block px-4 py-2 hover:bg-gray-100"
            >
              Áo
            </router-link>
            <router-link
              :to="{ path: '/products', query: { category: 'pant' } }"
              class="block px-4 py-2 hover:bg-gray-100"
            >
              Quần
            </router-link>
            <router-link
              :to="{ path: '/products', query: { category: 'accessory' } }"
              class="block px-4 py-2 hover:bg-gray-100"
            >
              Phụ kiện
            </router-link>
          </div>
        </div>

        <router-link :to="'/galery'" class="hover:underline">Thư viện</router-link>

        <router-link :to="'/about'" class="hover:underline">Giới thiệu</router-link>
      </nav>

      <div class="flex items-center space-x-4">
        <button class="cursor-pointer" @click="showSearch = true" aria-label="search">
          <MagnifyingGlassIcon class="w-5 h-5" />
        </button>
        <router-link :to="'/cart'" class="relative" aria-label="cart">
          <ShoppingCartIcon class="w-5 h-5" />
          <span
            v-if="totalItems"
            class="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
            >{{ totalItems }}</span
          >
        </router-link>
      </div>
    </div>
    <div
      v-show="isMobileMenuOpen"
      class="lg:hidden absolute top-full left-0 w-full bg-white shadow-md border-t z-40"
    >
      <div class="px-4 py-4 space-y-2 text-sm font-medium">
        <router-link to="/products" class="block hover:underline" @click="closeMobileMenu"
          >Sản phẩm</router-link
        >
        <router-link to="/galery" class="block hover:underline" @click="closeMobileMenu"
          >Thư viện</router-link
        >
        <router-link to="/about" class="block hover:underline" @click="closeMobileMenu"
          >Giới thiệu</router-link
        >
      </div>
    </div>
  </header>
  <SearchOverlay v-if="showSearch" v-model="showSearch" />
</template>
