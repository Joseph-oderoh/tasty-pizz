$("button#btn").click(function(event){
    let size = $("#size option:selected").val();
    let crust = $("#crust option:selected").val();
    let toppings = $("#toppings option:selected").val();



    $("button#btn").hide();
    
});


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
btn.addEventListener("click", (event) => {
    event.preventDefault();
    
    var totalPrice = ((getSizeCost() + getCrustCost() + getToppingsCost()) * getNumber());
    alert("Your order of " + getNumber() + " pizzas has been processed.Your total amount payable is " + totalPrice +"." )
})