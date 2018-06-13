var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var User = (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
        this.something = 'PRIVATE'; //hasaneli a menak tvyal classi mej
        this.smthelse = 'PUBLIC'; //amen tex hasaneli a
        this.smthelse1 = 'PROTECTED'; //hasaneli a menak ira jarangneri hamar
    }
    User.prototype.getName = function () {
        return this.name;
    };
    return User;
}());
var u3 = new User('anun', 54);
//console.log(u3.something);//private a chi tresnum
var u4 = new User('gagik', 24);
console.log(u4.smthelse); //public a ktesni
var Gogo = (function (_super) {
    __extends(Gogo, _super);
    function Gogo(name, age, job) {
        _super.call(this, name, age);
        this.job = job;
    }
    Gogo.prototype.getJob = function () {
        return this.job;
    };
    return Gogo;
}(User));
var u1 = new Gogo('hayk', 21, false);
////////////////////////////////////////////////////////////////////////////
var Car = (function () {
    function Car() {
        this.year = 1991;
    }
    return Car;
}());
var Mercedes = (function (_super) {
    __extends(Mercedes, _super);
    function Mercedes() {
        _super.apply(this, arguments);
    }
    Mercedes.prototype.logInfo = function (info) {
        console.log(info);
    };
    return Mercedes;
}(Car));
var m1 = new Mercedes();
m1.logInfo('hello');
//# sourceMappingURL=lab7.js.map