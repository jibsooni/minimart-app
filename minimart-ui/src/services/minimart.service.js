import http from "../http-common";

class MinimartService {
  getAll() {
    return http.get("/items");
  }

  get(name) {
    return http.get(`/item/${name}`);
  }

  getByCategory(category) {
    return http.get(`/item/${category}`);
  }

  create(item) {
    return http.post("/item", item);
  }

  update(item) {
    return http.put(`/item`, item);
  }

  delete(name) {
    return http.delete(`/item/${name}`);
  }

  login(req) {
    return http.post(`/login`, req);
  }
  
}

export default new MinimartService();