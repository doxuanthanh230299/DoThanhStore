<template>
  <footer class="bg-gray-50 text-sm mt-10 relative">
    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-8">
      <div>
        <p class="font-medium mb-2">Chính sách</p>
        <ul class="space-y-1">
          <li>
            <a href="#" class="hover:underline flex items-center"
              ><span class="mr-1">›</span> Chính sách bảo mật</a
            >
          </li>
          <li>
            <a href="#" class="hover:underline flex items-center"
              ><span class="mr-1">›</span> Chính sách đổi trả</a
            >
          </li>
        </ul>
      </div>

      <div>
        <p class="font-medium mb-2">Liên hệ</p>
        <p><strong>Địa chỉ:</strong> Lĩnh Nam, Hoàng Mai, Hà Nội</p>
        <p><strong>Số điện thoại:</strong> 039 723 0299</p>
        <p><strong>Email:</strong> doxuanthanh23299@gmail.com</p>
      </div>

      <div>
        <p class="font-medium mb-2">Theo dõi chúng tôi trên mạng xã hội</p>
        <div class="flex space-x-4 mt-2">
          <a href="#" aria-label="Instagram" class="text-gray-600 hover:text-black text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path
                d="M22 12.1C22 6.5 17.5 2 12 2S2 6.5 2 12.1c0 5 3.7 9.1 8.5 9.9v-7H8v-3h2.5V9.8c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.3.2 2.3.2v2.5h-1.3c-1.3 0-1.7.8-1.7 1.6v1.9H17l-.5 3h-2v7c4.8-.8 8.5-4.9 8.5-9.9z"
              />
            </svg>
          </a>
          <a href="#" aria-label="Instagram" class="text-gray-600 hover:text-black text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              class="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2.1 2 .3 2.5.5.6.2 1 .5 1.5 1 .5.5.8.9 1 1.5.2.5.4 1.3.5 2.5.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c-.1 1.2-.3 2-.5 2.5-.2.6-.5 1-.9 1.5-.5.5-.9.8-1.5 1-.5.2-1.3.4-2.5.5-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2-.1-2-.3-2.5-.5-.6-.2-1-.5-1.5-1-.5-.5-.8-.9-1-1.5-.2-.5-.4-1.3-.5-2.5C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c.1-1.2.3-2 .5-2.5.2-.6.5-1 .9-1.5.5-.5.9-.8 1.5-1 .5-.2 1.3-.4 2.5-.5C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1.1.1-1.7.2-2.1.4-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.1.4-.3 1-.4 2.1-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1.1.2 1.7.4 2.1.2.5.4.8.7 1.1.3.3.6.5 1.1.7.4.1 1 .3 2.1.4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1.1-.1 1.7-.2 2.1-.4.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.1-.4.3-1 .4-2.1.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1.1-.2-1.7-.4-2.1-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.4-.1-1-.3-2.1-.4-1.2-.1-1.6-.1-4.7-.1zM12 5.8a6.2 6.2 0 1 1 0 12.4 6.2 6.2 0 0 1 0-12.4zm0 1.8a4.4 4.4 0 1 0 0 8.8 4.4 4.4 0 0 0 0-8.8zm5.1-.9a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div class="border-t text-center py-4 text-xs text-gray-500">
      © Bản quyền thuộc về <span class="text-orange-600 font-medium">Đỗ Thành</span>
    </div>

    <div class="fixed bottom-5 right-5 flex flex-col items-end space-y-2 z-50">
      <button
        @click="scrollToTop"
        class="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center"
      >
        <ChevronUpIcon class="w-4 h-4" />
      </button>
      <a
        href="tel:0902226803"
        class="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg"
      >
        <PhoneIcon class="w-4 h-4" />
      </a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ChevronUpIcon, PhoneIcon } from '@heroicons/vue/16/solid'

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>
