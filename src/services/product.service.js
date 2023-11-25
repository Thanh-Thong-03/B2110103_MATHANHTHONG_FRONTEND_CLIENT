import api from "./api.service";

class ProductService {
  async getAll() {
    return (await api.get("/product")).data;
  }
  async get(id) {
    return (await api.get(`/product/${id}`)).data;
  }
  async getbyname(ten) {
    return (await api.get("/product/byname", {params: {ten}})).data;
  }
  async update(id, data){
    return (await api.put(`/product/${id}`, data)).data;
  }
  async getbyType(type) {
    return (await api.get(`/product/type/${type}`)).data;
  }
}
export default new ProductService();


