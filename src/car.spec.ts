import Car from "./car"
import CreateCar from "./create.car";
import GetCar from "./get.car";
import VehicleMemoryRepository from "./vehicle.memory.repository";
import VehicleRepository from "./vehicle.repository";

let car: Car;
let repository: VehicleRepository;

beforeAll(() => {
    car = new Car({ brand: 'Chevrolet', model: 'Celta LT', year: 2012, color: 'Branco', price: 25000 });
    repository = new VehicleMemoryRepository();
})

describe('Integration Car Test', () => {
    test('should be create a car', async () => {
        const create = await new CreateCar({ repository: repository }).execute(car.toDTO());
        expect(create.marca).toBe('Chevrolet')
    })
    test('should be find car', async () => {
        const findCar = await new GetCar({ repository: repository }).execute(car.toDTO())
        expect(findCar.ano).toBe(2012)
    })
    // test('should be remove car', async () => {
    //     await new RemoveCar({ repository: repository }).execute(car.toDTO())
    //     expect(await new GetCar({ repository: repository }).execute(car.toDTO())).toThrow('Unregistered Vehicle!')
    // })
})