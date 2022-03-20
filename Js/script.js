
 function Orders(size, crust, toppings, number, total){
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.number = number;
        this.total = total
    }




function getSizeCost() {
    var selectedSize = document.getElementById("size").value;
    return parseInt(selectedSize);
}
function getCrustCost() {
    var selectedCrust = document.getElementById("crust").value;
    return parseInt(selectedCrust);
}
function getNumber() {
    var selectedNumber = document.getElementById("number").value;
    return parseInt(selectedNumber);
}

function getToppingsCost() {
    var selectedToppings = document.getElementById("toppings").value;
    return parseInt(selectedToppings);
}
var btn = document.getElementById("btn");
btn.addEventListener("click", (e) => {
    e.preventDefault();
    
    var totalPrice = ((getSizeCost() + getCrustCost() + getToppingsCost()) * getNumber());
    alert("Your order of " + getNumber() + " pizzas has been processed.Your total amount payable is " + totalPrice +"." )



   $("#ordermade").append("Your bill is sh. " + getNumber() +  " Pizzza"  + " of size " + getSizeCost() + " crust type " + getCrustCost()  + "with topping of " + getToppingsCost() + "  suming up to ksh/=" + " " +totalPrice + ".");

   $("#deliver").click( () => {
    $(".location").slideDown(1000);
    $("#ordermade").hide();

   
    
})
$("#delivery").submit(function () {

    var name = $("input#name").val();
    var number = $("input#number").val();
    var location = $("input#location").val();

    alert("Hello " + name + ". Your order has been successfuly received and will be delivered to " +  location + " within one hour.The delivery will cost 500 Thank you for chosing the Tastypizz!.");
   
});
$("input#name").val(""); 
})



   