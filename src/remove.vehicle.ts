import Mapper from "./mapper";
import VehicleDto from "./vehicle.dto";
import VehicleRepository from "./vehicle.repository";

export default class RemoveVehicle {

    repository: VehicleRepository;

    constructor({ repository }: { repository: VehicleRepository }) {
        this.repository = repository;
    }

    async execute(data: VehicleDto): Promise<void> { 
        const vehicle = Mapper.fromDTO(data);
        await this.repository.remove(vehicle.plate)
    }

}