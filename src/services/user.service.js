import api from "./api.service";

class UserService {
  async register(phone, matkhau) {
    return (await api.post("/user/register", { phone, matkhau })).data;
  }

  async login(phone, matkhau) {
    return (await api.post("/user/login", { phone, matkhau})).data;
  }

  async addToCart(userId, productId, soluong) {
    return (await api.post(`user/cart/${userId}/${productId}`, {soluong})).data
  }
}

export default new UserService();
