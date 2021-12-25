import Axios from "axios";
const DATA = Axios.create({
  baseURL: "https://api.themoviedb.org/",
  headers: {
    Accept: "application/json",
    "content-type": "application/json",
  },
});
