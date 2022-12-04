import React, { useState } from 'react'

export default function Search(props) {
    const [city, setCity] = useState("");

    function handleFindWether(){
        props.handleSearch(city);
    }

    return (
        <div className="div-search" style={{backgroundColor:props.navColor}}>
            <input 
                className="input-search" 
                value={city} 
                onChange={(e) => setCity(e.target.value)}
                placeholder="Type in a city name"
            />

            <input 
                type="button"
                className="button-search"
                onClick={handleFindWether}
                value="FIND WETHER"
            />
               
        </div>
    )
}
