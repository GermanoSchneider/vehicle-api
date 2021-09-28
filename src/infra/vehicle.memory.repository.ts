
import Plate from "../domain/plate";
import Vehicle from "../domain/vehicle";
import VehicleRepository from "../domain/repositories/vehicle.repository";

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
            const find = this.vehicles.find(vehicle => vehicle.data.plate.value == plate.value);
            if (!find) throw new Error('Unregistered Vehicle!')
            return find;
        } catch (error) {
            throw error;
        }
    }

    async remove(plate: Plate): Promise<void> {
        try {
            const index = this.vehicles.findIndex(vehicle => vehicle.data.plate.value == plate.value);
            if(index == undefined) throw new Error('Invalid Vehicle!');
            this.vehicles.splice(index, 1);
        } catch (error) {
            throw error;
        }
    }


}