import Vehicle from "./vehicle";
import VehicleDto from "./vehicle.dto";
import VehicleRepository from "./vehicle.repository";

export default class GetVehicle {

    repository: VehicleRepository;

    constructor({ repository }: { repository: VehicleRepository }) {
        this.repository = repository;
    }

    async execute(data: VehicleDto): Promise<VehicleDto> {
        const vehicle = Vehicle.fromDTO(data);
        return (await this.repository.find(vehicle.plate)).toDTO();
    }

}