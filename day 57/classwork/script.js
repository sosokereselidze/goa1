//  1. while loop

let count = 5;
while (count > 0) {
  console.log(count);
  count--;
}


let sum = 0;
let i = 1;
while (i <= 5) {
  sum += i;
  i++;
}
console.log(sum);




// 2. foor loop
for (let i = 2; i <= 10; i += 2) {
    console.log(i);
}


const names = ['soso', 'dato', 'luka', 12, 12];
for (let i = 0; i < fruits.length; i++) {
  console.log(names[i]);
}




// if else

let number = prompt("შეიყვანე ასაკი:")
if (number >= 18) {
  console.log("სრულწლოვანი ხარ");
}else if (number < 18) {
  console.log("არასრულწლოვანი ხარ");
}else if (number != Number){
    console.log("შეიყვანე ასაკი: ")
}else{
    console.log("klklklkl")
}