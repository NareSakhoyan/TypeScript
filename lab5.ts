//classy ayn mijavayrn e vortex nkaragrvum e objecty
class User{
    name: string;
    age: number;
    isAdmin: boolean;
    constructor(name: string, age: number, isAdmin: boolean){
        this.name = name;
        this.age = age;
        this.isAdmin = isAdmin
    }
    //methods
    getName(): string{
        return this.name;
    }
    getAge(): number{
        return this.age;
    }
    getIsAdmin(): boolean{
        return this.isAdmin;
    }
}

let user1 = new User('Nare', 16);
console.log(user1.getName());

//////////////////////////////////////////////////////////////////////////////////


class Calc{
    private a:number;
    private b:number;
    constructor(a:number, b:number){
        this.a = a;
        this.b = b;
    }
    plus(): number{
        return this.a+this.b
    }
    minus(): number{
        return this.a-this.b
    }
    mult(): number{
        return this.a*this.b
    }
    div(): number{
        return this.a/this.b
    }
}

let first = new Calc(20, 5);

console.log(first.plus());
console.log(first.minus());
console.log(first.mult());
console.log(first.div());
