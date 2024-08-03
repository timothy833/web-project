<template>
<HomeNav />
<div class="container">
  <div class="row pt-3">
    <div class="col-12 col-md"></div>
    <div class="col-12 col-md-4 mb-3">
      <img
        :src="subscription"
        class="img-fluid"
        alt="登入畫面圖"
      />
    </div>
    <div class="col-12 col-md-3 my-auto">
      <form id="form" ref="form" @submit.prevent="handleFormSubmit">
        <h1 class="mb-4 text-center">麵飽飽</h1>
        <div class="mb-3">
          <input
            v-model="username"
            type="text"
            name="username"
            placeholder="請輸入會員名稱"
            class="form-control"
            :class="{ 'is-invalid': errors.username }"
          />
          <span class="invalid-feedback" v-if="errors.username">請輸入正確名字</span>
        </div>
        <div class="mb-3">
          <input
            v-model="useremail"
            type="text"
            name="useremail"
            placeholder="請輸入電子郵件"
            class="form-control"
            :class="{ 'is-invalid': errors.useremail }"
          />
          <span class="invalid-feedback" v-if="errors.useremail">請輸入正確email格式</span>
        </div>
        <div class="mb-4">
          <input
            v-model="userpassword"
            type="password"
            name="userpassword"
            placeholder="請輸入密碼"
            class="form-control"
            :class="{ 'is-invalid': errors.userpassword }"
          />
          <span class="invalid-feedback" v-if="errors.userpassword">密碼需含大小寫英文字母</span>
        </div>
        <button class="btn btn-lg btn-primary w-100" type="submit">
          註冊
        </button>
      </form>
      <div class="text-end login-buttom">
        <RouterLink to="/Login">已是會員，請按此登入</RouterLink>
      </div>
    </div>
    <div class="col-12 col-md"></div>
  </div>
</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { defineRule } from 'vee-validate';
import { required, email } from '@vee-validate/rules';
import { validate } from 'vee-validate';
import axios from 'axios';
import subscription from '~@/assets/訂閱圖.png'
import HomeNav from '~@/components/HomeNav.vue';
// 自定义密码验证规则
const isPassword = (value: string) => {
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])/;
  // const isValid = passwordPattern.test(value);
  return passwordPattern.test(value) ? true : false;
};

// 定义验证规则
defineRule('required', required);
defineRule('email', email);
defineRule('isPassword', isPassword);

// 定义表单验证规则
const rules = {
  username: { required: true  },
  useremail: { required: true, email: true },
  userpassword: { required: true, isPassword: true }
};

// 表单数据
const username = ref('');
const useremail = ref('');
const userpassword = ref('');
const errors = ref<{ [key: string]: string }>({});

// 表单提交处理函数
const handleFormSubmit = async () => {  
  // 验证表单
  const validationResults = await Promise.all([
    validate(username.value, rules.username),
    validate(useremail.value, rules.useremail),
    validate(userpassword.value, rules.userpassword)
  ]);
  console.log('Validation Results:', validationResults); // 調試信息


  // 处理验证结果
  errors.value = {};
  validationResults.forEach((result, index) => {
    const fieldName = ['username', 'useremail', 'userpassword'][index];
    if (!result.valid) {
      errors.value[fieldName] = result.errors[0];
    }
  });

  // 如果所有字段都有效，则提交表单
  if (validationResults.every(result => result.valid)) {
    try {
                                //http://localhost:3000改成 /api 修正成可以佈署雲端
      const res = await axios.post('/api/user', {
        username: username.value,
        useremail: useremail.value,
        userpassword: userpassword.value
      });
      console.log(res);
      alert('註冊成功');
    } catch (error) {
      console.error(error);
      alert('註冊失敗');
    }
  }
};

// const login = async () => {
//     try{
//         // axios.post 提交/新增資料的網路請求
//         const res = await axios.post("http://localhost:3000/user", {
//         // 紀錄要傳送給伺服器的資料內容
//         name: name.value,
//         email: email.value,
//         password: password.value,
//         });
//         // 請求成功會觸發/執行這個 
//         console.log(res);
//         alert("註冊成功");
//     }
//     catch (error) {
//           // 請求失敗則觸發/執行這個
//         console.error(error);
//         alert('註冊失敗');
//     }
// }     
     
</script>


<style scoped>

</style>
