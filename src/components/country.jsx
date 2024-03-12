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
  <Link className="m-10 bg-slate-700 p-4 rounded-md text-white" to = '/'><ArrowLeft/><span>Back</span></Link>

    
  </> ;
};

export default Country;
