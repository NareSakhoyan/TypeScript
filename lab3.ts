let myFoo1: (a: number, b: string)=>string;

function foo1 (a: number, b: string): string{
    let x: number = 10;
    x+= a;
    x+= b;
    let s: string = '11';
    return x+s;
}

myFoo1=foo1;
console.log(myFoo1(1, '5'));
