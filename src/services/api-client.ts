import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: import.meta.env.VITE_GAME_API_KEY, //Add Your API Key Here,
  },
});
