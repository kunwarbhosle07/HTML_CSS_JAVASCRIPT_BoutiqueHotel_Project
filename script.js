function calculatePrice(){
let cartCount = 0;
let latestTotal = 0;

let checkin = new Date(document.getElementById("checkin").value);
let checkout = new Date(document.getElementById("checkout").value);

let nights = (checkout - checkin) / (1000*60*60*24);

let basePrice = 2500;
let total = nights * basePrice;

let petFee = parseInt(document.getElementById("pets").value);

total += petFee;

document.getElementById("priceResult").innerText =
"Total Price:" + total +" Rs";


if(nights <= 2){
let discountTotal;
discountTotal=total-((15*total)/100);

document.getElementById("priceResult").innerText=
"15% DISCOUNT APPLIED!"+
" .....Your New Price is: "+discountTotal+" Rs";

}
latestTotal = total;
}
function cart(){
    cartCount++;
    document.getElementById("items").innerText=
    "YOUR CART: "+cartCount+" ITEMS";
    document.getElementById("bill").innerText=
    "Total: "+latestTotal+" Rs";
}


