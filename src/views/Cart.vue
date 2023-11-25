<template>
  <div class="body">
    <div class="cart-items">
      <h1>Giỏ Hàng</h1>
      <div class="item">
        <img
          src="https://camerahik.vn/wp-content/uploads/2021/06/DS-2CD1343G0E-IF-1-510x510.jpg"
          alt="Product 1"
        />
        <div class="item-details">
          <h2>Tên sản phẩm 1</h2>
          <h3>Giá: 10</h3>
          <h3>Số lượng: 2</h3>
          <h3>Mô tả:</h3>
            <h4>DS-2CD1323G0E-ID là dòng camera ip Hikvision bán chạy nhất hiện nay. 
                camera trang bị cấu hình vừa như độ phân giải 2 Megapixel Full HD. 
                Tầm quan sát trong đêm 30m. 
            </h4>
        </div>
        <div>
          <button class="btn-delete">
            <font-awesome-icon :icon="['fas', 'trash-can']" />
          </button>
        </div>
      </div>
    </div>

    <div class="total">
      <h2>Tổng cộng: 35</h2>
      <router-link to="/checkout">
        <button class="checkout-button">Thanh toán</button>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.body {
  margin-left: auto;
  margin-right: auto;
  width: 70%;
}
.cart-items {
  margin: 20px;
}

h1 {
  text-align: center;
}

.item {
  display: flex;
  margin-bottom: 20px;
  border-bottom: 2px solid #3a3939;
}

.item img {
  width: 200px;
  margin-right: 20px;
}

.item-details {
  flex-direction: column;
  justify-content: right;
  width: 100%;
}

.btn-delete {
  background-color: #ee2415;
  width: 50px;
  border-radius: 8px;
  
}

.total {
  margin: 20px;
  text-align: right;
}

.checkout-button {
  background-color: #ff5722;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

.checkout-button:hover {
  background-color: #f4511e;
}
</style>