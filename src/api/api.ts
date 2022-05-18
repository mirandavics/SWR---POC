import axios from "axios";

export const api = axios.create({
  baseURL: process.env.REACT_APP_URL,
  params: {
    "api-key": "e0Lixcbyc7JGgG5p5W7ttUe6JRXAz713",
  },
});
