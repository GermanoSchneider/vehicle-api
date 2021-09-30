
import Plate from "../domain/plate";
import Vehicle from "../domain/vehicle";
import VehicleRepository from "../domain/repositories/vehicle.repository";

export default class VehicleMemoryRepository implements VehicleRepository {

    vehicles: Vehicle[];

    constructor() {
        this.vehicles = [];
    }

    async create(data: Vehicle): Promise<Vehicle> {
        await this.vehicles.push(data);
        return data;
    }

    async exists(plate: Plate): Promise<boolean> {
        return this.vehicles.some(vehicle => vehicle.data.plate === plate)
    }

    async findAll(): Promise<Vehicle[]> {
        return this.vehicles;
    }

    async find(plate: Plate): Promise<Vehicle | undefined> {
        return this.vehicles.find(vehicle => vehicle.data.plate.value === plate.value);
    }

    async remove(plate: Plate): Promise<void> {
        const index = this.vehicles.findIndex(vehicle => vehicle.data.plate.value == plate.value);
        if (index) this.vehicles.splice(index, 1);
    }


}