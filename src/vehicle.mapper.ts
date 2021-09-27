import Mapper from "./mapper";
import Vehicle from "./vehicle";
import VehicleDto from "./vehicle.dto";

export default class VehicleMapper extends Mapper<Vehicle> {
    
    constructor(vehicle: Vehicle) { super(vehicle) }
    
    toDTO(): VehicleDto {
        return new VehicleDto(this.data);
    }

    fromDTO(dto: VehicleDto): Vehicle {
        this.data.data.brand = dto.marca;
        this.data.data.model = dto.modelo;
        this.data.data.year = dto.ano;
        this.data.data.color = dto.cor;
        this.data.data.price = dto.valor;
        return this.data;
    }

}