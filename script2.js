function applyCoupon() {
    let coupon = document.getElementById("coupon").value;
    let discount = (coupon === "FIRST50") ? 50 : 0;
    alert("You got a ₹" + discount + " discount!");
}