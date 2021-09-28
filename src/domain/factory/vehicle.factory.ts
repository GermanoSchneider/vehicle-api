import AbstractFactory from "./abstract.factory";
import Car from "../car";
import Motocycle from "../motocycle";
import Vehicle from "../vehicle";
import VehicleDto from "../dto/vehicle.dto";
import { CategoryType } from "../category";
import BadRequest from "../../presentation/exceptions/bad.request";

export default class VehicleFactory implements AbstractFactory {

    dto: VehicleDto;

    constructor(dto: VehicleDto) {
        this.dto = dto;
    }

    createCar(): Car {
        return new Car({
            brand: this.dto.marca,
            model: this.dto.modelo,
            year: this.dto.ano,
            color: this.dto.cor,
            price: this.dto.valor
        })
    }

    createMotocycle(): Motocycle {
        return new Motocycle({
            brand: this.dto.marca,
            model: this.dto.modelo,
            year: this.dto.ano,
            color: this.dto.cor,
            price: this.dto.valor
        })
    }

    create(): Vehicle {
        if (this.dto.categoria.id == CategoryType.Car) return this.createCar();
        if (this.dto.categoria.id == CategoryType.Motocycle) return this.createMotocycle();
        throw new BadRequest('Dados inválidos!')
    }

}