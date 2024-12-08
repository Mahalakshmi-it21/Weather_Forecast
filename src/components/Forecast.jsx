

import React from 'react';
import formatCurrentWeather from "../services/weatherService";


function Forecast( { title , weather }) {


  return (
    <div>
      {weather && (
        <React.Fragment>
      <div className="flex items-center justify-start mt-6">
        <p className="text-white font-medium uppercase">{title}</p>
      </div>
      <hr className="my-2" />
      <div className="flex flex-row items-center justify-between text-white">
      <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">04:00 AM</p>
            <img src="http://openweathermap.org/img/wn/11d@2x.png" className="w-12 my-1" alt="" />
            <p className="font-medium text-white">
              {weather.pressure} Pa
            </p>
            <p className="font-medium">19°</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">04:00 AM</p>
            <img src="http://openweathermap.org/img/wn/03d@2x.png" className="w-12 my-1" alt="" />
            <p className="font-medium text-white">
              {weather.pressure} Pa
            </p>
            <p className="font-medium">19°</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">04:00 AM</p>
            <img src="http://openweathermap.org/img/wn/02d@2x.png" className="w-12 my-1" alt="" />
            <p className="font-medium text-white">
              {weather.pressure} Pa
            </p>
            <p className="font-medium">19°</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="font-light text-sm">04:00 AM</p>
            <img src="http://openweathermap.org/img/wn/09n@2x.png" className="w-12 my-1" alt="" />
            <p className="font-medium text-white">
              {weather.pressure} Pa
            </p>
            <p className="font-medium">19°</p>
          </div>
      </div>
      </React.Fragment>) }

      
    </div>
  )
}

export default Forecast



