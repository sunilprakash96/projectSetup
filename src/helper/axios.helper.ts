import axios from "axios";

const token: any = localStorage.getItem("token");

const instance = () => {
  const data = axios.create({
    baseURL: 'https://some-domain.com/api/',
    headers: {
      authorization: token
    },
    timeout: 10000000,
  })
  return data;
}

export default instance;