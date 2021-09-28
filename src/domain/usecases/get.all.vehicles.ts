import VehicleDto from "../dto/vehicle.dto";
import VehicleMapper from "../mappers/vehicle.mapper";
import VehicleRepository from "../repositories/vehicle.repository";

export default class GetAllVehicles {

    repository: VehicleRepository;

    constructor({ repository }: { repository: VehicleRepository }) {
        this.repository = repository;
    }

    async execute(): Promise<VehicleDto[]> {
        const getAll = await this.repository.findAll();
        return Array.from(getAll.map(vehicle => VehicleMapper.toDTO(vehicle)))
    }

}