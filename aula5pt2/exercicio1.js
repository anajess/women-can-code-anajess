const valoresNum =[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function criaPares(valoresNum){
for(let item = 0; item < valoresNum.length; item++) {
    if (item % 2 == 0){
        console.log(valoresNum[item]);
    }
    }
}
console.log(criaPares(valoresNum));
