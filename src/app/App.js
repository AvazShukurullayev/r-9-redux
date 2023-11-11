import React, {useEffect, useState} from 'react';
import axios from "axios";

const App = () => {
    const [weather, setWeather] = useState(null)
    useEffect(() => {
        axios.get("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Tashkent?unitGroup=us&key=BPC5BTKUG5X7QV6588VU94QUE&contentType=json")
            .then((data) => {
                console.log(data.data)
                setWeather(data.data)
            })
            .catch((err) => console.log(err))
    }, []);
    return (
        <div className={"app"}>
            <div className={"container"}>
                <h1 className={"text-center"}>Axios</h1>
                {weather ? <div className="weather-wrapper">
                    <p>Country: <b>{weather.resolvedAddress}</b></p>
                    <p>Region: <b>{weather.address}</b></p>
                  <p>Icon: <img src={weather.currentConditions.icon} alt=""/></p>
                </div> : <div className={"text-center m-4"}>
                    <div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default App;