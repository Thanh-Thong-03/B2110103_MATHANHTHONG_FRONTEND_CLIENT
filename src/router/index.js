import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    meta: {
      title: "Trang chủ",
    },
    component: () => import("../views/Home.vue"),
  },
  {
    path: "/login",
    meta: {
      title: "Trang đăng nhập",
    },
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/register",
    meta: {
      title: "Trang đăng kí",
    },
    component: () => import("../views/Register.vue"),
  },
  {
    path: "/cat-dome",
    meta: {
      title: "Trang Camera Dome",
    },
    component: () => import("../views/Cat-Dome.vue"),
  },
  {
    path: "/cat-bullet",
    meta: {
      title: "Trang Camera Bullet",
    },
    component: () => import("../views/Cat-Bullet.vue"),
  },
  {
    path: "/cat-discreet",
    meta: {
      title: "Trang camera Discreet",
    },
    component: () => import("../views/Cat-Discreet.vue"),
  },
  {
    path: "/cat-ip",
    meta: {
      title: "Trang camera IP",
    },
    component: () => import("../views/Cat-Ip.vue"),
  },
  {
    path: "/cat-wifi",
    meta: {
      title: "Trang camera Wifi",
    },
    component: () => import("../views/Cat-Wifi.vue"),
  },
  {
    path: "/cart",
    meta: {
      title: "Trang giỏ hàng",
    },
    component: () => import("../views/Cart.vue"),
  },
  {
    path: "/checkout",
    meta: {
      title: "Trang thanh toán",
    },
    component: () => import("../views/Checkout.vue"),
  },
  {
    path: "/user",
    meta: {
      title: "Trang thông tin người dùng",
    },
    component: () => import("../views/User.vue"),
  },
  {
    path: "/product/:id",
    meta: {
      title: "Trang chi tiết sản phẩm",
    },
    component: () => import("../views/ProductDetail.vue"),
  },
  {
    path: "/order",
    meta: {
      title: "Trang đơn hàng đã đặt",
    },
    component: () => import("../views/Order.vue"),
  },

];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
  });
  
  router.beforeEach(async (to) => {
    document.title = to.meta.title;
  });
  
  export default router;
  
