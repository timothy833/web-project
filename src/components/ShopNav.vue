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
            <li class="nav-item ms-auto">
                <div class="d-flex align-items-center">
                    <router-link class="nav-link me-2" to="/Shop">
                        <h4>商品列表</h4>
                    </router-link>
                    <router-link class="nav-link" to="/Cart">
                        <h4>
                            購物車
                            <font-awesome-icon :icon="['fas', 'cart-shopping']"  class="cart-icon-wrapper"/>
                            <span v-if="cartItemCount > 0" class="badge bg-danger ms-2 cart-badge">{{ cartItemCount }}</span>
                        </h4>
                        <!-- <font-awesome-icon :icon="['fas', 'cart-shopping']" /> -->
                        <!-- 添加购物车数量小红点 -->
                        <!-- <span v-if="cartItemCount > 0" class="badge bg-danger ms-2 cart-badge">{{ cartItemCount }}</span> -->
                    </router-link>
                </div>
            </li>   
        </ul>
    </nav>
</div>
</template>
    
    
<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { useCartStore } from '@/stores';
import Logo from '@/assets/logo.png';

const cartStore = useCartStore();
const cartItemCount = computed(() => cartStore.totalQuantity);

//頁面加載時從localStorge 初始化購物車數據
onMounted(() => {
    cartStore.loadCartFromLocalStorage();
});


</script>

<style scoped>
ul {
    list-style: none;
    padding-left: 1rem;
    margin-bottom: 0;
}

.cart-icon-wrapper {
    position: relative;
    display: inline-block;
}

.cart-badge {
    position: absolute;
    bottom: 10px;
    right: -1px;
    border-radius: 50%;
    /* padding: 0.3em; */
    font-size: 0.75rem;
    /* z-index: 1;  */
    /*確保小紅點不會被其他元素遮蓋 */
}



</style>