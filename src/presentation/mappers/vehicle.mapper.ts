import Mapper from "../../core/mapper";
import { CategoryType } from "../../domain/category";
import { VehicleDto, VehicleDtoInput, VehicleDtOOutput } from "../../domain/dto/vehicle.dto";
import VehicleFactory from "../../domain/factory/vehicle.factory";
import Vehicle from "../../domain/vehicle";
import BadRequest from "../exceptions/bad.request";


export default class VehicleMapper implements Mapper<Vehicle, VehicleDto> {

    factory: VehicleFactory;

    constructor() {
        this.factory = new VehicleFactory();
    }

    toDTO(vehicle: Vehicle): VehicleDtOOutput {
        return {
            placa: vehicle.data.plate.value,
            marca: vehicle.data.brand,
            modelo: vehicle.data.model,
            ano: vehicle.data.year,
            cor: vehicle.data.color,
            valor: vehicle.data.price,
            categoria: vehicle.data.category.getName,
        }
    }

    fromDTO(data: VehicleDtoInput): Vehicle {
        if (data.id_categoria === CategoryType.Car) return this.factory.createCar(data);
        if (data.id_categoria === CategoryType.Motocycle) return this.factory.createMotocycle(data);
        throw new BadRequest('Dados inválidos!')
    }

}