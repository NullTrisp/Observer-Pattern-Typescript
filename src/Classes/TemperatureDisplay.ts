import { Observer, Subject } from "../Interfaces";

export default class TemperatureDisplay implements Observer {
  constructor(weatherStation: Subject) {
    weatherStation.registerObserver(this);
  }

  public update(temp: number): void {
    console.log(`TemperatureDisplay: Display updated [${temp}]\n`);
  }
}
