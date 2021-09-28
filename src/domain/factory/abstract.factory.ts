import Car from "../car";
import Motocycle from "../motocycle";

export default interface AbstractFactory {
  createCar(): Car;
  createMotocycle(): Motocycle;
}