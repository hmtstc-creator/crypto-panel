let balance = 1000;

function log(text){
    let div = document.getElementById("logs");
    div.innerHTML = text + "<br>" + div.innerHTML;
}

function buy(){
    let symbol = document.getElementById("symbol").value;
    let amount = document.getElementById("amount").value;

    log("BUY " + symbol + " " + amount);
}

function sell(){
    let symbol = document.getElementById("symbol").value;
    let amount = document.getElementById("amount").value;

    log("SELL " + symbol + " " + amount);
}