import axios from "axios";
import { API_ROOT, API_URL } from "../utils/constant";

export const history = async () => {
  const response = await axios.get(API_ROOT + API_URL.history());
  console.log("response", response);
  return response;
};

export const summary = async (pitchDeck) => {
  const response = await axios.post(API_ROOT + API_URL.summary(), {
    pitchDeck,
  });
  console.log("response", response);
  return response;
};
