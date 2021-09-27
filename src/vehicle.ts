import { is } from "@babel/types";
import Car from "./car";
import Entity from "./entity";
import Plate from "./plate";
import VehicleDto from "./vehicle.dto";
import VehicleMapper from "./vehicle.mapper";

type VehicleProps = {
    brand: string;
    price: number;
    model: string;
    year: number;
    color: string;
}

export default abstract class Vehicle extends Entity<VehicleProps> {

    plate: Plate;

    constructor({ data }: { data: VehicleProps }) {
        super(data);
        this.plate = new Plate('XXX0X00');
    }

    get hasValidYear(): boolean { return this.data.year >= 2000 }

    validate(): void {
        if (!this.hasValidYear) throw new Error('Invalid Year!')
    }


}
