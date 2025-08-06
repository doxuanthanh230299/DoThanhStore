<template>
  <div class="text-center py-20">
    <img
      :src="'https://bizweb.dktcdn.net/100/493/598/themes/946486/assets/cart_empty_background.png?1753025584464'"
      alt="empty-card"
      class="w-48 mx-auto mb-6"
    />
    <h2 class="text-xl font-semibold mb-2">“Hổng” có gì trong giỏ hết</h2>
    <p class="text-gray-500 mb-6">Về trang cửa hàng để chọn mua sản phẩm bạn nhé!!</p>
    <router-link
      to="/products"
      class="inline-block border border-black px-6 py-2 hover:bg-black hover:text-white transition"
    >
      Mua sắm ngay
    </router-link>
  </div>
</template>
