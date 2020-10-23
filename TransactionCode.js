'use strict';

//list of store item prices by array destructuring
const[tumeric, kfcBread, wrathOfGodPepper, waffle, milk, soda, pasta,
    marshmallow, cashew, mayonnaise, cornFlakes, bottleWater, pork,
    beans, rice, potash, 
    oats, garlic, yoghurt, flour] = [1000, 500, 400, 600, 450, 200, 
        100, 900, 200, 150, 700, 50, 300, 170, 200, 120, 500, 100,
        250, 500];


let itemsToBePurchased = []; //data structure containing items to be purchased
let totalCost = 0; //initial total cost of items to be purchased
let debit = 0;


//adding items to be purchased to data structure
const promptSection = document.querySelector(".prompt");
const enterButton = document.querySelector(".enter");
const inputPrompt = document.getElementById("number-of-units");
let item;
const button = document.querySelectorAll(".button");
button.forEach(function(eachButton){
    eachButton.addEventListener("click", function(){
        item = String(eachButton.textContent);
        promptSection.style.display = "block";
        inputPrompt.focus();
        enterButton.addEventListener("click", function(){
            const noOfUnits = Number(inputPrompt.value);
            for(let i=0; i<noOfUnits; i++){
                itemsToBePurchased.push(item);
            }
            promptSection.style.display = "none";
            inputPrompt.value = null;
            eachButton.focus();
        });
    });
});

//updating totalCost as soon as "OK" button is clicked
const OKButton = document.querySelector(".OK");
OKButton.addEventListener("click", function(){
    updateTotalCost(itemsToBePurchased);
    zeroCostAndItems();
});

//for the bill notice section
const billNotice = document.querySelector(".bill-notice");
const purchaseDetails = document.querySelector(".purchase-details");


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
    billNotice.style.display = "block";
    purchaseDetails.textContent = `Your bill is ${String(totalCost)} Naira. Please enter your account details to complete transaction`;
    proceed.focus();
}
const accountNameInput = document.getElementById("account-name");
const proceed = document.querySelector(".proceed");
proceed.addEventListener("click", function(){
    billNotice.style.display = "none";
    accountNameInput.focus();
});

function zeroCostAndItems(){  //zeroes total cost and items to be purchased  
    debit = totalCost;
    totalCost = 0;
    itemsToBePurchased = [];
}


//Transaction Completion Form
let accountName;
let accountNumber;
const input = document.querySelectorAll(".input");
const submit = document.querySelector(".submit-button");
const invalid = document.querySelector(".invalid");
const invalidParagraph = document.querySelector(".invalid-paragraph");
submit.addEventListener("click", function(event){
    event.preventDefault();
    for(let i=0; i<input.length; i++){
        if(isNaN(parseInt(input[i].value))){  //checks if input is user's account name or account number
            accountName = String(input[i].value);  //input is user's account name
        }else{  //input is user's account number
            if(input[i].value.length == 10){
                accountNumber = input[i].value;
            }
            else{
                invalid.style.display = "block";
                invalidParagraph.textContent = "INVALID ACCOUNT NUMBER";
                incorrect.focus();
            }
        }
    }
    checkAffordability();
});


//REPLACEMENT FOR BANKING API;
const successful = document.querySelector(".successful");
const successfulParagraph = document.querySelector(".successful-paragraph");
function checkAffordability(){
    if(accountNumber){
        if(accountName.length >= 28){
            successful.style.display = "block";
            successfulParagraph.textContent = `Transaction successful! You have been debited by an amount of ${debit} Naira`;
            end.focus();
        }else{
            successful.style.display = "block";
            successfulParagraph.textContent = `Sorry, you do not have sufficient funds to proceed with this transaction.`;
            end.focus();
        }
    }
}

//INVALID ACCOUNT NUMBER
const incorrect = document.querySelector(".incorrect");
incorrect.addEventListener("click", function(){
    invalid.style.display = "none";
    window.location.reload();
});

//END TRANSACTION
const end = document.querySelector(".end");
end.addEventListener("click", function(){
    successful.style.display = "none";
    window.location.reload();
});

