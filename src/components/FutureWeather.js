import React from 'react'
import { getWetherProp } from '../utils/ApiUtils';

export default function FutureWeather(props) {

  return (
    <div className='div-weather-details'>
      {props.data?.map((item, idx) => {
          return (
            <div key={idx}>
              <div className='weather-time'>
                  {((item?.dt_txt).split(" ")[1]).split(":")[0]}:{((item?.dt_txt).split(" ")[1]).split(":")[1]}
              </div>
              <br />
              <div>
                <img
                  src={`./img/weather-icons/${getWetherProp(item?.weather[0]?.id)?.name}.svg`} 
                  alt="Icon not found!"
                />
              </div>
              <br />
              <div>
                  {Math.round(item?.main?.temp)}&deg;C
              </div>
            </div>
          )
        })
      }
    </div>
  )
}
