import Car from "./car";
import VehicleDto from "./vehicle.dto";
import VehicleRepository from "./vehicle.repository";

export default class CreateCar {

    repository: VehicleRepository;

    constructor({ repository }: { repository: VehicleRepository }) {
        this.repository = repository;
    }

    async execute(dto: VehicleDto): Promise<VehicleDto> {
        const car = Car.fromDTO(dto);
        if(await this.repository.exists(car)) throw new Error(`${car.model} already exist!`)
        const create = await this.repository.create(car);
        return create.toDTO();  
    }

}







