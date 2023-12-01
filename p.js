const totalCount = document.getElementById("count");
var count = window.localStorage.getItem('Cart_items') ||0;
totalCount.innerHTML = count
let handleIncrement = () => {
  count=0;
  totalCount.innerHTML = count;
  localStorage.setItem("Cart_items", count);
};
const incrementCount = document.querySelectorAll(".cart-icon");
incrementCount.forEach((c) => {
  c.addEventListener("click", handleIncrement);
})
