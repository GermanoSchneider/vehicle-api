export enum CategoryType {
    Car = 1, 
    Motocycle
}

export default class Category {

    id: CategoryType
    name: string;
    constructor({category}: {category: CategoryType}) {
        this.id = category;
        this.name = this.getName;
    }

    get getName(): string { return CategoryType[this.id]  }

}