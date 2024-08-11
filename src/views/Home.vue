<template>
<HomeNav />
<header class="header" :style="headerStyle" alt="header">
    <div class="container d-flex align-items-center h-100 position-relative" style="z-index: 1;">
        <div>
            <h1 class="text-white">日式拉麵中<br>你無可挑剔的選擇</h1>
            <button class="btn btn-primary btn-lg co1-4 w-100" type="button">
                <router-link class="nav-link" to="/Shop">點餐</router-link>
            </button>                            
        </div>
    </div>    
</header>

<section class="container mt-6">
    <div class="row justify-content-center">
        <div class="height-s5 col-md-5">
            <img class="height-s5 w-100 object-fit-cover" :src="ramensection" alt="豚骨拉麵">
        </div>
        <div class="col-md-5 d-flex align-items-center">
            <div>
                <h2>本季熱賣商品</h2>
                <p>本季主打肉多鮮美，嚴選台灣本土豬肉製成的豚骨拉麵，搭配精心熬製的湯頭，是您來本店最佳的選擇之一。</p>
            </div>
        </div>
    </div>
    <div class="row justify-content-center mt-4 flex-row-reverse">
        <div class="height-s5 col-md-5">
            <img class="height-s5 w-100 object-fit-cover" :src="colacookies" alt="可樂餅2">
        </div>
        <div class="col-md-5 d-flex align-items-center">
            <div>
                <h2>日式點心配菜推薦</h2>
                <p>日式拉麵最佳搭配的點心就非可麗餅莫屬了，酥炸香脆的可麗餅，是忙碌生活餐點配菜中推薦的最佳選擇。</p>
            </div>
        </div>
    </div>
</section>

<section class="py-5 mt-6 section-with-over">
    <div class="container  content-container">
        <div class="row justify-content-center">
            <div class="col-md-4 text-center">
                <img :src="subscription" style="width: 296px;" class="img-fluid " alt="訂閱圖">
            </div>
            <div class="col-md-4 d-flex align-items-center" >
                <div>
                    <p>如果想要收到我們相關拉麵新推出產品或者相關折扣活動，歡迎訂閱我們的通知，我們將定期寄訊息通知尊貴的客戶。</p>
                    <button type="button" class="btn-primary btn w-100" @click="register" >訂閱</button>
                </div>
            </div>
        </div>
    </div>
</section>

<section class="container mt-6">
    <div class="row ">
        <div class="col-md-4">
            <div class="card">
                <img :src="ramen1" class="card-img-top height-s3 object-fit-cover" alt="日本拉麵">
                <div class="card-body text-center">
                    <h5 class="card-title ">味噌拉麵套餐</h5>
                    <p class="card-text">(主餐+40元飲料+小菜一份)</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-center">豚骨味噌拉麵</li>
                    <li class="list-group-item text-center">牛肉味噌拉麵</li>
                    <li class="list-group-item text-center">雞肉味噌拉麵</li>
                </ul>
                <button type="button" class="btn-primary btn w-100">
                    <router-link class="nav-link" to="/Shop">點餐</router-link>
                </button>
            </div>
        </div>

        <div class="col-md-4">
            <div class="card">
                <img :src="ramen1" class="card-img-top height-s3 object-fit-cover" alt="日本拉麵">
                <div class="card-body text-center">
                    <h5 class="card-title ">醬油拉麵套餐</h5>
                    <p class="card-text">(主餐+40元飲料+小菜一份)</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-center">豚骨醬油拉麵</li>
                    <li class="list-group-item text-center">牛肉醬油拉麵</li>
                    <li class="list-group-item text-center">雞肉醬油拉麵</li>
                </ul>
                <button type="button" class="btn-primary btn w-100">
                    <router-link class="nav-link" to="/Shop">點餐</router-link>
                </button>
            </div>
        </div>

        <div class="col-md-4">
            <div class="card">
                <img :src="ramen1" class="card-img-top height-s3 object-fit-cover" alt="日本拉麵">
                <div class="card-body text-center">
                    <h5 class="card-title ">特製拉麵套餐</h5>
                    <p class="card-text">(主餐+40元飲料+小菜一份)</p>
                </div>
                <ul class="list-group list-group-flush">
                    <li class="list-group-item text-center">麻辣叉燒拉麵</li>
                    <li class="list-group-item text-center">炸蝦豪華拉麵</li>
                    <li class="list-group-item text-center">豚骨雞肉雙拼拉麵</li>
                    <li class="list-group-item text-center">牛肉咖哩拉麵</li>
                </ul>
                <button type="button" class="btn-primary btn w-100">
                    <router-link class="nav-link" to="/Shop">點餐</router-link>
                </button>
            </div>
        </div>
    </div>
</section>

<footer class="bg-dark mt-6 py-5">
    <div class="container d-flex align-items-center  justify-content-center ">
        <div class="text-white">
            麵飽飽地址：新北市板橋區中正路２４號<br>連絡電話:02-2278-8418
        </div>
    </div>
</footer>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import ramensection from '@/assets/tonkotsu_ramen.png';
import colacookies from '@/assets/colacookies.jpg';
import subscription from '@/assets/subscription.png';
import ramen1 from '@/assets/ramen1.png';
import HomeNav from '@/components/HomeNav.vue';
const headerStyle = {
  backgroundImage: 'url(https://images.unsplash.com/photo-1568018508399-e53bc8babdde?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)'
};
const router = useRouter();


const register = () => {
    router.replace({ name: 'FrontLayout' });
}

</script>