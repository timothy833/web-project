import './assets/all.scss';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios';
import VueAxios from 'vue-axios'; 
// 引入 Vee Validate 元件跟功能
import { Form , Field , ErrorMessage , configure, defineRule } from 'vee-validate';
// 引入 Vee Validate 全部驗證規則
import * as AllRules from '@vee-validate/rules';
// 引入 Vee Validate 多國語系功能
import { localize, setLocale } from '@vee-validate/i18n';
// 引入 Vee Validate 繁體中文語系檔
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import router from '../src/router';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import App from './App.vue';


// Vee Validate 表單驗證語法開始
// 定義規則（加入全部規則）
Object.keys(AllRules).forEach((rule) => {
    const validator = (AllRules as { [key: string]: any })[rule];
    if (typeof validator === 'function') {
        defineRule(rule, validator);
    }
})

// 加入 Vee Validate 繁體中文語系檔
// *將當前 Vee Validate 語系設定為繁體中文
configure({
    generateMessage: localize({ zh_TW: zhTW }), // 載入繁體中文語系
    validateOnInput: true // 指欄位輸入內容時，會立即進行驗證（即邊寫邊判斷）
})

// // *設定預設語系
setLocale('zh_TW')

const app = createApp(App);
app.use(createPinia());
app.component('VForm', Form);
app.component('VField', Field);
app.component('ErrorMessage', ErrorMessage);
app.use(router);
app.use(VueAxios,axios);
app.mount('#app');
