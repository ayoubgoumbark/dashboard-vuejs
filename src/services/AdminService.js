import { api } from "../services/api";

export default {
  GetListUsers() {
    return api.get("/ListUsers");
  },

  AddNews(value) {
    // console.log("vaaaal", value.get("data"));

    return api.post("/news/AddNews", value);
  },

  TransferFile(value) {
    // console.log("vaaaal", value.get("data"));

    return api.post("/file/upload", value);
  },

  getMessages(id) {
    return api.get(`/file/PrivateFiles/${id}`);
  },
  getMessagesClients() {
    return api.get("/messages/getMessages/");
  },
  downoald(Id, filename, resever) {
    return api.get("/file/download", {
      params: {
        Id,
        filename,
        resever,
      },
    });
  },
  DeleteMessage(filename, fileId, resever) {
    return api.delete("/file/deleteFile", {
      params: {
        filename,
        fileId,
        resever,
      },
    });
  },

  DeleteMessageClient(id) {
    return api.delete("/messages/deleteMessageClient", {
      params: {
        id,
      },
    });
  },

  getinfoClient(userId) {
    return api.get(`/user/${userId}`);
  },
};
