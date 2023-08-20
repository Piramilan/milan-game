import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: process.env.REACT_APP_GAME_API_KEY, //Add Your API Key Here,
  },
});
