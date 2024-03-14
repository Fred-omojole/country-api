import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "@mui/icons-material";

const Country = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await fetch(
          `https://restcountries.com/v3.1/name/${name}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch country data");
        }
        const countryData = await response.json();
        setCountry(countryData);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountryData();
  }, [name]);

  return (
    <>
      <section className="p-8 md:py-0 text-white mx-auto max-w-7xl dark:text-slate-200">
        <div className="mb-20">
          <Link
            className=" absolute  p-4 rounded-md bg-slate-700 text-[#d1d5db] dark:text-white"
            to="/"
          >
            <ArrowLeft />
            <span className="">Back</span>
          </Link>
        </div>
        {Array.isArray(country) ? (
          country.map((item) => (
            <div
              key={item.population}
              className="  grid grid-cols-1 gap-8 md:grid-cols-2 lg:h-[600px] md:place-items-center md:h-screen "
            >
              <article className="">
                <div className="object-cover max-w-full">
                  <img
                    className="mx-auto rounded-lg h-[300px] lg:h-[400px] lg:size-auto"
                    src={item.flags.png}
                    //   style={{ height: "600px" }}
                    alt={item.name.common}
                  />
                </div>
              </article>
              <article>
                <h1 className=" p-2 text-center font-extrabold lg:px-0 md:px-0 mb-4 text-gray-900 dark:text-[#d1d5db] text-2xl lg:text-4xl ">
                  {item.name.official}
                </h1>
                <ul className="text-[#d1d5db] px-10 lg:px-0 text-lg font-bold ">
                  <li className="mb-2">
                    Capital: <span className="text-sm">{item.capital}</span>{" "}
                  </li>
                  <li className="mb-2">
                    Region: <span className="text-sm">{item.region}</span>
                  </li>
                  <li className="mb-2">
                    Sub Region:{" "}
                    <span className="text-sm">{item.subregion}</span>
                  </li>
                  <li className="mb-2">
                    Population:{" "}
                    <span className="text-sm">
                      {item.population.toLocaleString()}
                    </span>
                  </li>
                </ul>
                {/* <h2>
                  Languages:
                  <ul>
                    {item.languages.map((language, index) => (
                      <li key={index}>{item.language}</li>
                    ))}
                  </ul>
                </h2> */}
                {item.borders && (
                  <>
                    {" "}
                    <h3 className=" dark:text-[#d1d5db]  px-10 font-bold text-lg md:px-0 lg:px-0">
                      Border Countries:{" "}
                    </h3>
                    <ul className="text-[#d1d5db] flex gap-4 mt-2 text-center justify-center md:px-0 lg:px-0">
                      {item.borders.map((border, index) =>
                        border === 1 ? (
                          <h1
                            key={index}
                            className="bg-slate-600 flex text-right"
                          >
                            {border}
                          </h1>
                        ) : (
                          <li
                            className=" bg-[#d1d5db] text-sm p-3 mt-1 rounded-lg dark:bg-slate-700  "
                            key={index}
                          >
                            {border}
                          </li>
                        )
                      )}
                    </ul>
                  </>
                )}
              </article>
            </div>
          ))
        ) : (
          <div>
            <article>{/* <img src={country.flags.png}  /> */}</article>
            <article>
              {/* <h1>{country.name.official}</h1> */}
              {/* <ul>
                                <li> Native name: {country.name.nativeName}</li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul> */}
            </article>
          </div>
        )}
      </section>
    </>
  );
};

export default Country;
