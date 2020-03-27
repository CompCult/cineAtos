import ApiBaseURL from "../../services/ApiBaseURL.js";

const StoreApi = {
  getAllItems: () => ApiBaseURL.get("/store/items"),
  postItem: body => ApiBaseURL.post("/store/items", body),
  getItem: id => ApiBaseURL.get(`/store/items/${id}`),
  deleteItem: id => ApiBaseURL.delete(`/store/items/${id}`),
  updateItem: (id, body) => ApiBaseURL.put(`/store/items/${id}`, body),
  getAllOrders: idItem => ApiBaseURL.get(`store/items/5e7a20d55a6fc7001790133c/orders/`)
};

export default StoreApi;