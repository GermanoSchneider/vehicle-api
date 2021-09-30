import VehicleRepository from "../repositories/vehicle.repository";
import Plate from "../plate";
import VehicleMapper from "../../presentation/mappers/vehicle.mapper";
import { VehicleDtOOutput } from "../dto/vehicle.dto";
import NoContent from "../../presentation/exceptions/no.content";


export default class GetVehicle {

    repository: VehicleRepository;
    mapper: VehicleMapper

    constructor({ repository }: { repository: VehicleRepository }) {
        this.repository = repository;
        this.mapper = new VehicleMapper()
    }

    async execute(plate: Plate): Promise<VehicleDtOOutput> {
        const find = await this.repository.find(plate);
        if(!find) throw new NoContent('Registro não encontrado!')
        return this.mapper.toDTO(find);
    }

}