import React, { useEffect, useState } from "react";
import { fetchGetWeatherData } from './Api'
import { 
    Wrapper, 
    WeatherCondition, 
    TodaysWeather, 
    ExtraData,
    City,
    Temperature,
    Description,
    Icon,
    Degrees,
    WeatherDescription,
    ExtraItem,
    Title,
    Number
} from './style'

/* 
Arrow function (new way to write functions)
const Home = () => {

}
*/

function Home() { 

    const [city, setCity] = useState("Heidenheim");
    const [data, setData] = useState(null);

    //Call to OpenWeatherAPI
    async function fetchGetData() {
        try {
            const response = await fetchGetWeatherData(city);
            const weatherData = response.data;
            setData(weatherData)
        }catch(e) {
            console.error(e)
        }
    }
    //This will run at first render because []
    useEffect(() => {
        fetchGetData();
    },[])


    return (
        <Wrapper>
            <WeatherCondition>
                <TodaysWeather>
                    <City>
                        <a>{city}</a>
                    </City>
                    <Temperature>
                        <Description>
                           <Degrees>{data && parseInt(data.main.temp - 273.15)+"°"}</Degrees> 
                           <WeatherDescription>{data && data.weather[0].description}</WeatherDescription>
                        </Description>
                        <Icon>
                            <img src={`https://openweathermap.org/img/wn/${data && data.weather[0].icon}@2x.png`} alt="icon"/>
                        </Icon>
                    </Temperature>
                </TodaysWeather>
                <ExtraData>
                    <ExtraItem>
                        <Title>Feels like:</Title>
                        <Number>{data && parseInt(data.main.feels_like - 273.15)+"°"}</Number>
                    </ExtraItem>
                    <ExtraItem>
                        <Title>Temp min:</Title>
                        <Number>{data && parseInt(data.main.temp_min - 273.15)+"°"}</Number>
                    </ExtraItem>
                    <ExtraItem>
                        <Title>Temp max:</Title>
                        <Number>{data && parseInt(data.main.temp_max - 273.15)+"°"}</Number>
                    </ExtraItem>
                    <ExtraItem>
                        <Title>Pressure:</Title>
                        <Number>{data && data.main.pressure+" hPa"}</Number>
                    </ExtraItem>
                    <ExtraItem>
                        <Title>Humidity:</Title>
                        <Number>{data && data.main.humidity+"%"}</Number>
                    </ExtraItem>
                </ExtraData>
            </WeatherCondition>
        </Wrapper>
        
    );
}

export default Home;