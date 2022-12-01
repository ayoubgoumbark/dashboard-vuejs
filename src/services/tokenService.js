export default {
  decode(value) {
    return JSON.parse(atob(value));
  },

  payload() {
    var token = sessionStorage["jwt"];
    const payload = token.split(".")[1];
    return this.decode(payload);
  },
  isAdmin() {
    var token = sessionStorage["jwt"];

    if (token != undefined) {
      return this.payload().admin;
    } else {
      return false;
    }
  },
  isAuth() {
    var token = sessionStorage["jwt"];

    if (token != undefined && sessionStorage["id"] != undefined) {
      return this.payload().id == sessionStorage["id"];
    } else return false;
  },

  getnameuser() {
    
    var token = sessionStorage["jwt"];

    if (token != undefined) {
      return this.payload().name;
    } else {
      return null;
    }
  }
}
