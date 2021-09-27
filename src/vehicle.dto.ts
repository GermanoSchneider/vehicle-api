import Vehicle from "./vehicle"

export default class VehicleDto {
    marca: string
    modelo: string
    ano: number
    cor: string
    valor: number

    constructor(vehicle: Vehicle) {
        this.marca = vehicle.data.brand,
        this.modelo = vehicle.data.model,
        this.ano = vehicle.data.year,
        this.cor = vehicle.data.color,
        this.valor = vehicle.data.price
    }
}