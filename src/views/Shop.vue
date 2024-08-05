<template>
<ShopNav />
<div>
  <div class="container mt-4">
    <!-- 顯示商品列表標題 -->
    <h1>點選主餐</h1>
    <!-- 引入商品列表組件 -->
    <ProductList />
  </div>
</div>
</template>
<script setup lang="ts">
import ProductList from '@/components/ProductList.vue';
import ShopNav from '@/components/ShopNav.vue';


</script>
<style scoped>

</style>