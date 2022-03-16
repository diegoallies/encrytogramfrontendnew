import axios from 'axios';
const API_URL = "https://encryptogram-backend.herokuapp.com/post/";
class postDataService {
  getAll() {
    return API_URL.get("/post");
  }
  get(id) {
    return API_URL.get(`/post/${id}`);
  }
  create(data) {
    return API_URL.post("/post", data);
  }
  update(id, data) {
    return API_URL.put(`/post/${id}`, data);
  }
  delete(id) {
    return API_URL.delete(`/post/${id}`);
  }
  
 
}
export default new ProductsDataService;