/* https://www.hackerrank.com/challenges/bon-appetit/ */

/*

Two friends Anna and Brian, are deciding how to split the bill at a dinner. Each will only pay for the items they consume. Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.

For example, assume the bill has the following prices: bill = [2, 4, 6]. Anna declines to eat item k = bill[2] which costs 6. If Brian calculates the bill correctly, Anna will pay (2 + 4)/2 = 3. If he includes the cost of bill[2], he will calculate (2 + 4 + 6) / 2 = 6. In the second case, he should refund 3 to Anna.

*/

/* 

  1. Retirar o elemento com o index k da array bill;
  2. Somar todos os elementos da array bill depois que o item tiver sido retirado;
  3. Comparar o resultado da soma com o valor de b;
  4. Se a soma for maior, retornar a diferença entre b e a soma. Se não, retornar 'Bon Appetit'.

*/

const bill = [3, 10, 2, 9];
const k = 1; // index of the element Anna declines to eat
const b = 12; // how much Brian charged Anna

// const bill = [3, 10, 2, 9]
// const k = 1;
// const b = 7;

console.time();
function bonAppetit(bill, k, b) {
  const annaShouldPay =
    bill.filter((_, index) => index !== k).reduce((acc, cur) => acc + cur, 0) /
    2;

  return annaShouldPay === b ? 'Bon Appetit' : b - annaShouldPay;
}
console.timeEnd();

console.log(bonAppetit(bill, k, b));
