import VehicleDto from "../dto/vehicle.dto";
import VehicleRepository from "../repositories/vehicle.repository";
import VehicleMapper from "../mappers/vehicle.mapper";
import Plate from "../plate";


export default class GetVehicle {

    repository: VehicleRepository;

    constructor({ repository }: { repository: VehicleRepository }) {
        this.repository = repository;
    }

    async execute(plate: Plate): Promise<VehicleDto> {
        const find = (await this.repository.find(plate));
        return VehicleMapper.toDTO(find);
    }

}