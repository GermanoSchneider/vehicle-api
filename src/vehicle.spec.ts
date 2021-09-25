import Car from "./car";
import Vehicle from "./vehicle";

let vehicle: Vehicle;

beforeAll(() => {
    vehicle = new Car({brand: 'Audi', model: 'A3', year: 2021, color: 'red', price: 60000 });
})

describe('Unit Test Vehicle', () => {
    test('should be create a vehicle', () => {
        expect(vehicle).toBeInstanceOf(Vehicle);
    })
    test('should be have year greater than or equal 2000', () => {
        vehicle.year = 2000;
        expect(vehicle.year).toBeGreaterThanOrEqual(2000);
    })
})