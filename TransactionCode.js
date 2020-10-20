//list of store item prices by array destructuring
const[tumeric, kfcBread, wrathOfGodPepper, waffle, milk, soda, pasta,
    marshmallow, cashew, mayonnaise, cornFlakes, bottleWater, pork,
    beans, rice, potash, 
    oats, garlic, yoghurt, flour] = [1000, 500, 400, 600, 450, 200, 
        100, 900, 200, 150, 700, 50, 300, 170, 200, 120, 500, 100,
        250, 500];


let itemsToBePurchased = [];    //data structure containing items to be purchased
let totalCost = 0;      //initial total cost of items to be purchased
let debit = 0;


//adding items to be purchased to data structure
const button = document.querySelectorAll(".button");
button.forEach(function(eachButton){
    eachButton.addEventListener("click", function(){
        const item = String(eachButton.textContent);
        const numberOfUnits = Number(window.prompt("Please enter the number of units"));
        for(let i=0; i<numberOfUnits; i++){
            itemsToBePurchased.push(item);
        }
    });
});

//updating totalCost as soon as "OK" button is clicked
const OKButton = document.querySelector(".OK");
OKButton.addEventListener("click", function(){
    updateTotalCost(itemsToBePurchased);
    zeroCostAndItems();
});


function updateTotalCost(items){  //Updates total cost
    for(let i=0; i<items.length; i++){
        switch(items[i]){
            case "Tumeric":
                totalCost += tumeric;
                break;

            case "Milk":
                totalCost += milk;
                break;

            case "Cashew":
                totalCost += cashew;
                break;

            case "Pork":
                totalCost += pork;
                break;   
                
            case "Oats":
                totalCost += oats;
                break;

            case "KFC Bread":
                totalCost += kfcBread;
                break;
                
            case "Mayonnaise":
                totalCost += mayonnaise;
                break;

            case "Soda":
                totalCost += soda;
                break;

            case "Beans":
                totalCost += beans;
                break;

            case "Garlic":
                totalCost += garlic;
                break;

            case "Wrath Of God Pepper":
                totalCost += wrathOfGodPepper;
                break;
    
            case "Pasta":
                totalCost += pasta;
                break;
    
            case "Corn Flakes":
                totalCost += cornFlakes;
                break;
    
            case "Rice":
                totalCost += rice;
                break;    

            case "Yoghurt":
                totalCost += yoghurt;
                break;
    
            case "Waffle":
                totalCost += waffle;
                break;
        
            case "Marshmallow":
                totalCost += marshmallow;
                break;
        
            case "Bottle water":
                totalCost += bottleWater;
                break;
        
            case "Potash":
                totalCost += potash;
                break;    

            case "Flour":
                totalCost += flour;
                break;

            default:
                continue;
        }
    }
    window.alert(`Your bill is ${String(totalCost)} Naira. Please enter your account details to complete transaction`);
}

function zeroCostAndItems(){  //zeroes total cost and items to be purchased  
    debit = totalCost;
    totalCost = 0;
    itemsToBePurchased = [];
}


//Transaction Completion Form
let accountName;
let accountNumber;
const submit = document.querySelector(".submit-button");
submit.addEventListener("click", function(){
    const input = document.querySelectorAll(".input");
    for(let i=0; i<input.length; i++){
        if(isNaN(parseInt(input[i].value))){  //checks if input is user's account name or account number
            accountName = String(input[i].value);     //input is user's account name
        }else{                                //input is user's account number
            if(input[i].value.length == 10){
                accountNumber = input[i].value;
            }
            else{
                window.alert(`Invalid Account Number. Please re-select items and enter a correct account number`);
            }
        }
    }
    checkAffordability();
});


//REPLACEMENT FOR BANKING API
function checkAffordability(){
    if(accountNumber){
        if(accountName.length >= 28){
            window.alert(`Transaction successful! You have been debited by an amount of ${debit} Naira`);
        }else{
            window.alert(`You do not have sufficient funds`);
        }
    }
}

