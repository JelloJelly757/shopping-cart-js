let shoppingCart = []; //Creates array for shopping cart
let appleButton = document.querySelector('#add-apple'); //Gets apple button
let bananaButton = document.querySelector('#add-banana'); 
let blueberryButton = document.querySelector('#add-blueberry'); 
let cartList = document.querySelector('#cart-items'); //gets cart ul

console.log(shoppingCart); 

appleButton.addEventListener("click", () => {
    shoppingCart.push("Apple");
    let li = document.createElement("li");
    li.textContent = "Apple"; 
    cartList.appendChild(li);
}); 

blueberryButton.addEventListener("click", () => {
    shoppingCart.push("Blueberry");
    let li = document.createElement("li");
    li.textContent = "Blueberry"; 
    cartList.appendChild(li);
}); 

bananaButton.addEventListener("click", () => {
    shoppingCart.push("Banana");
    let li = document.createElement("li");
    li.textContent = "Banana"; 
    cartList.appendChild(li);
}); 