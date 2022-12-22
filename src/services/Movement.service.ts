import http from "../config/http-common";
import IMovement from "../model/Movement";

class MovementDataService {
  // Call to the API to create a new movement
  createMovement(data: IMovement) {
    return http.post("/movement", data);
  }

  // Call to the API to get one movement
  getMovement(number: String, createdAt: String) {
    return http.get(`/movement/${number}/${createdAt}`);
  }

  // Call to the API to get all movements
  getMovements(number: String, createdAt: String) {
    return http.get(`/movements/${number}/${createdAt}`);
  }
}

export default new MovementDataService();
