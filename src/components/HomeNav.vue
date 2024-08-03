<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
        <a class="navbar-brand" href="#">麵飽飽</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto me-2">
                <!-- <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Features</a>
                </li> -->
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/">關於</RouterLink>
                </li>
                <li class="nav-item">
                    <RouterLink class="nav-link" to="/Shop">餐點</RouterLink>
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
import { useRouter } from 'vue-router';

const router = useRouter();

const navigateToLogin = () => {
    router.push({ name: 'LoginView' });
};


</script>