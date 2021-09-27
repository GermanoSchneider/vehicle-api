import Mapper from "./mapper";
import VehicleDto from "./vehicle.dto";
import VehicleRepository from "./vehicle.repository";

export default class GetAllVehicles {

    repository: VehicleRepository;

    constructor({ repository }: { repository: VehicleRepository }) {
        this.repository = repository;
    }

    async execute(): Promise<VehicleDto[]> {
        const getAll = await this.repository.findAll();
        return Array.from(getAll.map(vehicle => Mapper.toDTO(vehicle)))
    }

}