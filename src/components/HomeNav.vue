<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <router-link class="navbar-brand" to="/">
            <img
                :src="Logo"
                alt="麵飽飽"
                class="d-inline-block align-text-top"
                style="width: 50px"
            />
        </router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto me-2">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">關於</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/Shop">餐點</router-link>
                </li>
                <li>
                    <button type="button" class="btn btn-primary"  @click="navigateToLogin">登入</button>
                </li>
            </ul>
        </div>
    </div>
</nav>
</template>

<script setup lang="ts">
import Logo from '@/assets/logo.png';
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToLogin = () => {
    router.push({ name: 'LoginView' });
};


</script>