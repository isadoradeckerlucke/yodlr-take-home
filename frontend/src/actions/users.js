import UsersApi from "./UsersApi";
import { LOAD_USERS } from "./types";

function getUsersFromAPI() {
  return async function (dispatch) {
    const res = await UsersApi.getUsers();
    let users = res.data;
    // let {id, email, firstName, lastName, state} = res.data
    // console.log(res, "i am res from users js");
    dispatch(gotUsers(users));
  };
}

function gotUsers(users) {
  return { type: LOAD_USERS, payload: users };
}

export { getUsersFromAPI };
