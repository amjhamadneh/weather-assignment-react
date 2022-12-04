import React from 'react'

export default function CurrentWeather(props) {
  return (
    <div className="div-weather">
      <img
        className="img-weather"
        src={`./img/weather-icons/${props.imageName}.svg`} 
        alt="Icon not found!"
      />
      <p className="p-desc">{props.data?.weather[0]?.description}</p>
      <p className='p-temp'><strong>Temperature</strong> {Math.round(props.data?.main?.temp_min)}&deg;C to {Math.round(props.data?.main?.temp_max)}&deg;C</p>
      <p className='p-hum-pres'><strong>Humidity</strong>  {props.data?.main?.humidity}%  <strong>Pressure</strong>  {props.data?.main?.pressure}</p>
    </div>
  )
}
