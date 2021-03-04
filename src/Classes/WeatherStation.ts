import { Subject, Observer } from "../Interfaces";

export default class WeatherStation implements Subject {
  private temp: number;
  private observers: Observer[];

  constructor() {
    this.temp = 0;
    this.observers = [];
  }

  public setTemperature(temp: number): WeatherStation {
    console.log(`\n\nWeatherStation: New temperature ${temp}!\n`);
    this.temp = temp;
    this.notifyObservers();
    return this;
  }

  public registerObserver(o: Observer): void {
    this.observers.push(o);
  }

  public removeObserver(o: Observer): void {
    this.observers.splice(this.observers.indexOf(o), 1);
  }

  public notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.temp);
    }
  }
}
