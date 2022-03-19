
 function Orders(size, crust, toppings, number, total){
        this.size = size;
        this.crust = crust;
        this.toppings = toppings;
        this.number = number;
        this.total = total
    }


$("button#btn").click(function(event){
    var size = $("#size option:selected").val();
    var crust = $("#crust option:selected").val();
    var toppings = $("#toppings option:selected").val();
    var number = $("#number option:selected").val();
  
    var newOrder =  new Orders (size, crust, toppings, number, total)
    $("button#delivery").show()
    $("button.location").slideDown(1000);
   
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



//  $("#ordersmade").append('<tr><td id="size">'+ getSizeCost().size + '</td><td id="crust">' + getCrustCost().crust + '</td><td id="toppings">'+getToppingsCost.toppings + '</td><td id="number">'+getNumber().number +'</td><td id="total">'+totalPrice.total+'</td></tr>');
 
   
   $("#ordermade").append("Your bill is sh. " + getNumber() + " Pizzza  suming up to" + " " +totalPrice + ".");
   $("ul#youorder").append("<li><span class='youorder'>" + selectedSize.getSizeCost() + "</span></li>");
   
})
