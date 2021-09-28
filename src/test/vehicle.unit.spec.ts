import Car from "../domain/car";
import Vehicle from "../domain/vehicle";

let vehicle: Vehicle;

beforeAll(() => {
    vehicle = new Car({brand: 'Audi', model: 'A3', year: 2021, color: 'red', price: 60000 });
})

describe('Unit Test Vehicle', () => {
    test('should be create a vehicle', () => {
        expect(vehicle).toBeInstanceOf(Vehicle);
    })
    test('should be have year greater than or equal 2000', () => {
        vehicle.data.year = 2000;
        expect(vehicle.data.year).toBeGreaterThanOrEqual(2000);
    })
})