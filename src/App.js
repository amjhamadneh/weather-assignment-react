import React, { useEffect, useState } from 'react';
import './App.scss'
import CurrentWeather from './components/CurrentWeather';
import Search from './components/Search';
import FutureWeather from './components/FutureWeather';
import NotFound from './NotFound';
import { FetchData, getWetherProp } from './utils/ApiUtils';
import FakeWeatherData from './data/FakeWeather.json';

function App() {
  const [data, setData] = useState("");
  const [imageName, setImageName] = useState("");
  const [navColor, setNavColor] = useState("");
  const [pageColor, setPageColor] = useState("");
  
  useEffect(() => {
    setData(FakeWeatherData?.list);
    const weeatherProp = getWetherProp(FakeWeatherData?.list[0]?.weather[0]?.id);
    setImageName(weeatherProp?.name);
    setNavColor(weeatherProp?.navColor);
    setPageColor(weeatherProp?.pageColor);
  }, []);

  async function handleSearch(city) {
      const list = await FetchData(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=8&units=metric&appid=${process.env.REACT_APP_API_KEY}`, "GET");
      if(list.status != 200){
        console.warn("Faild to load resources!");
        setData([]);
        
      }
      else {
        setData(list?.data?.list);
        const weeatherProp = getWetherProp(list.data?.list[0]?.weather[0]?.id);
        setImageName(weeatherProp?.name);
        setNavColor(weeatherProp?.navColor);
        setPageColor(weeatherProp?.pageColor);
      }
  }

  return (
    <div className="app" style={{backgroundColor: pageColor}}>

      <header className="app__header" style={{backgroundColor: navColor}}>
        <Search handleSearch={handleSearch}  navColor={navColor}/>
      </header>

      <main className="app__main">
        { data.length != 0 ?
            <>
              <CurrentWeather data={data[0]} imageName={imageName}/>
              <br />
              <FutureWeather data={data.slice(1, 8)}/>
            </>
            : <NotFound />
        }
      </main>

    </div>
  );
}


export default App;
