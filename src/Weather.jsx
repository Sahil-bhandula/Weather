import React, { useState } from 'react'
import { Search } from './Search'
import { Infobox } from './Infobox'

export const Weather = () => {
    const[w,setw]=useState({
        city:"Delhi",
        temp:45,
        tempmin:30,
        tempmax:50,
        humidity:30,
        weather:"haze"
    })

    let updatei=(newi)=>{
        setw(newi);
    }

  return (
    <div style={{textAlign:'center'}}>
        <h2>Weather App</h2>
        <Search updatei={updatei}/>
        <Infobox info={w}/>
    </div>
  )
}
