import CreateVehicle from "./create.vehicle";
import GetAllVehicles from "./get.all.vehicles";
import GetVehicle from "./get.vehicle";
import Mapper from "./mapper";
import RemoveVehicle from "./remove.vehicle";
import Vehicle from "./vehicle";
import VehicleMemoryRepository from "./vehicle.memory.repository";
import VehicleRepository from "./vehicle.repository";

let vehicle: Vehicle;
let repository: VehicleRepository;

beforeAll(() => {
    vehicle = new Vehicle({data: { brand: 'Chevrolet', model: 'Celta LT', year: 2012, color: 'Branco', price: 25000 }});
    repository = new VehicleMemoryRepository();
})

describe('Integration Car Test', () => {
    test('should be create a car', async () => {
        const create = await new CreateVehicle({ repository: repository }).execute(Mapper.toDTO(vehicle));
        expect(create.marca).toBe('Chevrolet')
    })
    test('should be find car', async () => {
        const findCar = await new GetVehicle({ repository: repository }).execute(Mapper.toDTO(vehicle))
        expect(findCar.ano).toBe(2012)
    })
    test('should be get all cars', async () => {
        const getAll = await new GetAllVehicles({ repository: repository }).execute()
        expect(getAll.length).toBe(1)
    })
    test('should be remove car', async () => {
        await new RemoveVehicle({ repository: repository }).execute(Mapper.toDTO(vehicle))
        const cars = await new GetAllVehicles({ repository: repository }).execute();
        expect(cars.length).toBe(0)
    })
})