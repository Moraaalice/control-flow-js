let arrStrings = ["nakuru","nairobi","nyandarua"];
function arrString(arrStrings){
    for(let i=0;i<arrStrings.length;i++){
console.log(arrStrings[i]);
    }
}
arrString(arrStrings);

//Wri``1te a function that takes in the following array and use a while loop to iterate
//and break when the item is equal to the fourth index
//let arrNum = [1,2,3,4,5,6,7,8,9];
let arrNum = [1,2,3,4,5,6,7,8,9];
function arrNums(arrNum){
    let n = 0;
    while(n<arrNums.length){
        if(n===4){
            break;
        }
        console.log(n);
        n++;
    }
}
  
//write a function that accepts an array of numbers and uses the forEach() method to console.log each number multiplied by 2.
let arrNumb = [2,56,78,89,53,45,];
function arrMultiplication(element){
    console.log(element*2);
}
arrNumb.forEach(arrMultiplication);

//Write a function that takes in an array of numbers and consoles the first four 
// items multiplied by 8 and the last two added by 5. Console the array with the new values
let arr = [2,4,56,89,78,34];
function anyNum(arr){
    emptyArr=[];
    for(let e=0;e<arr.length;e++){
        if(e<4){
            emptyArr.push(arr[e]*8);
        }else if(e>=arr.length-2){
            emptyArr.push(arr[e]+5);
        }
        console.log(emptyArr);
    }
}
anyNum(arr);
//Write a function that takes in a an array of strings and use a continue
//statement when the item is at the second index
let fruits = ["apple","plum","banana","strawberries","kiwi"];
function arrFruits(){
    for(f=0;f<fruits.length;f++){
        if(f===2){
            continue;
        }
        console.log({"continue":f});
    }
    }
  