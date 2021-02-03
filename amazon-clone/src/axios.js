import axios from "axios";

// URL for deployed cloud function
const instance = axios.create({
  // THE API (cloud function) URL
  baseURL: "https://us-central1-challenge-d4dc9.cloudfunctions.net/api"
  //  "http://127.0.0.1:5002/challenge-d4dc9/us-central1/api" // 
});

export default instance;