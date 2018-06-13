class User{
    private something: string = 'PRIVATE';//hasaneli a menak tvyal classi mej
    public smthelse: string = 'PUBLIC';//amen tex hasaneli a
    protected smthelse1: string = 'PROTECTED';//hasaneli a menak ira jarangneri hamar
    constructor(private name: string, private age: number){
    }
     getName(): string{
         return this.name;
     }
}

let u3 = new User('anun', 54);
//console.log(u3.something);//private a chi tresnum
let u4 = new User('gagik', 24);
console.log(u4.smthelse);//public a ktesni

class Gogo extends User{
    constructor(name:string, age:number, private job: boolean){
        super(name, age)
    }
    getJob(){
        return this.job
    }
 }

let u1 = new Gogo('hayk', 21, false);

////////////////////////////////////////////////////////////////////////////

abstract class Car{
    private model: string;
    private year: number = 1991;

    abstract logInfo(info: string): void;//iranc hamar chenq kara object sarqenq, es classy konkret jarangman hamar a
}
class Mercedes extends Car{
    logInfo(info: string): void{
        console.log(info)
    }
}

let m1 = new Mercedes();
m1.logInfo('hello');