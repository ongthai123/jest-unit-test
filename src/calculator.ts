export class Calculator {
    areaSquare(a: number) {
        return a * a;
    }

    perimeterSquare(a: number) {
        return a * 4;
    }

    isLeafYear(a: number) {

        if (a % 400 === 0) {
            return true
        }
        else if (a % 4 === 0 && a % 100 === 0) {
            return false
        }
        else if (a % 4 === 0) {
            return true;
        }
        else{
            return false;
        }
    }
}