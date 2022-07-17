async function convertToMorseCode() {
    var inputField = document.getElementById("value").value;
    const response = await fetch("static/code/morseToText.json");
    const morseToTextJson = await response.json();
    console.log(morseToTextJson);    
    
    let text = inputField;
    let letter = "";
    let code = "";
    for (let i = 0; i < text.length; i++) {
        letter = text[i].toLowerCase();
        code += morseToTextJson[letter] + " ";
    }

    document.getElementById("output").innerHTML = code;
    
}