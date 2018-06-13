interface IUser{
    name: string;
    age?: number;
    logInfo(info: string): void;
}

interface IGetYear{
    getYear(): number;
}

class User implements IUser, IGetYear{
    name: string = 'hayk';
    //age: number = 19; //ete verevum haytarareluc ?-y chenq dnum sxal a talis
    
    logInfo(info: string): void{};
    
    getYear(): number{
        return 1;
    }
}