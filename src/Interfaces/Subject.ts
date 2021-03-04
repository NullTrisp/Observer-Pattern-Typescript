import Observer from "./Observer";

export default interface Subject {
  registerObeserver(o: Observer): void;
  removeObserver(o: Observer): void;
  notifyObservers(): void;
}
