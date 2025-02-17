import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

// http get method :-
export const getCountryData = () => {
  return api.get("/all?fields=name,population,region,capital,flags");
};

// http get method for individual country name :-
export const getCountryIndividualData = (name) => {
  return api.get(
    `/name/${name}?fullText=true&fields=name,population,region,subregion,capital,tld,currencies,languages,borders,flags`
  );
};
