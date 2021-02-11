import axios from "axios";
const BASE_URL = process.env.BASE_URL || "http://localhost:3000/users";

class UsersApi {
  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);
    const url = `${BASE_URL}/${endpoint}`;
    const params = method === "get" ? data : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  static async getUsers() {
    let res = await this.request("/");
    console.log("res from api.js", res);
    return res;
  }
  //    add get by id method
}

export default UsersApi;
