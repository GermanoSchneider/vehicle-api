import Category from "../category";

export default interface VehicleDto {
    placa: string
    marca: string
    modelo: string
    ano: number
    cor: string
    valor: number
    categoria: Category
}