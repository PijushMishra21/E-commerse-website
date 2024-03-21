

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 1500); // Change image every 1.5 seconds
}



// // // shoping cart through APi calling :
async function getdata(){
 let cards= document.querySelectorAll('#card');
const respons = await fetch( "https://dummyjson.com/products");
const data = await respons.json();
console.log(data.products)
cards.forEach((element, i)=>{
 element.getElementsByTagName('img')[0].src = data.products[i].images[0];
 element.getElementsByTagName('span')[0].innerHTML = data.products[i].title;
 element.getElementsByTagName('p')[0].innerHTML = data.products[i].description;
 element.getElementsByTagName('b')[0].innerHTML = `Price: ₹`+ data.products[i].price;

})
}
getdata();






// Initialize an array to hold the items in the cart
const cartItems = [];
let cartCounter = 0;

// Get all buttons with class "add-to-cart"
const addToCartButtons = document.querySelectorAll('.add-to-cart');

// Add event listener to each button
addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

// Function to add item to cart
function addToCart(event) {
 cartCounter++;
 const cartCounterElement = document.getElementById('cart-number');
  cartCounterElement.textContent = cartCounter;
  // Get the parent card of the clicked button
  const card = event.currentTarget.closest('#card');

  // Clone the card element
  const clonedCard = card.cloneNode(true);

  // Remove the "Add To Cart" button from the cloned card
  clonedCard.querySelector('button').remove();

  // Add the cloned card to the cart items array
  cartItems.push(clonedCard);

  // Update the cart display
  displayCart();
}








// Function to display items in the cart
function displayCart() {
  // Get the cart items list element
  const cartList = document.getElementById('cart-items');

  // Clear the existing items in the cart
  cartList.innerHTML = '';

  // Add each item from the cartItems array to the cart list
  cartItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.appendChild(item);
    cartList.appendChild(listItem);
  });
}

let cart_btn = document.querySelector('#cart_btn');
let cart_container = document.querySelector('#cart-container');
let Remove_btn = document.querySelector('#Remove-btn');

cart_btn.onclick = () => {
 const cartList = document.getElementById('cart-items');
 const empty_div = document.querySelector('.empty_div');
 if (cartList.innerHTML === '') {
  console.log('Cart is empty');
 // const para_msg = document.createElement('h3');
 // para_msg.textContent = 'Your cart is empty';
 // para_msg.style.color = 'red';
 // empty_div.appendChild(para_msg);
 // empty_div.classList.remove('hidden'); // Remove the 'hidden' class

 // empty_div.classList.toggle('hidden');
 cart_container.classList.toggle('hidden');
}else{

  cart_container.classList.toggle('hidden');
  }
 };
Remove_btn.onclick = () => {
 cart_container.classList.add('hidden');
};