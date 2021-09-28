import Plate from "../plate";
import Vehicle from "../vehicle";

export default interface VehicleRepository {
    create(data: Vehicle): Promise<Vehicle>
    findAll(): Promise<Vehicle[]>;
    find(plate: Plate): Promise<Vehicle>;
    exists(vehicle: Vehicle): Promise<boolean>
    remove(plate: Plate): Promise<void>
}