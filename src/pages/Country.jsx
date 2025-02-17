import { useTransition } from "react";
import { useEffect } from "react";
import { getCountryData } from "../api/PostApi";
import { useState } from "react";
import { Loader } from "../ui/Loader";
import { CountryCard } from "../components/CountryCard";
import { SearchFilter } from "../ui/SearchFilter";

export const Country = () => {
  const [isPending, startTransion] = useTransition();
  const [countries, setCountries] = useState([]);

  const [search, setSearch] = useState();
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    startTransion(async () => {
      const res = await getCountryData();
      setCountries(res.data);
    });
  }, []);

  if (isPending) return <Loader></Loader>;

  const searchCountry = (country) => {
    if (search) {
      return country.name.common.toLowerCase().includes(search.toLowerCase());
    }
    return country;
  };

  const filterRegion = (country) => {
    if (filter === "all") return country;
    return country.region === filter;
  };

  // filter and search logic here :-
  const filterCountries = countries.filter(
    (country) => searchCountry(country) && filterRegion(country)
  );

  return (
    <section className="country-section">
      <SearchFilter
        search={search}
        setSearch={setSearch}
        filter={filter}
        setFilter={setFilter}
        countries={countries}
        setCountries={setCountries}
      ></SearchFilter>

      <ul className="grid grid-four-cols">
        {filterCountries.map((curCountry, index) => {
          return <CountryCard country={curCountry} key={index}></CountryCard>;
        })}
      </ul>
    </section>
  );
};
