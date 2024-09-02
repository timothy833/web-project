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
    import ProductItem from '@/components/ProductItem.vue';
    import { CartItem, Product } from '@/stores/types';
    import { useCartStore } from '@/stores/index';
    import ramen1 from '@/assets/ramen1.png';
    import ramen2 from '@/assets/ramen2.webp';
    import ramen3 from '@/assets/ramen3.webp';
    import ramen4 from '@/assets/ramen4.webp';
    
    const products = ref<Product[]>([
            {id:1, name:'味噌拉麵', price:150,image: ramen1, },
            {id:2, name:'醬油拉麵', price:130,image: ramen2, },
            {id:3, name:'咖哩拉麵', price:160,image: ramen3, },
            {id:4, name:'特製拉麵', price:220,image: ramen4, },
        ]);
    
    const store = useCartStore();
    
    const addToCart1 = (product: CartItem) => {
        store.addToCart(product);  // 處理添加到購物車事件
        localStorage.setItem('cart', JSON.stringify(store.cart)) // 更新 localStorage
    };
    
    </script>
    <style scoped>
    
    </style>