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
      <form id="form" ref="form" @submit="handleFormSubmit">
        <h1 class="mb-4 text-center">麵飽飽</h1>
        <p class="mb-4 fs-4 text-center">歡迎會員</p>
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
          <span class="invalid-feedback" v-if="errors.userpassword">請輸入正確密碼</span>
        </div>
        <button class="btn btn-lg btn-primary w-100" type="button">
            登入
        </button>
      </form>
      <div class="text-end login-buttom mt-2">
        <router-link to="/Front">返回註冊會員</router-link>
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
import subscription from '@/assets/subscription.png';
import HomeNav from '@/components/HomeNav.vue';

// 自定义密码验证规则
const isPassword = (value: any) => {
  const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])/;
  // const isValid = passwordPattern.test(value);
  // if (!isValid) {
  //   console.log('Password validation failed:', value);
  // }
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
  console.log('handleFormSubmit called'); // 調試信息
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
      // const fieldName = ['username', 'useremail', 'userpassword'][index];
      errors.value[fieldName] = result.errors[0];
    }
  });

  // 如果所有字段都有效，则提交表单
  if (validationResults.every(result => result.valid)) {
    try {
                                  //http://localhost:3000改成 /api 修正成可以佈署雲端
      const res = await axios.post('/api/user', {
        email: useremail.value,
        password: userpassword.value,
      });
      console.log(res);
      alert('登入成功');
       // 清空表单
      username.value = '';
      useremail.value = '';
      userpassword.value = '';
    } catch (error) {
      console.error(error);
      alert('您尚未成為會員，請先註冊');
    }
  }else {
    alert('請再次確認會員資料後提交');
  }
};
</script>


<style scoped>

</style>


  