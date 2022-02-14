function updateCaseNumbar(product,price, isIn ){
    const inputVaule= document.getElementById(product + '-numbar');
    let input = inputVaule.value;
    if(isIn== true){
        input= parseInt(input)+1;
    } else if(input > 0){
        input= parseInt(input)-1;
    }
    inputVaule.value=input;

    const upPrice = document.getElementById(product +'-price');
    upPrice.innerText=input*price;

    calculationTotal()
   
};
function getInputValue(product){
    const phoneNumbar= document.getElementById(product + '-numbar');
    const phoneNumbarPar=parseInt(phoneNumbar.value);
    return phoneNumbarPar;
}
function calculationTotal(){
const phoneTotal = getInputValue('phone') * 756;
const caseTotal = getInputValue('case') * 59;
const subtotal =phoneTotal+caseTotal;
const text= subtotal/100*7.5;
const total =text+subtotal;
 document.getElementById('subtotal').innerText=subtotal;
 document.getElementById('tex').innerText=text;
 document.getElementById('total').innerText=total;
}

document.getElementById('phone-plus').addEventListener('click',function(){
    updateCaseNumbar('phone',765, true)
})
document.getElementById('phone-minus').addEventListener('click',function(){
    updateCaseNumbar('phone',765,false)
});
document.getElementById('case-plus').addEventListener('click',function(){
    updateCaseNumbar('case',65,true)
});
document.getElementById('case-minus').addEventListener('click',function(){
    updateCaseNumbar('case',65,false)
});


