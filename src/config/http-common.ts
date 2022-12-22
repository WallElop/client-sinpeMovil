import axios from "axios";

// API URL from the AWS API Gateway
export default axios.create({
  baseURL: "https://apa9hqzp7l.execute-api.us-east-1.amazonaws.com",
});