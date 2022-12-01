import { api } from "../services/api";

export default {
  TransferFile(value) {
    // console.log("vaaaal", value.get("data"));

    return api.post("/file/upload", value);
  },

  getMessages(id) {
    return api.get(`/file/PrivateFiles/${id}`);
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

  login(form) {
    return api.post("/login", JSON.stringify(form));
  },
  signup(data) {
    console.log("jjj", JSON.stringify(data));
    return api.post("/signup", data);
  },
};
