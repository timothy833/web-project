<template>
<div class="container mt-4">
    <div class="row mb-3">
        <div class="col-12">
            <!-- 顯示購物車總計 -->
            <h4>購物車總計：{{ totalQuantity }} 件，總價：{{ totalPrice }} NTD</h4>
        </div>
    </div>
    <div class="list-group">
        <!-- 迭代購物車中的商品 -->
        <div v-for="item in cartItems" :key="item.id" class="list-group-item">
            <div class="d-flex justify-content-between align-items-center">
                <!-- 選中商品的多選框 -->
                <div class="form-check d-inline-block me-3">
                    <input type="checkbox" v-model="selectedItems[item.id]" class="form-check-input shadow-sm border-primary" />
                </div>
                <!-- 商品圖片 -->
                <img :src="item.image" class="img-cover me-3" style="max-width: 100px;" />
                <div>
                    <!-- 商品名稱 -->
                    <h5>{{ item.name }}</h5>
                        <!-- 商品價格 -->
                    <p>{{ item.price }} NTD</p>
                </div>
                <div>
                    <!-- 購買數量輸入框 -->
                    <input type="number" class="form-control" v-model="item.quantity" min="1" />
                </div>
                <!-- 移除商品按鈕 -->
                <button class="btn btn-danger" @click="removeItem(item.id)">x</button>
            </div>
        </div>
    </div>
    <div class="mt-4">
        <!-- 去買單按鈕 -->
        <button class="btn btn-primary" @click="checkout">去買單</button>
        ({{ selectedTotalPrice }} NTD)
    </div>
</div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
import { useCartStore } from '@/stores';

const cartStore = useCartStore();

const cartItems = computed(() => cartStore.cart);
const selectedItems = ref<Record<number, boolean>>({});

const totalQuantity = computed(() => cartStore.totalQuantity);
const totalPrice = computed(() => cartStore.totalPrice);
const selectedTotalPrice = computed(() => cartStore.selectedTotalPrice(selectedItems.value));

const removeItem = (productId: number) => {
  cartStore.removeFromCart(productId);
};

const checkout = () => {
  alert(`買單總金額：${selectedTotalPrice.value} NTD`);
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