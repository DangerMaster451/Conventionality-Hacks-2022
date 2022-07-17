const api = "https://api.exchangerate-api.com/v4/latest/USD";

var search = document.querySelector(".searchBox");
var convert = document.querySelector(".convert");
var fromCurrency = document.querySelector(".from");
var toCurrency = document.querySelector(".to");
var finalValue = document.querySelector(".finalValue");
var finalAmount = document.getElementById("finalAmount");
var resultFrom;
var resultTo;
var searchValue;

// Event when currency is changed
/*fromCurrency.addEventListener('change', (event) => {
	resultFrom = `${event.target.value}`;
});

// Event when currency is changed
toCurrency.addEventListener('change', (event) => {
	resultTo = `${event.target.value}`;
    
});

search.addEventListener('input', updateValue);

// function for updating value
function updateValue(e) {
	searchValue = e.target.value;
}

// when user clicks, it calls function getresults
swapperconvert.addEventListener("click", getResults); */

// getting results
async function getResults() {
    //fetch("static/currency/Currencies.json")
    // await fetch("static/currency/Currencies.json")
    //     .then(currency => {
    //         json = currency.json();
    //         console.log(json);
    //         return json;
    //     }).then(displayResults);
    const response = await fetch("static/currency/Currencies.json");
    const currencies = await response.json();
    console.log(currencies);
    displayResults(currencies);  
}

// show results
function displayResults(currency) {
	let fromRate = document.getElementById("sel1").value;
	let toRate = document.getElementById("sel2").value;
    let searchValue = document.getElementById("oamount").value;

    let fromValue = parseFloat(currency["rates"][toRate]);
    let toValue = parseFloat(currency["rates"][fromRate]);

    searchValue = parseFloat(searchValue);

    console.log(typeof searchValue);
    console.log(typeof fromValue);
    console.log(typeof toValue);

    var output = ((fromValue * searchValue) / toValue).toFixed(2);
    console.log(output);
    
    //console.log(`Search Value: ${searchValue}`)
    //console.log(`From Rate: ${fromRate}, From Value: ${fromValue}`);
    //console.log(`To Rate: ${toRate}, To Value: ${toValue}`);
	finalValue.innerHTML = output;
	finalAmount.style.display = "block";
}

// reset
function clearVal() {
	window.location.reload();
	document.getElementsByClassName("finalValue").innerHTML = "";


};





