import VehicleDto from "./vehicle.dto";
import VehicleRepository from "./vehicle.repository";

export default class GetAllCar {

    repository: VehicleRepository;

    constructor({ repository }: { repository: VehicleRepository }) {
        this.repository = repository;
    }

    async execute(): Promise<VehicleDto[]> {
        const getAll = await this.repository.findAll();
        return Array.from(getAll.map(vehicle => vehicle.toDTO()))
    }

}