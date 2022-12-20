import http from "../config/http-common";
import IUser from "../model/User";

class UserDataService {
  getUser(number: String) {
    return http.get<IUser>(`/user/${number}`);
  }

  editUser(number: String, data: IUser) {
    return http.put(`/user/${number}`, data);
  }
}

export default new UserDataService();