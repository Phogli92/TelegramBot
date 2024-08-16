import axios from "axios";
import {config} from "./config.js"

export const getWeather = async (ctx) => {
    let locationLatitude = ctx.message.location.latitude
    let locationLongitude = ctx.message.location.longitude
    const response = await axios.get(config.WeatherUrl + `${locationLatitude}, ${locationLongitude}`)

    let text = `${response.data.location.tz_id}, temperatura: ${response.data.current.temp_c}, ${response.data.current.condition.icon}`
    return text;
};
