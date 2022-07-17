function generator() {
    let startNum = parseFloat(document.getElementById("num1").value);
    let endNum = parseFloat(document.getElementById("num2").value);
    finalAmount = Math.floor(Math.random() * (endNum - startNum + 1) + startNum);
    console.log(startNum);
    console.log(endNum);
    
    document.getElementById("finalResult").innerHTML = finalAmount;
    finalResult.style.display = "block";
}