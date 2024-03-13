import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "@mui/icons-material";


 ''
const Country = () => {
    const[country, setCountry] = useState([]);
const {name} = useParams();
   

    

    useEffect(()=> { 
        const fetchCountryData = async () => {
            const response = await fetch(`https://restcountries.com/v3.1/name/${name}`)
        const country = await response.json();
        setCountry(country)
        }   

fetchCountryData()
    },[name])
  return<>
  <section className=" bg-[#d1d5db] dark:bg-slate-700 h-screen">

 

<Link className=" absolute mt-10 m-5 p-4 rounded-md bg-slate-700 text-[#d1d5db] dark:text-white" to = '/'><ArrowLeft/><span className="">Back</span></Link>


  </section>
    
  </> ;
};

export default Country;
