import Vehicle from "./vehicle";
import VehicleDto from "./vehicle.dto";

export default class Car extends Vehicle {

    static fromDTO(dto: VehicleDto): Car {
        return new Car({
            brand: dto.marca,
            model: dto.modelo,
            year: dto.ano,
            color: dto.cor,
            price: dto.valor
        });
    }
    
}