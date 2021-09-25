
import Plate from "./plate";
import Vehicle from "./vehicle";
import VehicleRepository from "./vehicle.repository";

export default class VehicleMemoryRepository implements VehicleRepository {

    vehicles: Vehicle[];

    constructor() {
        this.vehicles = [];
    }

    async create(data: Vehicle): Promise<Vehicle> {
        try {
            await this.vehicles.push(data);
            return data;
        } catch (error) {
            throw error;
        }
    }

    async exists(vehicle: Vehicle): Promise<boolean> {
        try {
            return this.vehicles.includes(vehicle);
        } catch (error) {
            throw error;
        }
    }

    async findAll(): Promise<Vehicle[]> {
        try {
            return this.vehicles;
        } catch (error) {
            throw error;
        }
    }

    async find(plate: Plate): Promise<Vehicle> {
        try {
            const find = this.vehicles.find(vehicle => vehicle.plate.plate == plate.plate);
            if (!find) throw new Error('Unregistered Vehicle!')
            return find;
        } catch (error) {
            throw error;
        }
    }

    async remove(plate: Plate): Promise<void> {
        try {
            const index = this.vehicles.findIndex(vehicle => vehicle.plate.plate == plate.plate);
            if(index == undefined) throw new Error('Invalid Vehicle!');
            this.vehicles.splice(index, 1);
        } catch (error) {
            throw error;
        }
    }


}