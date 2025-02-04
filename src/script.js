const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sideMenu = document.getElementById("sideMenu");

menuBtn.addEventListener("click", () => {
  sideMenu.classList.remove("translate-x-full");
});

closeBtn.addEventListener("click", () => {
  sideMenu.classList.add("translate-x-full");
});

// the shopping cart
const cart= document.getElementById("cart");
const ItemsSelected=[];

cart.addEventListener('click', function addItem(){
   
})