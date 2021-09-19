let count = $("#count");
let mainSection = document.getElementById("checkOut");//getting main element to add Dom tree

//getting values from local storage using json.parse
let value = JSON.parse(localStorage.getItem("Products"));

let totalPrice=0; 
//to get total price for all the items added in cart
for(let i=0; i<value.length;i++){
    totalPrice += value[i].price;
}

//displaying number count for items added in cart
if(value==""||value==null){
    count.text("0")
}
else{
    count.text(value.length);
    mainSection.innerHTML = `
    <h1>CheckOut</h1>
    <div id="checkout-wrapper">
        <div id="total-items">
            <h2>Total Items: ${value.length}</h2>   
        </div>
        <div id="total-amount" class="card">
            <h2>Total Amount</h2>
            <p>Amount: Rs ${totalPrice}</p>
            <a href="./order.html"><button id="checkout">Place Order</button></a>
        </div>
    </div>`
}

//edding onclick event to button
$("#checkout").click(function(){
    // alert("checkout clicked")
})

//displaying cards for each item added in cart.
let totalItems= document.getElementById("total-items");
for(let j=0; j<value.length; j++){
    totalItems.innerHTML+=`
    <div class="card checkout-card">
        <div class="checkout-img-div">
            <img src="${value[j].preview}" alt="">
        </div>
        <div class="checkout-text-div">
            <h3>${value[j].name}</h3>
            <p>Quantity x 1</p>
            <p>Amount: Rs ${value[j].price}</p>
        </div>
    </div>`
}


