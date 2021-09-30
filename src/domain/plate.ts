import Random from "../core/random";
import BadRequest from "../presentation/exceptions/bad.request";

export default class Plate {

    value: string;

    constructor(value?: string) {
        this.value = value ?? this.build();
    }

    build(): string {
        const plate = this.generate;
        const validate = /^[a-zA-Z]{3}\d[a-zA-Z]{1}\d{2}$/g.test(plate);
        if (!validate) throw new BadRequest('Placa inválida!');
        return plate;
    }


    private get generate(): string {
        return [
            Random.getRandomString(),
            Random.getRandomString(),
            Random.getRandomString(),
            Random.getRandomNumberBetween(0, 9),
            Random.getRandomString(),
            Random.getRandomNumberBetween(0, 9),
            Random.getRandomNumberBetween(0, 9)
        ].join('')
    }

    static fromString(source: string) {
        return new Plate(source)
    }

}