import React from 'react'
import { UilSearch , UilLocationPoint } from '@iconscout/react-unicons';
import { useState } from 'react';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Inputs({setQuery , units , setUnits}) {
  const [city, setCity] = useState("");

const handleUnitsChange = (e) => {
const selectedUnit = e.currentTarget.name;
if(units !== selectedUnit) setUnits(selectedUnit);
};



  const handleSearchClick = () => {
  if(city !== '') setQuery({q: city})
}

const handleLocationClick =() => {
  if (navigator.geolocation){
    toast.info('Fetching users location.')
    navigator.geolocation.getCurrentPosition((position) => {
          toast.success('Location Fetched!')
      let lat = position.coords.latitude;
          let lon = position.coords.longitude;

          setQuery({
            lat,
            lon,
          });
    });
  }
};

  return (<div className="flex flex-col md:flex-row justify-center my-6">
    <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
           <input 
           value={city}
           onChange={(e) => setCity(e.currentTarget.value)}
           type = "text"
           placeholder = "Search for city...."
           className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"/>
            <UilSearch
             size={25}
              className = "text-white cursor-pointer transition ease-out hover:scale-25 "
              onClick = {handleSearchClick}
              />
    <UilLocationPoint 
    size={25} 
    className = "text-white cursor-pointer transition ease-out hover:scale-25" 
    onClick = {handleLocationClick}
    />
    </div>
    
   

    <div className="flex flex-row w-1/14 items-center justify-center">
        <button name="metric" className="text-xl text-white font-light transition ease out hover:scale-125" onClick={handleUnitsChange}>
        &nbsp;  &nbsp;  &nbsp;  &nbsp; °C
        </button>
        <p className="text-xl text-white mx-1">
         &nbsp; |
        </p>
        <button name="imperial" className="text-xl text-white font-light transition ease out hover:scale-125" onClick={handleUnitsChange}>
        &nbsp; °F
</button>

    </div>
   
  </div>
  );
    
}

export default Inputs