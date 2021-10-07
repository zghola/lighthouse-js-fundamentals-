/*let x = 100;
while (x <= 200) {
  if (x % 3 === 0 && x % 4 === 0){
      console.log("LoopyLighthouse");
    }else if (x % 4 === 0){
      console.log("Lighthouse");
    }else if (x % 3 === 0) {
      console.log("Loopy");
    }
    else {
        console.log(x);
    }
    x = x + 1
}*/

const amounts = [61.00, 52.25, 112.99, 5.00]; 
const total = 0;
for (let amount of amounts) {
  total += amount;
}
console.log('Order total is: ', total);
