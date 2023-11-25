<template>
  <div class="container">
    <h2>Danh sách các camera Dome</h2>
      <div v-if="product" class="row">
        <div v-for="(item, i) in product" :key="i"  class="col-md-4">
          <div  class="card mb-4">
            <img :src="item.hinh" class="img card-img-top" />
            <div class="card-body">
              <h5 class="card-title">{{ item.ten }}</h5>
              <h5 class="card-title">Loại: {{ item.loai }}</h5>
              <h5 class="card-title">Giá: {{ item.gia }}</h5>
              <p class="card-text">{{ item.mota }}</p>
              <a class="btn btn-primary">Thêm vào giỏ hàng</a>
              <router-link :to="`/product/${item.id}`" class="btn btn-primary"> Xem Chi Tiết</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { onBeforeMount, ref } from "vue";
import productService from "../services/product.service";

export default {
  setup() {
    const product = ref();

    onBeforeMount(async () => {
      try {
        product.value = await productService.getbyType("Camera Dome");
        console.log(product.value);
      } catch (error) {
        console.log(error);
      }
    });

    return { product };
  },
};
</script>

<style scoped>
.img {
  width: 150px;
  height: 150px;
}
.btn-primary {
  margin-right: 30px ;
}
</style>
