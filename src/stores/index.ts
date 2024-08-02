import { defineStore } from 'pinia';
import { CartItem } from "./types";

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as CartItem[]
  }),
  actions: {
    addToCart(product: CartItem) {
      const existingItem = this.cart.find(item => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += product.quantity;
      } else {
        this.cart.push(product);
      }
    },
    removeFromCart(productId: number) {
      this.cart = this.cart.filter(item => item.id !== productId);
    }
  },
  getters: {
    totalQuantity(state) {
      return state.cart.reduce((sum, item) => sum + item.quantity, 0);
    },
    totalPrice(state) {
      return state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },
    selectedTotalPrice(state) {
      return (selectedItems: Record<number, boolean>) => {
        return state.cart.reduce((sum, item) => {
          return selectedItems[item.id] ? sum + item.price * item.quantity : sum;
        }, 0);
      }
    }
  }
});