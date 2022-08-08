function alerts(){
    alert('Thanks for buying!')
}

//first page


function alertsBuy(){
if(document.getElementById('email').value.length==0||document.getElementById('password').value.length==0){
    alert('Please fill the details!');
    return;
}
alert("Your verifying succeeded!");
open('login.html')
}

function alertRegFunc()
{
    if(document.getElementById('firstName').value.length==0||document.getElementById('lastName').value.length==0||document.getElementById('Age').value.length==0||document.getElementById('Location').value.length==0||document.getElementById('RegEmail').value.length==0||document.getElementById('RegPassword').value.length==0){
        alert('Fill all the details!');
        return;
    }
    else{
    alert('Thanks for joining us!')
    open('fruits.html')
    }
}

function kiloAmount(){
    var kilonum=document.getElementById('input-kilo').value
    var type=document.getElementsByClassName('selection')[0]
    var selectedValue = type.options[type.selectedIndex].value;
    var sumTotal=0;
    if(kilonum>0){
    if(selectedValue=="Potato")
    {
        sumTotal=3.9*kilonum;
    }
    else if(selectedValue=="Tomato")
    {
        sumTotal=1.5*kilonum;
    }
    else if(selectedValue=="Carrot")
    {
        sumTotal=3.7*kilonum;
    }
    else if(selectedValue=="Brocoli")
    {
        sumTotal=5.1*kilonum;
    }
    else if(selectedValue=="Mashrum")
    {
        sumTotal=7.4*kilonum;
    }
    else if(selectedValue=="Cocumber")
    {
        sumTotal=1.4*kilonum;
    }
    else if(selectedValue=="Pumpkin")
    {
        sumTotal=6.5*kilonum;
    }
    else if(selectedValue=="Garlic")
    {
        sumTotal=7.9*kilonum;
    }
    else if(selectedValue=="Onion")
    {
        sumTotal=8.8*kilonum;
    }
    else if(selectedValue=="Apple")
    {
        sumTotal=3.9*kilonum;
    }
    else if(selectedValue=="Peach")
    {
        sumTotal=4.5*kilonum;
    }
    else if(selectedValue=="Banana")
    {
        sumTotal=3.9*kilonum;
    }
    else if(selectedValue=="Grapes")
    {
        sumTotal=7.1*kilonum;
    }
    else if(selectedValue=="Pineapple")
    {
        sumTotal=11.4*kilonum;
    }
    else if(selectedValue=="Kiwi")
    {
        sumTotal=4.4*kilonum;
    }
    else if(selectedValue=="Cherry")
    {
        sumTotal=9.5*kilonum;
    }
    else if(selectedValue=="Melon")
    {
        sumTotal=2.8*kilonum;
    }
    else{
        sumTotal=2.9*kilonum;
    }
    alert('Total price='+totalSum(sumTotal)+'$.\n Press: "move to payment" in order to complete your order.'); totalSum(sumTotal);
    }
}

function totalSum(val){
    var TwoPointsTotalNum=val.toFixed(2);
    return TwoPointsTotalNum;
}
function goodbyeFunc(){
    if(document.getElementById('card-num-input').value.length==0||document.getElementById('expiry-date-input').value.length==0||document.getElementById('secret-number-input').value.length==0||document.getElementById('card-name-input').value.length==0){
        alert('Pleae fill all the details!')
        return;
    }
    else{
    alert('Thanks for buying. Your order has been confirmed, and will arrive in the next few hours!')
    window.location.reload();
    }
}

function cash(){
    if(document.getElementById('card-num-input').value.length==0||document.getElementById('expiry-date-input').value.length==0||document.getElementById('secret-number-input').value.length==0||document.getElementById('card-name-input').value.length==0){
        alert('Pleae fill all the details!')
        return;
    }
    else{
    alert('Thanks for buying. Your order will arrive in the next few hours, please pay the delivery person.');
    window.location.reload();
    }
}