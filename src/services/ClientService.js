import { api } from "../services/api";

export default {
  sendMessage(data) {
    return api.post("/messages/SendMessages", data);
  },
};
