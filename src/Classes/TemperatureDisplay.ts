import { Observer, Subject } from "../Interfaces";

export default class TemperatureDisplay implements Observer {
  constructor(weatherStation: Subject) {
    weatherStation.registerObeserver(this);
  }

  public update(temp: number): void {
    console.log(`TemperatureDisplay: Display updated [${temp}]\n`);
  }
}
