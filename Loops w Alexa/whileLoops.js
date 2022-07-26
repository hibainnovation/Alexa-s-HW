const e = require("cors");

let i= 0;//initializer
while (condition){
    
    i++;//iteration - 0,1 use this one mostly
    ++i;//1
}

let j=0;

while (j<=5){
    console.log(j);
    j++;
    console.log("Current val:"+j);

}

//fails because the condition was never true
let k= 0;//initializer

while (k>5){
    console.log(k);
    k++;
}

//syntax
for(initializer; condition; iteration){
    
}
//example for For Loops!
//initializer: let i = 0
//condition: i<=5
//iteration: i++


for (let i = 0; i <= 5; i++){
    console.log(i);
}

//array of string
let dbz = ["Goku", "Vegeta", "Mr.Popo", "Tien", "Master Roshi"];
for (let j=0;j < dbz.length; j++ ){
console.log(dbz[j]);
//console.log(dbz);
//console.log(j);
//console.log(j + ""+ dbz) string interpolation
};

//items starting w/ certain letter with a new array

//print out one specific item
let cycle 10 = []
for (let c=0; c < cycle10.length; c++)
if (cycle10[c] == "Taizon"){
    console.log(cycle10[c]);
}
};

for let b=0 ; b < cycle10.length;b++){
    if (b ===14){
        console.log(cycle10[b]);
    }
};


//infinite loop crashes computer
for(let m = 5; m < 10;m--){
    console.log(m);

};

//Loop Control

//continue - one done with integers
for (let r = 0; r< 8; r++){
    if (r==4){
        continue;// skips the value 4
    }else {
        console.log(r);
    }
};

//array of strings ignore one of the elements within the array and print it out
let veggies = ["Broccoli", "Cauliflower", "Carrots", "Beets", "Cilantro",
"Potatoes"];
for (let v = 0; v < veggies.length; v++){
    if (veggies[v] !== "Beets"){
        continue;
    } else {
        console.log(veggies[v]);
    }

};
//one done with integers
for (let x = 0; x<=10; x++);
if (x == 7) {
    break;
} else {
    console.log(x);
 }
};
