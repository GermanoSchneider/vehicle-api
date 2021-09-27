import Vehicle from "./vehicle";
import VehicleDto from "./vehicle.dto";

export default abstract class Mapper {

    static toDTO(vehicle: Vehicle): VehicleDto {
        return {
            marca: vehicle.data.brand,
            modelo: vehicle.data.model,
            ano: vehicle.data.year,
            cor: vehicle.data.color,
            valor: vehicle.data.price
        }
    }

    static fromDTO(dto: VehicleDto): Vehicle {
        return new Vehicle({
            data: {
                brand: dto.marca,
                model: dto.modelo,
                year: dto.ano,
                color: dto.cor,
                price: dto.valor
            }
        });
    }


}