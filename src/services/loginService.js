import api from "../services/api";
/*  import {Observable} from "rxjs" */
/*   import {from} from "rxjs/add/observable/from"  */
/* import TokenService from "../services/tokenService"; */

export default {
  login(form) {
    return api.post("/login", JSON.stringify(form));
  },
};
