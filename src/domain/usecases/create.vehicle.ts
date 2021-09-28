import VehicleDto from "../dto/vehicle.dto";
import VehicleRepository from "../repositories/vehicle.repository";
import VehicleMapper from "../mappers/vehicle.mapper";
import BadRequest from "../../presentation/exceptions/bad.request";

export default class CreateVehicle {

    repository: VehicleRepository;

    constructor({ repository }: { repository: VehicleRepository }) {
        this.repository = repository;
    }

    async execute(data: VehicleDto): Promise<VehicleDto> {
        const vehicle = VehicleMapper.fromDTO(data);
        if(await this.repository.exists(vehicle)) throw new BadRequest(`${vehicle.data.model} already exist!`)
        const create = await this.repository.create(vehicle);
        return VehicleMapper.toDTO(create);  
    }

}






