<template>
<div>
    <!-- 使用 Bootstrap 的導航欄組件，設定為在大屏幕上展開，並使用淺色背景。 -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <!-- 使用 Bootstrap 的容器類，橫跨整個屏幕寬度。 -->
    <div class="container-fluid">
        <!-- 設置導航欄品牌名稱。 -->
        <router-link class="navbar-brand" to="/">
        <img
            :src="Logo"
            alt="麵飽飽"
            class="d-inline-block align-text-top"
            style="width: 50px"
            />
        </router-link>
        <router-link class="nav-link" to="/Shop">商品列表</router-link>
        <!-- 導航欄折疊按鈕，當屏幕尺寸較小時顯示。 -->
        <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#timo"
        aria-controls="timo"
        aria-expanded="false"
        aria-label="Toggle navigation"
        >
        <span class="navbar-toggler-icon"></span>
        </button>
        <!-- 折疊內容區域，在屏幕尺寸較小時隱藏，在點擊折疊按鈕時顯示。 -->
        <div class="collapse navbar-collapse" id="timo">
        <!-- 導航欄項目列表，使用 Bootstrap 的間距工具類設置間距 -->
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <!-- <li class="nav-item">
            <router-link class="nav-link" to="/Shop">商品列表</router-link>
            </li> -->
            <li class="nav-item">
            <router-link class="nav-link" to="/Cart">購物車</router-link>
            </li>
        </ul>
        </div>
    </div>
    </nav>
</div>
</template>
    
    
<script setup lang="ts">

import Logo from '@/assets/logo.png';

</script>

<style scoped>

</style>