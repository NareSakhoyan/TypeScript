class Human{
    private color: string;
    private mij: boolean;
    private git: boolean;
    private amusin: boolean;
    private name: string;
    private age:  number;

    constructor( color: string, mij: boolean, git: boolean, amusin: boolean, name: string, age: number){
    this.color = color;
    this.mij = mij;
    this.git = git;
    this.amusin = amusin;
    this.name = name;
    this.age = age;
    }

    getName():string{
        return this.name;
    }
    getAge():number{
        return this.age;
    }
    getAchkeriGuyny():string{
        return this.color;
    }
    getMijnKrt():boolean{
        return this.mij;
    }
    getGitAstch():boolean{
        return this.git;
    }
    getAmusin():boolean{
        return this.amusin;
    }

}

class Doctor extends Human{

    private prof: string;

    constructor(color: string, mij: boolean, git: boolean, amusin: boolean, name: string, age: number, prof: string){
        super(color, mij, git, amusin, name, age);//dimum enq
        this.prof = prof;
    }

    getProf(): string{
        return this.prof;
    }
}

let d1 = new Doctor('red', true, false, true, 'Tigran', 49, 'atamBuj');

console.log(d1.getAchkeriGuyny());

/////////////////////////////////////////////////////////////////////////////////////

class Car{
    // private model: string;
    // private pubYear: number;
    
    constructor(private model:string, private pubYear:number){
        // this.model = a;
        // this.pubYear = b;
    }
    
    getPubYear(): number{
        return this.pubYear
    }
    getModel(): string{
        return this.model
    }
}
 class bmw extends Car{
     constructor(model: string, year: number, private info: string){
        super(model, year);
     }
     getInfo(){
        return this.info
      }
 }

let car1 = new bmw('x4', 2012, 'gjutyuuun');

console.log(car1.getInfo());
