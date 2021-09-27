import Car from "./car"
import CreateVehicle from "./create.vehicle";
import GetAllVehicles from "./get.all.vehicles";
import GetVehicle from "./get.vehicle";
import RemoveVehicle from "./remove.vehicle";
import Vehicle from "./vehicle";
import VehicleMemoryRepository from "./vehicle.memory.repository";
import VehicleRepository from "./vehicle.repository";

let vehicle: Vehicle;
let repository: VehicleRepository;

beforeAll(() => {
    vehicle = new Car({data: { brand: 'Chevrolet', model: 'Celta LT', year: 2012, color: 'Branco', price: 25000 }});
    repository = new VehicleMemoryRepository();
})

describe('Integration Car Test', () => {
    test('should be create a car', async () => {
        const create = await new CreateVehicle({ repository: repository }).execute(vehicle.toDTO());
        expect(create.marca).toBe('Chevrolet')
    })
    test('should be find car', async () => {
        const findCar = await new GetVehicle({ repository: repository }).execute(vehicle.toDTO())
        expect(findCar.ano).toBe(2012)
    })
    test('should be get all cars', async () => {
        const getAll = await new GetAllVehicles({ repository: repository }).execute()
        expect(getAll.length).toBe(1)
    })
    test('should be remove car', async () => {
        await new RemoveVehicle({ repository: repository }).execute(vehicle.toDTO())
        const cars = await new GetAllVehicles({ repository: repository }).execute();
        expect(cars.length).toBe(0)
    })
})