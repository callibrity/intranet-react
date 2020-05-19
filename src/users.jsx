// users.js
import API from "./api";

class Users {
  static all() {
    return API.get("/users.json").then(resp => resp.data);
  }
}

export default Users;