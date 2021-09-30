import CreateVehicle from "../domain/usecases/create.vehicle";
import GetAllVehicles from "../domain/usecases/get.all.vehicles";
import VehicleMemoryRepository from "../infra/vehicle.memory.repository";
import VehicleRepository from "../domain/repositories/vehicle.repository";
import GetVehicle from "../domain/usecases/get.vehicle";
import RemoveVehicle from "../domain/usecases/remove.vehicle";
import VehicleMapper from "../presentation/mappers/vehicle.mapper";
import { VehicleDtoInput } from "../domain/dto/vehicle.dto";
import { CategoryType } from "../domain/category";
import Plate from "../domain/plate";
import NoContent from "../presentation/exceptions/no.content";

let vehicle: VehicleDtoInput;
let repository: VehicleRepository;
let mapper: VehicleMapper

beforeAll(() => {
    vehicle = {marca: 'Chevrolet', modelo: 'Celta LT', ano: 2012, cor: 'Branco', valor: 25000, id_categoria: CategoryType.Car }
    repository = new VehicleMemoryRepository();
    mapper = new VehicleMapper()
})

describe('Integration Vehicle Test', () => {
    test('should be create a vehicle', async () => {
        const create = await new CreateVehicle({ repository: 
        repository }).execute(vehicle);
        expect(create.marca).toBe('Chevrolet')
    })
    test('should be find vehicle', async () => {
        const create = await new CreateVehicle({ repository: repository }).execute(vehicle);
        const findCar = await new GetVehicle({ repository: repository }).execute(Plate.fromString(create.placa))
        expect(findCar.ano).toBe(2012)
    })
    test('should be get all vehicles', async () => {
        const findAll = await new GetAllVehicles({repository: repository}).execute();
        expect(findAll.length).toBe(2)
    })
    test('should be remove a vehicle', async () => {
        const create = await new CreateVehicle({ repository: repository }).execute(vehicle);
        await new RemoveVehicle({repository: repository}).execute(Plate.fromString(create.placa))
        await new GetVehicle({ repository: repository }).execute(Plate.fromString(create.placa)).catch(error => {
            expect(error).toBeInstanceOf(NoContent)
        })
    })
})