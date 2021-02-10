var silver = document.getElementById("silver-price");
var gold = document.getElementById("gold-price");
var goldInput = document.getElementById("gold-price-input");
var platinum = document.getElementById("platinum-price");

function goldPriceChanged(value) {
    if (value == 0) {
        gold.innerText = "$" + numberWithCommas(7000);
        silver.innerText = "$" + numberWithCommas(6700);
        platinum.innerText = "$" + numberWithCommas(10000);
    } else {
        gold.innerText = "$" + numberWithCommas(parseInt(value));
        silver.innerText = "$" + numberWithCommas(parseInt(value) - 300);
        platinum.innerText = "$" + numberWithCommas(parseInt(value) + 3000);
    }
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}