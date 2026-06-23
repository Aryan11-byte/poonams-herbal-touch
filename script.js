/* ==========================================
        NANDE - script.js
========================================== */

// Welcome Message
console.log("Welcome to Nandé");

/* ==========================================
            STICKY NAVBAR
========================================== */

window.addEventListener("scroll", function () {

    const navbar = document.querySelector("header");

    if (window.scrollY > 50) {

        navbar.style.background = "#ffffff";
        navbar.style.boxShadow = "0 5px 15px rgba(0,0,0,.15)";

    } else {

        navbar.style.background = "#ffffff";
        navbar.style.boxShadow = "none";

    }

});

/* ==========================================
        HERO BUTTON ANIMATION
========================================== */

const buttons = document.querySelectorAll("button,.btn-primary,.btn-secondary");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", () => {

        button.style.transform = "scale(1)";

    });

});

/* ==========================================
            SHOPPING CART
========================================== */

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {

    cart.push({

        name: name,

        price: price,

        quantity: 1

    });

    localStorage.setItem("cart", JSON.stringify(cart));

    alert(name + " added to cart!");

    updateCartCount();

}

function updateCartCount() {

    const cartBtn = document.querySelector(".cart-btn");

    if (cartBtn) {

        cartBtn.innerHTML = "🛒 Cart (" + cart.length + ")";

    }

}

updateCartCount();

/* ==========================================
        ADD TO CART BUTTONS
========================================== */

const addButtons = document.querySelectorAll(".product-card button");

addButtons.forEach(button => {

    button.addEventListener("click", function () {

        const card = this.parentElement;

        const name = card.querySelector("h3").innerText;

        const price = card.querySelector("p").innerText;

        addToCart(name, price);

    });

});

/* ==========================================
            NEWSLETTER
========================================== */

const form = document.querySelector(".newsletter form");

if (form) {

form.addEventListener("submit", function(e){

e.preventDefault();

const email = form.querySelector("input").value;

if(email===""){

alert("Please enter your email.");

return;

}

alert("Thank you for subscribing!");

form.reset();

});

}

/* ==========================================
        SCROLL ANIMATION
========================================== */

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-in");

}

});

});

document.querySelectorAll("section").forEach(section=>{

observer.observe(section);

});

/* ==========================================
        BACK TO TOP BUTTON
========================================== */

const topButton = document.createElement("button");

topButton.innerHTML="↑";

topButton.style.position="fixed";

topButton.style.right="20px";

topButton.style.bottom="20px";

topButton.style.width="50px";

topButton.style.height="50px";

topButton.style.borderRadius="50%";

topButton.style.border="none";

topButton.style.background="#111";

topButton.style.color="white";

topButton.style.cursor="pointer";

topButton.style.display="none";

topButton.style.fontSize="22px";

topButton.style.zIndex="999";

document.body.appendChild(topButton);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topButton.style.display="block";

}else{

topButton.style.display="none";

}

});

topButton.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/* ==========================================
        IMAGE HOVER EFFECT
========================================== */

document.querySelectorAll("img").forEach(img=>{

img.addEventListener("mouseover",()=>{

img.style.transition=".5s";

img.style.transform="scale(1.02)";

});

img.addEventListener("mouseout",()=>{

img.style.transform="scale(1)";

});

});

/* ==========================================
            LOADER
========================================== */

window.onload=function(){

document.body.style.opacity="1";

};

/* ==========================================
        DARK MODE (Future Ready)
========================================== */

function toggleDarkMode(){

document.body.classList.toggle("dark-mode");

}

/* ==========================================
        AI TRY ON BUTTON
========================================== */

const aiButtons=document.querySelectorAll(".btn-secondary");

aiButtons.forEach(btn=>{

btn.addEventListener("click",()=>{

window.location.href="tryon.html";

});

});

/* ==========================================
            SEARCH PLACEHOLDER
========================================== */

function searchProduct(){

alert("Search feature will be added in Shop Page.");

}

/* ==========================================
            END
========================================== */
