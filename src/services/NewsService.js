import { api } from "../services/api";

export default {
  GetNews() {
    return api.get("/news/getNews");
  },
  deleteNews( newsId, userId) {
    return api.delete("/news/deleteNews", {
      params: {
       
        newsId,
        userId,
      },
    });
  },
};
