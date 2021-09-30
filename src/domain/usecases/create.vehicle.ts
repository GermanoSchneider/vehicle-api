import VehicleRepository from "../repositories/vehicle.repository";
import BadRequest from "../../presentation/exceptions/bad.request";
import VehicleMapper from "../../presentation/mappers/vehicle.mapper";
import { VehicleDtoInput, VehicleDtOOutput } from "../dto/vehicle.dto";

export default class CreateVehicle {

    repository: VehicleRepository;
    mapper: VehicleMapper

    constructor({ repository }: { repository: VehicleRepository }) {
        this.repository = repository;
        this.mapper = new VehicleMapper();
    }

    async execute(data: VehicleDtoInput): Promise<VehicleDtOOutput> {
        const vehicle = this.mapper.fromDTO(data);
        if(await this.repository.exists(vehicle.data.plate)) throw new BadRequest(`O veículo ${vehicle.data.brand} ${vehicle.data.model} já existe!`)
        const create = await this.repository.create(vehicle);
        return this.mapper.toDTO(create);  
    }

}







