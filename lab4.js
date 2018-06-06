var arr1 = ['', 5];
console.log(typeof arr1); //object
var user1 = {
    name: 'Nare',
    age: 16,
    jobs: ['html', 'css', 'js', 'angular'],
    getCurrentJobs: function () {
        return this.jobs[this.jobs.length - 1];
    },
    logName: function () {
        console.log(this.name);
        // return 1;//error
    }
};
var user2 = {
    name: 'Anna',
    age: 21,
    jobs: ['html', 'css'],
    getCurrentJobs: function () {
        return this.jobs[this.jobs.length - 1];
    },
    logName: function () {
        console.log(this.name);
    }
};
