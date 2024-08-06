<template>
    <div class="card mb-4">
        <!-- 商品圖片 -->
        <img :src="product.image" class="card-img-top" :alt="product.name">
        <div class="card-body">
            <!-- 商品名稱 -->
            <h5 class="card-title">{{ product.name }}</h5>
            <!-- 商品價格 -->
            <p class="card-text">價格: {{ product.price }} NTD</p>
            <div class="input-group mb-3">
                <!-- 購買數量輸入框和加入購物車按鈕 -->
                <input type="number" class="form-control" v-model="quantity" min="1" />
                <button  type="button" class="btn btn-primary" @click="addToCart">加入購物車</button>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Product } from '@/stores/types';
import { ref } from 'vue';
const props = defineProps<{product: Product}>(); // 定義接收的 props

const emits = defineEmits(['add-to-cart']); // 定義發出的事件
const quantity = ref(1);  // 商品購買數量  quantity數量

const addToCart = () => {
    emits('add-to-cart',{ ...props.product, quantity: quantity.value });  // 點擊按鈕時發出事件
    alert(`成功加入購物車`);
};

</script>
<style scoped>
    
</style>