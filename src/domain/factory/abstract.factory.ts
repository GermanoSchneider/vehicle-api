import Car from "../car";
import { VehicleDtoInput } from "../dto/vehicle.dto";
import Motocycle from "../motocycle";

export default interface AbstractFactory {
  createCar(input: VehicleDtoInput): Car;
  createMotocycle(input: VehicleDtoInput): Motocycle;
}