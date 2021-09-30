import VehicleMapper from "../../presentation/mappers/vehicle.mapper";
import { VehicleDtOOutput } from "../dto/vehicle.dto";
import VehicleRepository from "../repositories/vehicle.repository";

export default class GetAllVehicles {

    repository: VehicleRepository;
    mapper: VehicleMapper;

    constructor({ repository }: { repository: VehicleRepository }) {
        this.repository = repository;
        this.mapper = new VehicleMapper()
    }

    async execute(): Promise<VehicleDtOOutput[]> {
        const getAll = await this.repository.findAll();
        return Array.from(getAll.map(vehicle => this.mapper.toDTO(vehicle)))
    }

}