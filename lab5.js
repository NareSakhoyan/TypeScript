//classy ayn mijavayrn e vortex nkaragrvum e objecty
var User = (function () {
    function User(name, age, isAdmin) {
        this.name = name;
        this.age = age;
        this.isAdmin = isAdmin;
    }
    //methods
    User.prototype.getName = function () {
        return this.name;
    };
    User.prototype.getAge = function () {
        return this.age;
    };
    User.prototype.getIsAdmin = function () {
        return this.isAdmin;
    };
    return User;
}());
var user1 = new User('Nare', 16);
console.log(user1.getName());
//////////////////////////////////////////////////////////////////////////////////
var Calc = (function () {
    function Calc(a, b) {
        this.a = a;
        this.b = b;
    }
    Calc.prototype.plus = function () {
        return this.a + this.b;
    };
    Calc.prototype.minus = function () {
        return this.a - this.b;
    };
    Calc.prototype.mult = function () {
        return this.a * this.b;
    };
    Calc.prototype.div = function () {
        return this.a / this.b;
    };
    return Calc;
}());
var first = new Calc(20, 5);
console.log(first.plus());
console.log(first.minus());
console.log(first.mult());
console.log(first.div());
//# sourceMappingURL=lab5.js.map