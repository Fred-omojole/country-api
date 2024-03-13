import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Country = () => {
    const [country, setCountry] = useState([]);
    const { name } = useParams();
   
    useEffect(() => { 
        const fetchCountryData = async () => {
            try {
                const response = await fetch(`https://restcountries.com/v3.1/name/${name}`);
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
            <section>
                {Array.isArray(country) ? (
                    country.map((item) => (
                        <div key={item.population} className="grid grid-cols-1 gap-8 md:grid-col">
                            <article>
                                <img src={item.flags.png} alt={item.name.common} />
                            </article>
                            <article>
                                <h1>{item.name.official}</h1>
                            </article>
                        </div>
                    ))
                ) : (
                    <div>
                        <article>
                            <img src={country.flags.png} alt={country.name.common} />
                        </article>
                        <article>
                            <h1>{country.name.official}</h1>
                        </article>
                    </div>
                )}
            </section>
        </>
    );
};

export default Country;
