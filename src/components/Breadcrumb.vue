<template>
  <nav class="text-sm text-gray-500 py-1.5 px-2 bg-[#F6F6F6]" aria-label="Breadcrumb">
    <ol class="container mx-auto list-none flex space-x-1">
      <li>
        <RouterLink to="/" class="hover:underline">Trang chủ</RouterLink>
        <span> /</span>
      </li>
      <li class="text-black font-medium">
        {{ current }}
      </li>
    </ol>
  </nav>
</template>

<script setup lang="ts">
defineProps<{
  current: string
}>()
</script>
