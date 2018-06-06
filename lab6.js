var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Human = (function () {
    function Human(color, mij, git, amusin, name, age) {
        this.color = color;
        this.mij = mij;
        this.git = git;
        this.amusin = amusin;
        this.name = name;
        this.age = age;
    }
    Human.prototype.getName = function () {
        return this.name;
    };
    Human.prototype.getAge = function () {
        return this.age;
    };
    Human.prototype.getAchkeriGuyny = function () {
        return this.color;
    };
    Human.prototype.getMijnKrt = function () {
        return this.mij;
    };
    Human.prototype.getGitAstch = function () {
        return this.git;
    };
    Human.prototype.getAmusin = function () {
        return this.amusin;
    };
    return Human;
}());
var Doctor = (function (_super) {
    __extends(Doctor, _super);
    function Doctor(color, mij, git, amusin, name, age, prof) {
        _super.call(this, color, mij, git, amusin, name, age); //dimum enq
        this.prof = prof;
    }
    Doctor.prototype.getProf = function () {
        return this.prof;
    };
    return Doctor;
}(Human));
var d1 = new Doctor('red', true, false, true, 'Tigran', 49, 'atamBuj');
console.log(d1.getAchkeriGuyny());
/////////////////////////////////////////////////////////////////////////////////////
var Car = (function () {
    // private model: string;
    // private pubYear: number;
    function Car(model, pubYear) {
        this.model = model;
        this.pubYear = pubYear;
        // this.model = a;
        // this.pubYear = b;
    }
    Car.prototype.getPubYear = function () {
        return this.pubYear;
    };
    Car.prototype.getModel = function () {
        return this.model;
    };
    return Car;
}());
var bmw = (function (_super) {
    __extends(bmw, _super);
    function bmw(model, year, info) {
        _super.call(this, model, year);
        this.info = info;
    }
    bmw.prototype.getInfo = function () {
        return this.info;
    };
    return bmw;
}(Car));
var car1 = new bmw('x4', 2012, 'gjutyuuun');
console.log(car1.getInfo());
//# sourceMappingURL=lab6.js.map