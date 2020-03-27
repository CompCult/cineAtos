import ApiBaseURL from "../../services/ApiBaseURL.js";

const StoreApi = {
  getAllItems: () => ApiBaseURL.get("/store/items"),
  postItem: body => ApiBaseURL.post("/store/items", body),
  getItem: id => ApiBaseURL.get(`/store/items/${id}`),
  deleteItem: id => ApiBaseURL.delete(`/store/items/${id}`),
  updateItem: (id, body) => ApiBaseURL.put(`/store/items/${id}`, body),
  getAllOrders: idItem => ApiBaseURL.get(`store/items/${idItem}/orders/`)
};

export default StoreApi;