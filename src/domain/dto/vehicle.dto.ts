export type VehicleDto = VehicleDtOOutput | VehicleDtoInput;

export interface VehicleDtoInput {
    marca: string
    modelo: string
    ano: number
    cor: string
    valor: number
    id_categoria: number
}

export interface VehicleDtOOutput {
    placa: string
    marca: string
    modelo: string
    ano: number
    cor: string
    valor: number
    categoria: string
}

