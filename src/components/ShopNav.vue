<template>
<div>
    <!-- 使用 Bootstrap 的導航欄組件，設定為在大屏幕上展開，並使用淺色背景。 -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <!-- 使用 Bootstrap 的容器類，橫跨整個屏幕寬度。 -->
        <ul class="container-fluid d-flex align-items-center">
            <li class="nav-item">
                    <!-- 設置導航欄品牌LOGO。 -->
                <router-link class="navbar-brand " to="/">
                    <img
                        :src="Logo"
                        alt="麵飽飽"
                        class="d-inline-block align-text-top"
                        style="width: 50px"
                        />
                </router-link>
            </li>
            <li class="nav-item flex-grow-1 text-center">
                <router-link class="nav-link" to="/Shop">
                    商品列表
                </router-link>
            </li>
            <li class="nav-item ms-auto">
                <router-link class="nav-link" to="/Cart">
                    購物車
                    <!-- 添加购物车数量小红点 -->
                    <span v-if="cartItemCount > 0" class="badge bg-danger ms-2">{{ cartItemCount }}</span>
                </router-link>
            </li>   
        </ul>
    </nav>
</div>
</template>
    
    
<script setup lang="ts">
import { computed } from 'vue';
import { useCartStore } from '@/stores';
import Logo from '@/assets/logo.png';

const cartStore = useCartStore();
const cartItemCount = computed(() => cartStore.totalQuantity);

</script>

<style scoped>
ul {
    list-style: none;
    padding-left: 1rem;
    margin-bottom: 0;
}

</style>