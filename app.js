//get elements by id//
let inputAmount=document.getElementById("input-amount")
let addAmount=document.getElementById("enter-amount")
let tAmount=document.getElementById("t_amount");
let expenseCost=document.getElementById("expense-cost")
let balanceCost=document.getElementById("balance-cost")
let productTitle=document.getElementById("p_title")
let productAmount= document.getElementById("p_amount")
let addExpenseBtn= document.getElementById("add_expense")
let expenseItems = document.getElementById("expense-items")
let inputDate=document.getElementById("date-value")
let A=document.getElementById("A");
let Date=document.getElementById("D");
let P=document.getElementById("P")


let expenses=0

addAmount.addEventListener("click",()=>{
    if(inputAmount.value!==""){
        tAmount.textContent=inputAmount.value;
        balanceCost.textContent=inputAmount.value;
        inputAmount.value="";
    }
    else{
        alert("budget cannot be null")
    }
})






// Add event listener to the Add Expense button
addExpenseBtn.addEventListener("click", function() {
    // Get the values from the input fields

        
        if(productTitle.value !=="" || productAmount.value !=="" || inputDate.value !==""){

            let expense = productTitle.value;
            let amount = parseInt(productAmount.value);
            let date= inputDate.value;
    
            
          
            // Create a new tags
            let listItemPara = document.createElement("h6");
            let listItemAmount=document.createElement("h6")
            let listItemDate=document.createElement("h6")
            listItemPara.textContent=`${expense}`
            listItemAmount.textContent=`${amount}`
            listItemDate.textContent=`${date}`
    
            listItemPara.classList.add("margin");
            listItemAmount.classList.add("margin");
            listItemDate.classList.add("margin");
            

            P.append(listItemPara)
            A.append(listItemAmount)
            Date.append(listItemDate)
    
            
    
            expenses +=amount;
            expenseCost.textContent=expenses;
    
            let remainingBudget= tAmount.textContent - expenses;
            balanceCost.textContent=remainingBudget;

          
        }

        else{
               alert("Please fill all the details. :(");
        }
    

   
   
    
  
    // Clear the input fields
    productTitle.value = "";
    productAmount.value = "";
    inputDate.value="";
  });

    