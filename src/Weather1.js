import React, { useEffect, useState } from 'react'
import './App.css';
import x from './Apikey';

export default function Weather1() {
    const[city,setCity]=useState(null)
    const[air,setAir]=useState(null)
    const[search,setSearch]=useState('Lucknow')
    
    useEffect(()=>{
        const fetchApi = async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=${x}`;
            const response= await fetch(url);
            const resJson= await response.json();
            //console.log(resJson);
            setCity(resJson.main);
            setAir(resJson.wind);
        };
        fetchApi();
    },[search])

  return (
    <>
    <div className="container-sm cnt1">
        <br/>
        <h1 className='cnt11'>Weather Application</h1>
        <h3 className='cnt11'>Enter City Name Below</h3>
        <input className="form-control" type="text" placeholder="Enter City" aria-label="default input example" 
        onChange={(event)=>{setSearch(event.target.value)}}
        value={search}/>
        <br/>
      </div>
      { !city ? (<div className="container-sm cnt3">No Data Found <br /> ! Make Sure That Spelling is Coorect</div>):(
        <div className="container-sm cnt2">
            <br/>
            <h2 className='cnt12'>{search}</h2>
            <h3 className='cnt12'>Temperature : {city.temp} Degrees</h3>
            <h3 className='cnt12'>Humidity : {city.humidity} % </h3>
            <h3 className='cnt12'>Wind Speed : {air.speed} km/hr </h3>
            <br/>
        </div>
      )}
      </>
  )
}
