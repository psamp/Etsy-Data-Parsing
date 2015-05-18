// // GET LIST OF PRICES

// var answer1 = document.querySelector('#answer1');

// answer1.innerText = '';

// items.forEach( function (item) {
//   answer1.appendChild(document.createTextNode(item.price + '\n'));
// });


//QUESTION ONE

//get all prices
var allPrices = items.map( function (item) {

  return item.price;

});

//get the sum
var sum = allPrices.reduce( function (previous, current) {
  
  return previous + current;

});

//average
var average = sum / allPrices.length;

// answer
var answer = average.toFixed(2);

//drop answer in DOM Node
document.querySelector('#answer1').textContent = "The average price is $" + answer;

// log in console
console.log("The average price is $" + answer);

//END QUESTION ONE


// QUESTION TWO

// get all three items
var newItems = items.filter( function(item) {
  
  return (item.price > 14 && item.price < 18);

});

//get their titles
var newPrices = newItems.map( function(prices) {
  
  return prices.title + '\n';

});

// get answer
var answer2 = newPrices;

// drop in dom node
document.querySelector('#answer2').textContent = answer2 + '\n';

console.log("The items that cost $14-18 are " + answer2);

// END QUESTION TWO


//QUESTION THREE

//display all items' names, prices and currency codes
var itemName = items.map( function(name){

  return (name.title + " | " + name.price + " " + name.currency_code + '\n');

});

// filter items by currency 
var britishPrice = items.filter( function(code) {

  if (code.currency_code === "GBP") {

    return code;

  }

});

//insert in dom node
britishPrice.forEach(function (answer) {

  document.querySelector('#answer3').textContent = answer.title + " | " + answer.price + " " + answer.currency_code;

});

// drop in console
var britishConsole = items.filter( function(cnsl) {

  if (cnsl.currency_code === "GBP") {

    console.log(cnsl.title + " | " + cnsl.price + " " + cnsl.currency_code);

  }

});

//END QUESTION THREE
