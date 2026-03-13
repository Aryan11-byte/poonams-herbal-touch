function trackOrder(){

let id=document.getElementById("orderId").value;

let orders=JSON.parse(localStorage.getItem("orders"))||[];

let order=orders.find(o=>o.orderId===id);

if(!order){
alert("Order not found");
return;
}

let steps=["Order Placed","Packed","Shipped","Out for Delivery","Delivered"];

let current=steps.indexOf(order.status);

for(let i=0;i<=current;i++){
document.getElementById("step"+(i+1)).classList.add("active");
}

}/* LOAD CART */

let cart = JSON.parse(localStorage.getItem("cart")) || [];


/* ADD TO CART */

function addToCart(product, price){

let item = {
name: product,
price: price
};

cart.push(item);

localStorage.setItem("cart", JSON.stringify(cart));

alert(product + " added to cart");

}


/* SHOW CART ITEMS */

document.addEventListener("DOMContentLoaded", function(){

let cartList = document.getElementById("cartItems");

if(cartList){

cart.forEach(item => {

let li = document.createElement("li");

li.textContent = item.name + " ₹" + item.price;

cartList.appendChild(li);

});

}

});


/* PLACE ORDER */

function placeOrder(){

let name=document.getElementById("name").value;

let address=document.getElementById("address").value;

let phone=document.getElementById("phone").value;

let orderId="PHT"+Math.floor(Math.random()*100000);

db.collection("orders").add({

orderId:orderId,
customerName:name,
deliveryAddress:address,
phoneNumber:phone,
status:"Order Placed"

});

alert("Order placed successfully");

}

/* GENERATE ORDER ID */

let orderId = "PHT" + Math.floor(Math.random()*100000);

let orderDetails = {

orderId: orderId,
customerName: name,
deliveryAddress: address,
phoneNumber: phone,
items: cart,
status: "Order Placed"

};

orders.push(orderDetails);

localStorage.setItem("orders", JSON.stringify(orders));

localStorage.removeItem("cart");

alert("Order Placed! Your Order ID: " + orderId);

window.location = "track.html";

}


/* ADMIN LOGIN */

function adminLogin(){

let password = prompt("Enter Admin Password");

if(password === "admin123"){

window.location = "admin.html";

}

else{

alert("Wrong Password");

}

}


/* SHOW ORDERS IN ADMIN DASHBOARD */

document.addEventListener("DOMContentLoaded", function(){

let orderContainer = document.getElementById("orders");

if(orderContainer){

let orders = JSON.parse(localStorage.getItem("orders"));

if(!orders || orders.length === 0){

orderContainer.innerHTML = "No orders yet.";

return;

}

orders.forEach((order,index)=>{

let items = order.items.map(i=>i.name).join(", ");

let div=document.createElement("div");

div.className="order-card";

div.innerHTML=

"<div class='order-title'>Order ID: "+order.orderId+"</div>"+

"<b>Name:</b> "+order.customerName+"<br>"+

"<b>Address:</b> "+order.deliveryAddress+"<br>"+

"<b>Phone:</b> "+order.phoneNumber+"<br>"+

"<b>Items:</b> "+items+"<br>"+

"<b>Status:</b> "+order.status+"<br><br>"+

"<button onclick='updateStatus("+index+")'>Update Status</button>";

orderContainer.appendChild(div);

});
}

});
function updateStatus(index){

let orders = JSON.parse(localStorage.getItem("orders"));

let statuses = ["Order Placed","Packed","Shipped","Out for Delivery","Delivered"];

let current = statuses.indexOf(orders[index].status);

if(current < statuses.length-1){
orders[index].status = statuses[current+1];
}

localStorage.setItem("orders",JSON.stringify(orders));

location.reload();


}
if(document.getElementById("orders")){

db.collection("orders").onSnapshot((snapshot)=>{

let container=document.getElementById("orders");

container.innerHTML="";

snapshot.forEach((doc)=>{

let order=doc.data();

let div=document.createElement("div");

div.className="order-card";

div.innerHTML=

"<div class='order-title'>Order ID: "+order.orderId+"</div>"+

"<b>Name:</b> "+order.customerName+"<br>"+

"<b>Address:</b> "+order.deliveryAddress+"<br>"+

"<b>Phone:</b> "+order.phoneNumber+"<br>"+

"<b>Status:</b> "+order.status+"<br>";

container.appendChild(div);

});

});

}

