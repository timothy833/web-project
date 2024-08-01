<template>
    <div class="container mt-4">
        <div class="row">
            <!-- 迭代商品列表，顯示每個商品 -->
            <div class="col-12 col-md-6 col-lg-3" v-for="product in products" :key="product.id">
                <!-- 包含單個商品的組件 -->
                <ProductItem :product="product" @add-to-cart="addToCart1" />
            </div>
        </div>
    </div>
    </template>
    
    <script setup lang="ts">
    import { ref } from 'vue';
    import ProductItem from './ProductItem.vue';
    import { CartItem, Product } from '../stores/types';
    import { useCartStore } from '../stores/index';
    import ramen1 from '@/assets/日本拉麵篇_1.png';
    
    const products = ref<Product[]>([
            {id:1, name:'豚骨拉麵', price:150,image: ramen1, },
            {id:2, name:'醬油拉麵', price:130,image: ramen1, },
            {id:3, name:'咖哩拉麵', price:160,image: ramen1, },
            {id:4, name:'特製拉麵', price:220,image: ramen1, },
        ]);
    
    const store = useCartStore();
    
    const addToCart1 = (product: CartItem) => {
        store.addToCart(product);  // 處理添加到購物車事件
    };
    
    </script>
    <style scoped>
    
    </style>