export default class Plate {
    
    readonly plate: string;

    constructor(plate: string) {
        this.plate = this.build(plate);
    }

    build(plate: string): string {
        const validate = /^[a-zA-Z]{3}\d[a-zA-Z]{1}\d{2}$/g.test(plate);
        if(!validate) throw new Error('Invalid Plate!');
        return this.plate;
    }


}