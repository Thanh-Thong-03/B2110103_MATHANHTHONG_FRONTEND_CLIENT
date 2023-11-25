<template>
  <div class="container" v-if="product">
    <div class="row">
      <div class="col-md-6" ></div>
      <h1>Sản phẩm</h1>
      <h1>{{ product.ten }}</h1>
      <div class="col-md-6">
        <img
          :src="product.hinh"
        />
      </div>

      <div class="col-md-6">
        <h2>Mô tả sản phẩm:</h2>
        <h3>
          {{ product.mota }}
        </h3>
        <h2>Giá sản phẩm: {{ product.gia }} đ</h2>
        <div class="form-group">
          <label for="quantity"> <h2>Số lượng:</h2> </label>

          <div>
            <div class="quantity-control">
              <button class="minus" @click="decrement">-</button>
              <input type="number" class="quantity" v-model="soluong" />
              <button class="plus" @click="increment">+</button>
            </div>
          </div>
        </div>
        <button class="btn btn-add-to-cart" @click="saveData">Thêm vào giỏ hàng</button>
        <router-link to="/checkout">
            <button @click="saveData" class="btn btn-checkout">Thanh toán</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { onBeforeMount, ref } from "vue";
import userService from '../services/user.service'
import productService from "../services/product.service";
import {useRoute} from "vue-router"

export default {
  setup() {
    const soluong = ref(1);
    const route = useRoute()
    const product = ref();

    onBeforeMount(async () =>{
      product.value = await productService.get(route.params.id);
      console.log(product.value);
    })

    const increment = () => {
        soluong.value++;
    };

    const decrement = () => {
      if (soluong.value > 1) {
        soluong.value--;
      }
    };


    const saveData = async () => {
      try {
        const userId = localStorage.getItem("id");
        const productId = route.params.id;
        console.log(soluong.value);
        await userService.addToCart(userId, productId, soluong.value);
      } catch (error) {
        console.error("Failed to save data", error);
      }
    };

    return {
      soluong,
      increment,
      decrement,
      saveData,
      product
    };
  },
};
</script>

<style scoped>
.product-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.btn-add-to-cart {
  background-color: #ff6f00;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  margin-right: 30px;
  margin-left: 30px;
}

.btn-checkout {
  background-color: #ee4d2d;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.quantity-input {
  width: 60px;
  text-align: center;
  margin-right: 10px;
}

.btn-quantity {
  background-color: #ff6f00;
  color: #fff;
  border: none;
  padding: 5px 10px;
  font-size: 14px;
  cursor: pointer;
}

img {
  width: 450px;
}
</style>