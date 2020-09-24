import axios from "axios";
const headers = {
  "Content-Type": "application/json"
};
const Curl = "http://localhost:2200";

export default {
  login: function(email, password) {
    return axios.post(
      `${Curl}/security/signin`,
      {
        email,
        password
      },
      {
        headers: headers
      }
    );
  },
  inscription: function(send) {
    console.log(send);
    return axios.post(`${Curl}/security/signup`, send, { headers: headers });
  },

  isAuth: function() {
    return localStorage.getItem("token") !== null;
  },
  logout: function() {
    localStorage.clear();
  }
};