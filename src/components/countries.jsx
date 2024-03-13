import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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

  const removeCountry = (cca3) => {
    const newCountries = countries.filter((country) => country.cca3 !== cca3);
    setCountries(newCountries);
  };

  return (
    <>
      <section className=" dark font-serif grid grid-cols-1 gap-[60px]  px-10 text-white bg-slate-200 dark:bg-slate-700  lg:grid-cols-4 lg:px-[100] lg:py-[50] md:grid-cols-3 sm:grid-cols-2">
        {countries.map((country) => {
          const { cca3, name, population, region, capital, flags } = country;
          const flagUrl = flags.png;
          return (
            <article className=" dark hover:scale-105 ease-in-out " key={cca3}>
              <div className="image-container  " style={{ height: "200px" }}>
                <img
                  className=" rounded-t-lg h-full w-full object-cover"
                  src={flagUrl}
                  alt={name.common}
                />
              </div>
              <div className="bg-[#d1d5db] drop-shadow-lg text-black dark:text-white dark:bg-slate-700 p-4 rounded-b-lg flex flex-col flex-grow">
                <h3 className="text-lg  font-semibold pb-3">{name.common}</h3>
                
                <h4>
                  Population:{" "}
                  <span className="text-sm text-gray-700 dark:text-gray-200">{population}</span>
                </h4>
                <h4>
                  Region:{" "}
                  <span className="text-sm text-gray-700 dark:text-gray-200">{region}</span>
                </h4>
                <h4>
                  Capital:{" "}
                  <span className="text-sm text-gray-700 dark:text-gray-200">{capital}</span>
                </h4>
                <div className="flex justify-between  text-slate-700 dark:text-gray-200">
                  <Link
                    className=" text-sm py-2 hover:font-bold cursor-pointer"
                    to={`/countries/${name}`}
                  >
                    Learn More
                  </Link>
                  <button
                  // bg-[#d1d5db]
                    className="  py-2 text-sm hover:font-bold cursor-pointer"
                    onClick={() => removeCountry(cca3)}
                  >
                    Remove Country
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default Countries;
