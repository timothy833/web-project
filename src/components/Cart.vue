<template>
<div class="container mt-4">
    <div class="row mb-3">
        <div class="col-12">
            <!-- 顯示購物車總計 -->
            <h4>購物車總計：{{ totalQuantity }} 件，總價：{{ totalPrice }} NTD</h4>
        </div>
    </div>
    <ul class="list-group">
        <!-- 迭代購物車中的商品 -->
        <li v-for="item in cartItems" :key="item.id" class="list-group-item">
            <div class="d-flex justify-content-between align-items-center">
                <!-- 選中商品的多選框 -->
                <div class="form-check d-inline-block me-3">
                    <input type="checkbox" v-model="selectedItems[item.id]" class="form-check-input shadow-sm border-primary" />
                </div>
                <!-- 商品圖片 -->
                <img :src="item.image" class="img-cover me-3" style="max-width: 100px;" :alt="item.name"/>
                <div>
                    <!-- 商品名稱 -->
                    <h5>{{ item.name }}</h5>
                        <!-- 商品價格 -->
                    <p>{{ item.price }} NTD</p>
                </div>
                <div>
                    <!-- 購買數量輸入框   @input 事件監聽輸入事件-->
                    <input @input="updateCart" type="number" class="form-control" v-model="item.quantity" min="1" />
                </div>
                <!-- 移除商品按鈕 -->
                <button type="button" class="btn btn-danger" @click="removeItem(item.id)">x</button>
            </div>
        </li>
    </ul>
    <div class="mt-4">
        <!-- 去買單按鈕 -->
        <button type="button" class="btn btn-primary" @click="checkout">去買單</button>
        ({{ selectedTotalPrice }} NTD)
    </div>
</div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';
import { useCartStore } from '@/stores';


// 獲取購物車的 store
const cartStore = useCartStore();


// 監聽 cartItems，從 store 獲取購物車項目
const cartItems = computed(() => cartStore.cart);
const selectedItems = ref<Record<number, boolean>>({});

// 計算購物車總數量和總價格
const totalQuantity = computed(() => cartStore.totalQuantity);
const totalPrice = computed(() => cartStore.totalPrice);
const selectedTotalPrice = computed(() => cartStore.selectedTotalPrice(selectedItems.value));

// 初始化時從 localStorage 加載數據
onMounted(() => {
    cartStore.loadCartFromLocalStorage();
});

// 監聽 cartItems 的變化，並更新 localStorage
watch(cartItems, (newcartItems) => {
    console.log('Saving to localStorage:', JSON.stringify(newcartItems));
    localStorage.setItem('cart',JSON.stringify(newcartItems))
},{deep:true}) 

// 更新購物車（例如數量變更時）
const updateCart = () => {
    localStorage.setItem('cart', JSON.stringify(cartItems.value))
}



// 移除購物車項目
const removeItem = (productId: number) => {
  cartStore.removeFromCart(productId);
  updateCart(); // 移除商品後更新 localStorage
};


// 結帳
const checkout = () => {
//   alert(`買單總金額：${selectedTotalPrice.value} NTD`);
//   cartStore.clearCart();  // 清空 Pinia store 中的購物車數據
//   localStorage.removeItem('cart'); // 清除 localStorage 中的購物車數據
  
  if (selectedTotalPrice.value === 0) {
    alert ("請至少選擇一項商品結帳");
    return; 
  }
  else{
     // 過濾掉未被选中的商品，仅保留未选中的商品
    alert (`買單總金額：${selectedTotalPrice.value} NTD`);
    const remainingItems = cartItems.value.filter(item => !selectedItems.value[item.id]);

    // 更新 Pinia store 中的购物车数据
    cartStore.setCart(remainingItems);
     // 更新 localStorage 中的购物车数据
    localStorage.setItem('cart', JSON.stringify(remainingItems));

    // 清空选中的复选框
    for (const id in selectedItems.value) {
        if (selectedItems.value[id]) {
            delete selectedItems.value[id];
        }
    }
  }
  
};



</script>

<style lang="scss" scoped>
$border-color: black !default;

.form-check-input.border-primary {
  border-color: $border-color !important;
}

.img-cover{
    width: 100px;
    left: 100px;
    object-fit: cover;
    border-radius: 5%;
}

</style>