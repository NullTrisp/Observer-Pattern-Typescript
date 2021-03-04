import { Fan, TemperatureDisplay, WeatherStation } from "./Classes/index";

const weatherStation = new WeatherStation();
const tempDisplay = new TemperatureDisplay(weatherStation);
const fan = new Fan(weatherStation);

weatherStation.setTemperature(20).setTemperature(30);
