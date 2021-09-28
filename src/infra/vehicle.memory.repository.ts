
import Plate from "../domain/plate";
import Vehicle from "../domain/vehicle";
import VehicleRepository from "../domain/repositories/vehicle.repository";
import NoContent from "../presentation/exceptions/no.content";

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
        return this.vehicles.some(vehicle => vehicle.data.plate.value === plate.value)
    }

    async findAll(): Promise<Vehicle[]> {
        return this.vehicles;
    }

    async find(plate: Plate): Promise<Vehicle> {
        const find = this.vehicles.find(vehicle => vehicle.data.plate.value === plate.value);
        if (!find) throw new NoContent('Registro não encontrado')
        return find;
    }

    async remove(plate: Plate): Promise<void> {
        const index = this.vehicles.findIndex(vehicle => vehicle.data.plate.value == plate.value);
        if (index === undefined) throw new NoContent('Registro não cadastrado!');
        this.vehicles.splice(index, 1);
    }


}