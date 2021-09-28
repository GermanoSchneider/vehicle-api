import Category, { CategoryType } from "./category";
import Plate from "./plate";
import Vehicle from "./vehicle";

export default class Motocycle extends Vehicle {
    constructor({brand, model, year, color, price}: {brand: string, model: string, year: number, color: string, price: number}) {
        super({data: {
            plate: new Plate('XXX0X00'),
            brand: brand, 
            model: model,
            year: year,
            color: color, 
            price: price,
            category:  new Category({category: CategoryType.Motocycle}),
        }});
    }
}