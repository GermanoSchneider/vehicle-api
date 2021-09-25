import Car from "./car";
import Plate from "./plate";
import VehicleDto from "./vehicle.dto";

export default abstract class Vehicle {

    brand: string;
    price: number;
    model: string;
    year: number;
    color: string;
    plate: Plate;
    switched: boolean = false;

    constructor({ brand, model, year, color, price }: { brand: string, model: string, year: number, color: string, price: number }) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
        this.plate = new Plate('XXX0X00');
        this.validate();
    }

    get hasValidYear(): boolean { return this.year >= 2000 }
    get isOn(): boolean { return this.switched }

    validate(): void {
        if (!this.hasValidYear) throw new Error('Invalid Year!')
    }

    turnOn(): void {
        if (this.switched) throw new Error('The vehicle is already on')
        this.switched = true
    }

    turnOff(): void {
        if (!this.switched) throw new Error('The vehicle is already off')
        this.switched = false;
    }

    toDTO(): VehicleDto {
        return {
            marca: this.brand,
            modelo: this.model,
            ano: this.year,
            cor: this.color,
            valor: this.price
        }
    }

}