<template>
  <Breadcrumb :current="'Giỏ hàng'" />
  <div class="max-w-7xl mx-auto p-4">
    <h2 class="text-xl font-bold mb-4">Giỏ hàng</h2>
    <EmptyCard v-if="cart.length === 0" />

    <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="md:col-span-2">
        <div
          v-for="item in cart"
          :key="item.id"
          class="flex justify-between items-center border-b py-3"
        >
          <div class="flex items-center justify-between w-full">
            <div class="flex gap-4 items-center">
              <img :src="item.image" class="w-16 h-16 object-contain" />
              <div>
                <p>{{ item.name }}</p>
                <div class="flex items-center gap-2">
                  <button
                    class="px-2 py-1 border text-sm"
                    @click="decreaseQuantity(item)"
                    :disabled="item.quantity <= 1"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    class="w-16 border text-center py-1 text-sm"
                    :value="item.quantity"
                    @input="onInputQuantity($event, item)"
                    @blur="onBlur(item)"
                    min="1"
                  />
                  <button class="px-2 py-1 border text-sm" @click="increaseQuantity(item)">
                    +
                  </button>
                </div>
              </div>
            </div>
            <div>
              <p>{{ (item.quantity * item.price).toLocaleString() }}₫</p>
              <button @click="remove(item.id)" class="cursor-pointer text-red-500 text-sm">
                Xóa
              </button>
            </div>
          </div>
        </div>
        <div class="mt-6 text-right">
          <button @click="clear" class="cursor-pointer mb-2 text-sm underline text-gray-500">
            Xóa tất cả
          </button>
          <p class="font-semibold">Tổng cộng: {{ totalPrice.toLocaleString() }}₫</p>
        </div>
      </div>
      <div class="border p-4 bg-gray-50 rounded">
        <h3 class="font-bold mb-2">HẸN GIỜ NHẬN HÀNG</h3>
        <label>Ngày nhận hàng</label>
        <input
          type="date"
          v-model="deliveryDate"
          :min="today"
          class="border p-2 rounded w-full mb-3"
        />

        <label>Thời gian nhận hàng</label>
        <select v-model="deliveryTime" class="border p-2 rounded w-full mb-3">
          <option>Chọn thời gian</option>
          <option value="morning">Sáng</option>
          <option value="afternoon">Chiều</option>
        </select>

        <label>Địa chỉ nhận hàng</label>
        <input
          type="text"
          v-model="deliveryAddress"
          placeholder="Nhập địa chỉ nhận hàng"
          class="border p-2 rounded w-full mb-3"
        />

        <div class="flex justify-between font-bold text-lg mb-1">
          <span>TỔNG CỘNG</span>
          <span>{{ totalPrice.toLocaleString() }}₫</span>
        </div>
        <button class="cursor-pointer hover:opacity-[0.8] bg-black text-white w-full py-2 rounded">
          Thanh Toán
        </button>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import EmptyCard from './components/EmptyCard.vue'

const store = useStore()
const cart = computed(() => store.state.cart)
const totalPrice = computed(() => store.getters.totalPrice)
const today = new Date().toISOString().split('T')[0]
const deliveryDate = ref(today)
const deliveryTime = ref('morning')
const deliveryAddress = ref('')

const remove = (id: number) => {
  store.commit('removeFromCart', id)
}
const clear = () => {
  store.commit('clearCart')
}

const increaseQuantity = (item: any) => {
  store.commit('updateCartQuantity', { id: item.id, quantity: item.quantity + 1 })
}

const decreaseQuantity = (item: any) => {
  if (item.quantity > 1) {
    store.commit('updateCartQuantity', { id: item.id, quantity: item.quantity - 1 })
  }
}

const onBlur = (item: any) => {
  if (!item.quantity || item.quantity < 1) {
    item.quantity = 1
  }
  store.commit('updateCartQuantity', {
    id: item.id,
    quantity: item.quantity,
  })
}

const onInputQuantity = (e: Event, item: any) => {
  const value = Number((e.target as HTMLInputElement).value)
  item.quantity = value
}
</script>
<style scoped>
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>