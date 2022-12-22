import http from "../config/http-common";
import IUser from "../model/User";

class UserDataService {
  // Call to the API to create a new user
  getUser(number: String) {
    return http.get<IUser>(`/user/${number}`);
  }

  // Call to the API to get one user (modify the balance)
  editUser(number: String, data: IUser) {
    return http.put(`/user/${number}`, data);
  }
}

export default new UserDataService();