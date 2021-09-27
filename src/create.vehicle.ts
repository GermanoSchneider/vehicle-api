import Car from "./car";
import Vehicle from "./vehicle";
import VehicleDto from "./vehicle.dto";
import VehicleMapper from "./vehicle.mapper";
import VehicleRepository from "./vehicle.repository";

export default class CreateVehicle {

    repository: VehicleRepository;

    constructor({ repository }: { repository: VehicleRepository }) {
        this.repository = repository;
    }

    async execute(data: VehicleDto): Promise<VehicleDto> {
        const vehicle = new VehicleMapper().fromDTO(data);
        if(await this.repository.exists(vehicle)) throw new Error(`${vehicle.data.model} already exist!`)
        const create = await this.repository.create(vehicle);
        console.log(create)
        return create.toDTO();  
    }

}







