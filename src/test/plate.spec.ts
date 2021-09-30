import Plate from "../domain/plate"

describe('Unit Test Plate', () => {
    test('should be create a valid plate', () => {
        const plate = new Plate();
        expect(plate).toBeInstanceOf(Plate)
    })
})
