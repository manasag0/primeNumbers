let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

let n = parseInt(readLine())

for (let i = 2; i<=n;i++){
    let j = 2;
    for(;j<i;j++){
        if(i%j==0){
            // console.log(j)
            break;
        }
    }
    if(j == i){
        console.log(i)
    }
}