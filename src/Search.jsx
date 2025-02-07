import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Search.css"

export const Search = ({updatei}) => {
    let [city,setcity]=useState("");

    const url="https://api.openweathermap.org/data/2.5/weather";
    const key="07e56571edff076b41f4ff3e18303d36"

    let weather=async()=>{
        let res=await fetch(`${url}?q=${city}&appid=${key}&units=metric`)
        let jsonr=await res.json();
        // console.log(jsonr);

        let result={
            city:city,
            temp:jsonr.main.temp,
            tempmin:jsonr.main.temp_min,
            tempmax:jsonr.main.temp_max,
            humidity:jsonr.main.humidity,
            weather:jsonr.weather[0].description,
        }
        console.log(result)
        return result;
    }



let change=(event)=>{
    setcity(event.target.value);
}
let submit=async (event)=>{
    event.preventDefault();
    console.log(city);
    setcity("");
    let newi=await weather();
    updatei(newi);
    
}

  return (
    <div className='search'>
    
    <form onSubmit={submit}>
    <TextField id="city" label="City Name" variant="outlined"  required value={city} onChange={change}/>
    <br /> <br />
    <Button variant="contained" type='submit'>
        Search
      </Button>
      
      </form>
    </div>
    
  )
}
