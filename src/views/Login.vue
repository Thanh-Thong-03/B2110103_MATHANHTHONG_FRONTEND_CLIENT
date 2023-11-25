<template>
    <div class="container">
      <div class="login-container">
        <h2 class="text-center mb-4">Đăng Nhập</h2>
        <div>
          <div class="form-group">
            <label>Số Điện Thoại</label>
            <input
              v-model="phone"
              type="text"
              class="form-control"
              placeholder="Nhập số điện thoại"
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Vui lòng nhập số điện thoại.</div>
          </div>
          <div class="form-group">
            <label>Mật khẩu:</label>
            <input
              v-model="matkhau"
              type="password"
              class="form-control"
              placeholder="Nhập mật khẩu"
              required
            />
            <div class="valid-feedback">Valid.</div>
            <div class="invalid-feedback">Vui lòng nhập mật khẩu</div>
          </div>
          <button @click="login" class="btn btn-login btn-block">Đăng Nhập</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import {ref} from "vue";
  import userService from "../services/user.service";
  import {useRouter} from "vue-router";
  
  export default {
    setup() {
      const phone = ref();
      const matkhau = ref();
      const router = useRouter();
  
      const login = async () => {
        try {
          const res = await userService.login(phone.value, matkhau.value);
          router.push({path: "/"});
          localStorage.setItem("id", res);
        } catch (err) {
          console.log(err);
        }
      };
      return { phone, matkhau, login };
    },
  };
  </script>
  
  
  
    <style>
  .container {
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .login-container {
    width: 400px;
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 30px;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  
  label {
    font-weight: bold;
  }
  
  .btn-login {
    background-color: #007bff;
    color: #fff;
    border: none;
  }
  </style>