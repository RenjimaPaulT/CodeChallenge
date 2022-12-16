
let totalamount =0;

const total1 = document.querySelector("#btn1");
let input1 = document.querySelector('#item1')
total1.addEventListener('click',displayTotal(input1.value));

const total2 = document.querySelector("#btn2");
let input2 = document.querySelector('#item2')
total1.addEventListener('click',displayTotal(input2.value));

const total3 = document.querySelector("#btn3");
let input3 = document.querySelector('#item3')
total3.addEventListener('click',displayTotal(input3.value));

function displayTotal(e)
{
 totalamount= totalamount + e;
}
let input4 =document.querySelector("#total");
input4.value = totalamount;