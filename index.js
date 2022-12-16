
let totalamount = 0;

const total1 = document.getElementById("btn1");
const input1 = document.getElementById('item1')
console.log(input1.value)
let a = input1.value ;
//total1.addEventListener('click',displayTotal(input1.value));
total1.addEventListener("click", function() {
    displayTotal(a);
  });
  

const total2 = document.querySelector("#btn2");
const input2 = document.querySelector('#item2')
total1.addEventListener('click',displayTotal(input2.value));

const total3 = document.querySelector("#btn3");
let input3 = document.querySelector('#item3')
total3.addEventListener('click',displayTotal(input3.value));

function displayTotal(e)
{
 totalamount = totalamount + e;
}
let input4 =document.querySelector("#total");
input4.value = totalamount;