import { createStore } from 'vuex'
interface CartItem {
  id: number
  name: string
  image: string
  price: number
  quantity: number
}

interface State {
  cart: CartItem[]
}

const store = createStore({
  state(): State {
    return {
      cart: [],
    }
  },
  mutations: {
    addToCart(state: State, payload: { product: Omit<CartItem, 'quantity'>; quantity: number }) {
      const existing = state.cart.find((item) => item.id === payload.product.id)
      if (existing) {
        existing.quantity += payload.quantity
      } else {
        state.cart.push({ ...payload.product, quantity: payload.quantity })
      }
    },
    removeFromCart(state: State, id: number) {
      state.cart = state.cart.filter((item) => item.id !== id)
    },
    clearCart(state: State) {
      state.cart = []
    },
    updateCartQuantity(state, { id, quantity }) {
      const product = state.cart.find((item) => item.id === id)
      if (product) {
        product.quantity = quantity
      }
    },
  },
  getters: {
    totalItems(state: State) {
      return state.cart.reduce((sum, item) => sum + item.quantity, 0)
    },
    totalPrice(state: State) {
      return state.cart.reduce((sum, item) => sum + item.quantity * item.price, 0)
    },
  },
})

export default store
