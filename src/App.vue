<template>
  <div>
    <header class="bg-dark text-white text-center py-5">
      <h1>Camera Cần Thơ</h1>

      <div class="auth">
        <router-link class="button login-btn" to="/login">
          Đăng Nhập
        </router-link>
        <router-link class="button register-btn" to="/register">
          Đăng Kí
        </router-link>
      </div>

      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link class="nav-link navbar-brand" to="/">
          <h2>Trang chủ</h2>
        </router-link>
        <div class="a collapse navbar-collapse">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <router-link class="nav-link navbar-brand" to="/cat-dome"
                >Camera-Dome</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link navbar-brand" to="/cat-bullet"
                >Camera-Bullet</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link navbar-brand" to="/cat-discreet"
                >Camera-Discreet</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link navbar-brand" to="/cat-ip"
                >Camera-IP</router-link
              >
            </li>
          </ul>
        </div>

        <div class="right input-group">
          <div>
            <input
              type="text"
              class="form-control"
              placeholder="Tìm kiếm sản phẩm"
              v-model="ten"
            />
          </div>

          <div class="input-group-append">
            <button class="btn btn-outline-secondary" @click="search">
              Tìm kiếm
            </button>
          </div>
          <div class="user dropdown">
            <router-link class="dropbtn nav-link navbar-brand" to="/user"
              ><font-awesome-icon :icon="['fas', 'user']"
            /></router-link>
            <div class="dropdown-content">
              <router-link to="/user">Thông tin khách hàng </router-link>
              <router-link to="/order">Đơn đặt hàng</router-link>
            </div>
          </div>

          <div class="cart">
            <router-link class="nav-link navbar-brand" to="/cart"
              ><font-awesome-icon :icon="['fas', 'cart-shopping']"
            /></router-link>
          </div>
        </div>
      </nav>
    </header>

    <router-view />

    <footer class="bg-dark text-white text-center py-3">
      <div class="container">
        <p>© 2023 Bán Hàng</p>
        <p>Email: info@example.com | Điện thoại: 0949032383</p>
      </div>
    </footer>
  </div>
</template>

<script>


</script>

<style scoped>
.navbar-dark .navbar-nav .nav-link {
  color: #fff;
}

header,
footer {
  background-color: #333536 !important;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  right: 0;
}

.dropdown-content a {
  color: black;
  padding: 10px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #7c7878;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.cart,
.user {
  padding-left: 30px;
}
.a {
  width: 100%;
}

.right {
  justify-content: right;
}
.search {
  justify-content: center;
  width: 100%;
  margin: 20px;
}

.button {
  display: inline-block;
  padding: 12px 24px;
  text-decoration: none;
  font-size: 16px;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  margin: 10px;
}

.login-btn {
  background-color: #99a199;
  color: #292727;
  margin-right: 10px;
}

.login-btn:hover {
  background-color: #fcfcfc;
}

.register-btn {
  background-color: #99a199;
  color: #292727;
}

.register-btn:hover {
  background-color: #fcfcfc;
}

.auth {
  justify-content: right;
  display: flex;
  width: 100%;
  margin-bottom: 30px;
}
</style>
