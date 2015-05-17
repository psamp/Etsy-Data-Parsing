
// we used this to get a list of prices in class

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
var answer = newPrices;

// drop in DOM Node

document.querySelector('#answer2').textContent = answer + '\n';

console.log("The items that cost $14-18 are " + answer);

// END QUESTION TWO
