import Car from "./car";
import VehicleDto from "./vehicle.dto";
import VehicleRepository from "./vehicle.repository";

export default class RemoveCar {

    repository: VehicleRepository;

    constructor({ repository }: { repository: VehicleRepository }) {
        this.repository = repository;
    }

    async execute(dto: VehicleDto): Promise<void> { 
        await this.repository.remove(Car.fromDTO(dto).plate)
    }

}