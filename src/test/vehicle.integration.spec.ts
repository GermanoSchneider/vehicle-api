import Car from "../domain/car";
import CreateVehicle from "../domain/usecases/create.vehicle";
import GetAllVehicles from "../domain/usecases/get.all.vehicles";
import Vehicle from "../domain/vehicle";
import VehicleMapper from "../domain/mappers/vehicle.mapper";
import VehicleMemoryRepository from "../infra/vehicle.memory.repository";
import VehicleRepository from "../domain/repositories/vehicle.repository";
import GetVehicle from "../domain/usecases/get.vehicle";
import RemoveVehicle from "../domain/usecases/remove.vehicle";

let vehicle: Vehicle;
let repository: VehicleRepository;

beforeAll(() => {
    vehicle = new Car({ brand: 'Chevrolet', model: 'Celta LT', year: 2012, color: 'Branco', price: 25000 });
    repository = new VehicleMemoryRepository();
})

describe('Integration Car Test', () => {
    test('should be create a car', async () => {
        const create = await new CreateVehicle({ repository: repository }).execute(VehicleMapper.toDTO(vehicle));
        expect(create.marca).toBe('Chevrolet')
    })
    test('should be find car', async () => {
        const findCar = await new GetVehicle({ repository: repository }).execute(vehicle.data.plate)
        expect(findCar.ano).toBe(2012)
    })
    test('should be get all cars', async () => {
        const getAll = await new GetAllVehicles({ repository: repository }).execute()
        expect(getAll.length).toBe(1)
    })
    test('should be remove car', async () => {
        await new RemoveVehicle({ repository: repository }).execute(vehicle.data.plate)
        const cars = await new GetAllVehicles({ repository: repository }).execute();
        expect(cars.length).toBe(0)
    })
})