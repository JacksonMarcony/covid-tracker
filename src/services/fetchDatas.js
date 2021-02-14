import api from './api'

export const fetchCountry = async (country) => {
  try {   
    const { data } = await api.get(`/${country}`);
    console.log("bbbbbbbbb", data["data"]);

    return data["data"]
    // return { data.cases, confirmed, deaths, recovered }
  } catch (error) {
    console.error(error)
    throw new Error("Erro ao requisitar dados da api COUNTRY")
  }
}

export const fetchState = async (country, state) => {
  try {   
    const { data: { cases, deaths, refuses, datetime } } = await api.get(`${country}/uf/${state}`)
    //console.log(cases);
    return { cases, deaths, refuses, datetime };
  } catch (error) {
    console.error(error)
    throw new Error("Erro ao requisitar dados da api")
  }
}
