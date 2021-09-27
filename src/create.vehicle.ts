import VehicleDto from "./vehicle.dto";
import VehicleRepository from "./vehicle.repository";
import Mapper from "./mapper";

export default class CreateVehicle {

    repository: VehicleRepository;

    constructor({ repository }: { repository: VehicleRepository }) {
        this.repository = repository;
    }

    async execute(data: VehicleDto): Promise<VehicleDto> {
        const vehicle = Mapper.fromDTO(data);
        if(await this.repository.exists(vehicle)) throw new Error(`${vehicle.data.model} already exist!`)
        const create = await this.repository.create(vehicle);
        return Mapper.toDTO(create);  
    }

}







