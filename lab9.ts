
interface ICar{
    model: string;
    pubYear: number;
    lux?: string;

    //logInfo(info: string): void;
}

class Car implements ICar{
    constructor(private color: string, public model: string, public pubYear: number, public lux: string){
        
    }
    
    getColor(): string{
        return `Car\'s Color is ${this.color}`;
    }
    getModel(): string{
        return `Car\'s Model: ${this.model}`;
    }
    getPubYear(): string{
        return `Car\'s pubYear: ${this.pubYear}`;
    }
    /*
    logInfo(info: string): void{
        console.log(`es loginfo funkcian a ${info}`);
    }
    */
    carInfo() {
        this.getColor();
        this.getModel();
        this.getPubYear();
        //this.logInfo('asf');
    }

}

let c1 = new Car('red', 'Lexux NX300H', 2014, 'ha');
// console.log(c1.getColor());
// console.log(c1.getModel());
console.log(c1.carInfo());