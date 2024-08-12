<template>
<ShopNav />
<div>
    <div class="container mt-4">
        <!-- 顯示購物車標題 -->
        <!-- <h3>購物車<font-awesome-icon :icon="['fas', 'cart-shopping']" /></h3> -->
        <!-- 引入購物車組件 -->
        <Cart />
    </div>
</div>
</template>
<script setup lang="ts">
import Cart from '@/components/Cart.vue';
import ShopNav from '@/components/ShopNav.vue';

</script>
<style scoped>

</style>