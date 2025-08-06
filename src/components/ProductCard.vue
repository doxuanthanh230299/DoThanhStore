<template>
  <router-link :to="`/products/${product.id}`" class="group flex flex-col text-center cursor-pointer">
    <img
      :src="product.image"
      :alt="product.name"
      @error="onImageError($event, 'image')"
      class="mx-auto flex-1 max-h-72 object-contain duration-300 group-hover:scale-105"
    />
    <div class="flex justify-center mt-2">
      <img
        @error="onImageError($event, 'thumb')"
        :src="product.thumb"
        alt="Thumbnail"
        class="w-6 h-6 rounded-full border"
      />
    </div>
    <h3 class="mt-2 font-light">{{ product.name }}</h3>
    <p class="text-sm font-medium">{{ product.price.toLocaleString() }}₫</p>
  </router-link>
</template>

<script setup lang="ts">
defineProps<{
  product: {
    id: number
    name: string
    image: string
    thumb: string
    price: number
  }
}>()

const onImageError = (event: Event, type: 'image' | 'thumb') => {
  const target = event.target as HTMLImageElement
  target.src =
    type === 'image'
      ? 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?20210521171500'
      : 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Image-not-found.png?20210521171500'
}
</script>
