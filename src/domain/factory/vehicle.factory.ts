import AbstractFactory from "./abstract.factory";
import Car from "../car";
import Motocycle from "../motocycle";
import { VehicleDtoInput } from "../dto/vehicle.dto";

export default class VehicleFactory implements AbstractFactory {


    createCar(input: VehicleDtoInput): Car {
        return new Car({
            brand: input.marca,
            model: input.modelo,
            year: input.ano,
            color: input.cor,
            price: input.valor
        })
    }

    createMotocycle(input: VehicleDtoInput): Motocycle {
        return new Motocycle({
            brand: input.marca,
            model: input.modelo,
            year: input.ano,
            color: input.cor,
            price: input.valor
        })
    }

}