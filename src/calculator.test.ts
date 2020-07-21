import { Calculator } from "./calculator"

describe('calculator', () => {
    it('area of a square', () => {
        var calculator = new Calculator();

        var area = calculator.areaSquare(10);

        expect(area).toBe(100)
    })

    it('perimeter of a square', () => {
        var calculator = new Calculator();

        var perimeter = calculator.perimeterSquare(10);

        expect(perimeter).toBe(40)
    })

    it('check leaf year retrun true', () => {
        var calculator = new Calculator();
        
        expect(calculator.isLeafYear(2000)).toBe(true)
        expect(calculator.isLeafYear(1960)).toBe(true)
        expect(calculator.isLeafYear(1200)).toBe(true)
        expect(calculator.isLeafYear(0)).toBe(true)

        expect(calculator.isLeafYear(1900)).toBe(false)
        expect(calculator.isLeafYear(2003)).toBe(false)
        expect(calculator.isLeafYear(1962)).toBe(false)
        expect(calculator.isLeafYear(1922)).toBe(false)

    })
})