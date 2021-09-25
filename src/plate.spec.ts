import Plate from "./plate"

describe('Unit Test Plate', () => {
    test('should be create a valid plate', () => {
        const plate = new Plate('XXX0X00')
        expect(plate).toBeInstanceOf(Plate)
    })
    
    test('should be create a valid plate with toLowerCase', () => {
        const plate = new Plate('xxX0x00')
        expect(plate).toBeInstanceOf(Plate)
    })
})
