let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    alert(name + " added to cart!");
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart");
    cartList.innerHTML = "";
    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = `${item.name} - ₹${item.price}`;
        cartList.appendChild(li);
    });
}