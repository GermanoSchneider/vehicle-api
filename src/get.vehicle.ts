import Mapper from "./mapper";
import VehicleDto from "./vehicle.dto";
import VehicleRepository from "./vehicle.repository";

export default class GetVehicle {

    repository: VehicleRepository;

    constructor({ repository }: { repository: VehicleRepository }) {
        this.repository = repository;
    }

    async execute(data: VehicleDto): Promise<VehicleDto> {
        const vehicle = Mapper.fromDTO(data);
        const find = (await this.repository.find(vehicle.plate));
        return Mapper.toDTO(find);
    }

}