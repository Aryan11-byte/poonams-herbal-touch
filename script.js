/* CART SYSTEM */

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

if(cart.length === 0){
alert("Cart is empty");
return;
}

let orderId="PHT"+Math.floor(Math.random()*100000);

db.collection("orders").add({

orderId:orderId,
customerName:name,
deliveryAddress:address,
phoneNumber:phone,
items:cart,
status:"Order Placed"

})

.then(()=>{

localStorage.removeItem("cart");

alert("Order placed! Your Order ID: " + orderId);

window.location="track.html";

});

}


/* TRACK ORDER */

function trackOrder(){

let id=document.getElementById("orderId").value;

db.collection("orders")
.where("orderId","==",id)
.get()
.then((snapshot)=>{

if(snapshot.empty){
alert("Order not found");
return;
}

let order=snapshot.docs[0].data();

let steps=["Order Placed","Packed","Shipped","Out for Delivery","Delivered"];

let current=steps.indexOf(order.status);

for(let i=0;i<=current;i++){
document.getElementById("step"+(i+1)).classList.add("active");
}

});

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


/* ADMIN DASHBOARD (SHOW ORDERS FROM FIREBASE) */

document.addEventListener("DOMContentLoaded", function(){

let container=document.getElementById("orders");

if(!container) return;

db.collection("orders").onSnapshot((snapshot)=>{

container.innerHTML="";

snapshot.forEach((doc)=>{

let order=doc.data();

let items = order.items.map(i=>i.name).join(", ");

let div=document.createElement("div");

div.className="order-card";

div.innerHTML=

"<div class='order-title'>Order ID: "+order.orderId+"</div>"+
"<b>Name:</b> "+order.customerName+"<br>"+
"<b>Address:</b> "+order.deliveryAddress+"<br>"+
"<b>Phone:</b> "+order.phoneNumber+"<br>"+
"<b>Items:</b> "+items+"<br>"+
"<b>Status:</b> "+order.status+"<br>";

container.appendChild(div);

});

});

});
