import ApiBaseURL from "../../services/ApiBaseURL.js";
import { getId } from "../../services/Auth";

const StoreApi = {
  getAllItems: () => ApiBaseURL.get("store/items"),
  postItem: body => ApiBaseURL.post("/store/items", body)
};

export default StoreApi;
