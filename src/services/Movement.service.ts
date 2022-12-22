import http from "../config/http-common";
import IMovement from "../model/Movement";

class MovementDataService {
  createMovement(data: IMovement) {
    return http.post("/movement", data);
  }

  getMovement(number: String, createdAt: String) {
    return http.get(`/movement/${number}/${createdAt}`);
  }

  getMovements(number: String, createdAt: String) {
    return http.get(`/movements/${number}/${createdAt}`);
  }
}

export default new MovementDataService();
