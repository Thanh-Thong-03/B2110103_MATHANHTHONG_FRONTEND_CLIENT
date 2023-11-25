<template>
  <div class="container">
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
import { onBeforeMount, ref } from 'vue';
import productService from '../services/product.service';
export default {
  setup() {
    const product = ref();

    onBeforeMount(async() =>{
      product.value = await productService.getAll();
      console.log(product.value);
    })

    return {product}
  },
};
</script>

<style scoped>

.navbar {
  background-color: #343a40;
}

.navbar-dark .navbar-nav .nav-link {
  color: #fff;
}

header,
footer {
  background-color: #343a40;
}

.card {
  background-color: #fff;
}


.a {
  width: 100%;
}

.img {
    width: 150px;
    height: 150px;
  }

.search {
  justify-content: center;
}

.btn-primary {
  margin-right: 30px ;
}
</style>
