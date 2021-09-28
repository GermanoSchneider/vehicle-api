import Category from "./category";
import Entity from "../app/entity";
import Plate from "./plate";
import BadRequest from "../presentation/exceptions/bad.request";


type VehicleProps = {
    plate: Plate;
    brand: string;
    model: string;
    year: number;
    color: string;
    price: number;
    category: Category;
}

export default abstract class Vehicle extends Entity<VehicleProps> {

    constructor({ data }: { data: VehicleProps }) {
        super(data);
        this.validate()
    }

    checkUndefinedValues(): boolean {
        return Object.values(this.data).some(value => value === undefined);
    }

    validate(): void {
        if(this.checkUndefinedValues()) throw new BadRequest('Preencha todos os dados corretamente!')
    }

}
