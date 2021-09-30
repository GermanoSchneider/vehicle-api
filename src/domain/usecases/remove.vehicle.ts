import VehicleRepository from "../repositories/vehicle.repository";
import Plate from "../plate";


export default class RemoveVehicle {

    repository: VehicleRepository;

    constructor({ repository }: { repository: VehicleRepository }) {
        this.repository = repository;
    }

    async execute(plate: Plate): Promise<void> { 
        await this.repository.remove(plate)
    }

}