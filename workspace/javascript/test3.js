'use strict'

const jobs =['👩‍⚕️','👮‍♂️','👨‍🎓','👨‍🚀','🧟‍♂️'];
console.log(jobs);

//for of

for(let value of jobs){
    console.log(value);
}

//for each
jobs.forEach(function(job,index,array){
    console.log(`forEach: ${job},${index},${array}`)
})

jobs.pop();
console.log(jobs);

jobs.shift();
console.log(jobs);

jobs.splice(2,0,'⬜');
console.log(jobs);