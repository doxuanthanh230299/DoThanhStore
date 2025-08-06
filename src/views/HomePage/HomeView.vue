<template>
  <Banner />
  <section class="text-center mt-16 mb-10">
    <h2 class="text-2xl md:text-3xl font-serif tracking-wide uppercase">Newest Arrivals</h2>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 my-10 max-w-6xl mx-auto px-4">
      <ProductCard v-for="item in 4" :key="products[item].id" :product="products[item]" />
    </div>

    <router-link
      :to="'/products'"
      class="mt-10 border border-black px-6 py-2 tracking-widest text-sm hover:bg-black hover:text-white transition"
    >
      XEM TẤT CẢ
    </router-link>
  </section>
</template>
<script setup lang="ts">
import Banner from '@/components/Banner.vue'
import ProductCard from '@/components/ProductCard.vue'
import { products } from '@/data/index'
</script>
