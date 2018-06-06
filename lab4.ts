
const arr1: [string, number] = ['', 5];
console.log(typeof arr1);//object

type User={name: string, age: number, jobs: string[], getCurrentJobs: ()=> string[], logName: ()=> void};
let user1: User = {
    name: 'Nare',
    age: 16,
    jobs: ['html', 'css', 'js', 'angular'],
    getCurrentJobs(): string[] {
        return this.jobs[this.jobs.length-1]
    },
    logName(): void{//void-i jamanak vochiban chi veradardznum
        console.log(this.name);
       // return 1;//error
    },
};

let user2: User = {
    name: 'Anna',
    age: 21,
    jobs: ['html', 'css'],
    getCurrentJobs(): string[] {
        return this.jobs[this.jobs.length-1]
    },
    logName(): void{
        console.log(this.name);
    },
};



