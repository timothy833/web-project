import { defineStore } from 'pinia';
import { CartItem } from "./types";

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [] as CartItem[]
  }),
  actions: {
     // 新增 loadCartFromLocalStorage 方法 
    //  確保在页面加载时從 localStorage 正确初始化購物車数據
    loadCartFromLocalStorage(){
      const storedCart = localStorage.getItem('cart');
      if(storedCart){
        this.cart = JSON.parse(storedCart);
      }
    },

    //新增setCart方法處理 localStorage儲存資料
    setCart(cartItems: CartItem[]) { 
      this.cart = cartItems;
    },
    clearCart() {
      this.cart = [];
    },


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
     // 計算購物車中的總數量
    totalQuantity(state) {
      return state.cart.reduce((sum, item) => sum + item.quantity, 0);
    },
    // 計算購物車中的總價格
    totalPrice(state) {
      return state.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },
    // 計算選定項目的總價格
    selectedTotalPrice(state) {
      return (selectedItems: Record<number, boolean>) => {
        return state.cart.reduce((sum, item) => {
          return selectedItems[item.id] ? sum + item.price * item.quantity : sum;
        }, 0);
      }
    }
  }
});