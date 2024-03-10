import { useState, useEffect } from "react";

const url = "https://restcountries.com/v3.1/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  const fetchCountryData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Failed to fetch country data");
      }
      const countries = await response.json();
      setCountries(countries);
      console.log(countries);
    } catch (error) {
      console.error("Error fetching country data:", error);
    }
  };

  useEffect(() => {
    fetchCountryData();
  }, []);

  return (
    <>
      <section className="font-serif grid grid-cols-1 gap-[60px] px-10 text-white lg:grid-cols-4 lg:px-[100] lg:py-[50] md:grid-cols-3 sm:grid-cols-2">
        {countries.map((country) => {
          const { cca3, name, population, region, capital, flags } = country;
          const flagUrl = flags.png;
          return (
            <article key={cca3}>
              <div className="image-container" style={{ height: "200px" }}>
                <img
                  className=" rounded-t-lg h-full w-full object-cover"
                  src={flagUrl}
                  alt={name.common}
                />
              </div>
              <div className="bg-slate-700 p-4 rounded-b-lg flex flex-col flex-grow">
                <h3 className="text-lg font-semibold pb-3">{name.common}</h3>
                <div className="flex-grow"></div>
                <h4>
                  Population:{" "}
                  <span className="text-sm text-gray-400">{population}</span>
                </h4>
                <h4>
                  Region:{" "}
                  <span className="text-sm text-gray-400">{region}</span>
                </h4>
                <h4>
                  Capital:{" "}
                  <span className="text-sm text-gray-400">{capital}</span>
                </h4>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Countries;
