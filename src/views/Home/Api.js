import axios from "axios";

export const fetchGetWeatherData = (city) => {
    return axios.create().get("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + process.env.REACT_APP_API_ID, {});
};