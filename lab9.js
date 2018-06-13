var Car = /** @class */ (function () {
    function Car(color, model, pubYear, lux) {
        this.color = color;
        this.model = model;
        this.pubYear = pubYear;
        this.lux = lux;
    }
    Car.prototype.getColor = function () {
        return "Car's Color is " + this.color;
    };
    Car.prototype.getModel = function () {
        return "Car's Model: " + this.model;
    };
    Car.prototype.getPubYear = function () {
        return "Car's pubYear: " + this.pubYear;
    };
    /*
    logInfo(info: string): void{
        console.log(`es loginfo funkcian a ${info}`);
    }
    */
    Car.prototype.carInfo = function () {
        this.getColor();
        this.getModel();
        this.getPubYear();
        //this.logInfo('asf');
    };
    return Car;
}());
var c1 = new Car('red', 'Lexux NX300H', 2014, 'ha');
// console.log(c1.getColor());
// console.log(c1.getModel());
console.log(c1.carInfo());
