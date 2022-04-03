const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const showBtn = document.querySelector("#show-button");
const showOutputDiv = document.querySelector("#show-output");

showBtn.addEventListener("click", calculateProfitAndLoss);

function calculateProfitAndLoss() {
  let initialprice = Number(initialPrice.value);
  let stocksquantity = Number(stocksQuantity.value);
  let currentprice = Number(currentPrice.value);

  if (initialprice == "" || stocksquantity == "" || currentprice == "")
   {
    showOutputDiv.textContent = "🙏 please enter all the fields";    
    showOutputStyling(showOutputDiv, "rgb(255, 11, 11)", "rgba(255, 11, 11, 0.205)");
   } else if (initialprice < 0) 
   {
    showOutputDiv.textContent = "🙃 initial price cannot be negative";
    showOutputStyling(showOutputDiv, "rgb(255, 11, 11)", "rgba(255, 11, 11, 0.205)");

   } else if (stocksquantity < 1) 
   {
    showOutputDiv.textContent = "😄stocks quantity cannot be less than 1";
   } else if (currentprice > initialprice)
   {
      let profit = (currentprice - initialprice) * stocksquantity;
      let profitPercentage = (profit/initialprice) * 100;
      showOutputDiv.textContent = `🚀 hurrah! you have a profit of ${profit.toFixed(2)} and profit percentage is ${profitPercentage.toFixed(2)}%`;
      showOutputStyling(showOutputDiv, "rgba(0, 228, 95, 0.87)", "rgba(0, 228, 95, 0.192)");
   } else if (currentprice < initialprice) 
   {
      let loss = (initialprice - currentprice) * stocksquantity;
      let lossPercentage = (loss / initialprice) * 100;
      showOutputDiv.textContent = `👀 whoops! you have a loss of ${loss.toFixed(2)} and loss percentage is -${lossPercentage.toFixed(2)}%`;
      showOutputStyling(showOutputDiv, "rgb(255, 11, 11)", "rgba(255, 11, 11, 0.205)");

   } else 
   {
      showOutputDiv.textContent = "😌 no pain no gain, no gain no pain";
      showOutputStyling(showOutputDiv, "rgb(113, 0, 241)", "rgba(112, 0, 241, 0.15)");
   }
}


// function for different colors for different messages
function showOutputStyling(div,colorValue,bgValue){
   div.style.color = colorValue;
   div.style.backgroundColor = bgValue;
   div.style.padding = "0.7rem 3rem";
   div.style.borderRadius = "5rem";
}
