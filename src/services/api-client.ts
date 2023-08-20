import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "419c647fe13d408297b07f1c021e05ee",
  },
});
