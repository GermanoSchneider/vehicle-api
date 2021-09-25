import Car from "./car";
import VehicleDto from "./vehicle.dto";
import VehicleRepository from "./vehicle.repository";

export default class GetCar {

    repository: VehicleRepository;

    constructor({ repository }: { repository: VehicleRepository }) {
        this.repository = repository;
    }

    async execute(dto: VehicleDto): Promise<VehicleDto> {
        return (await this.repository.find(Car.fromDTO(dto).plate)).toDTO();
    }

}