import { Observer, Subject } from "../Interfaces";

export default class Fan implements Observer {
  constructor(weatherStation: Subject) {
    weatherStation.registerObeserver(this);
  }

  public update(temp: number): void {
    temp > 25
      ? console.log("Fan: Turning on...\n")
      : console.log("Fan: Turning off...\n");
  }
}
