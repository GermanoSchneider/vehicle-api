import Mapper from "../../app/mapper";
import Vehicle from "../vehicle";
import VehicleDto from "../dto/vehicle.dto";
import VehicleFactory from "../factory/vehicle.factory";

export default abstract class VehicleMapper extends Mapper<Vehicle, VehicleDto> {

    static toDTO(vehicle: Vehicle): VehicleDto {
        return {
            placa: vehicle.data.plate.value,
            marca: vehicle.data.brand,
            modelo: vehicle.data.model,
            ano: vehicle.data.year,
            cor: vehicle.data.color,
            valor: vehicle.data.price,
            categoria: vehicle.data.category,
        }
    }

    static fromDTO(data: VehicleDto): Vehicle {
        return new VehicleFactory(data).create();
    }

}