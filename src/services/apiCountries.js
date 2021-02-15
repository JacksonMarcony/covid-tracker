import axios from "axios"

const apiCountries = axios.create({
  baseURL: "https://covid19.mathdro.id/api",
});

export default apiCountries;