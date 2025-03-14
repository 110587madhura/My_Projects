document.addEventListener('DOMContentLoaded' , () => {
    const products = [
        {id: 1, name: 'Product 1', price: 29.99},
        {id: 2, name: 'Product 2', price: 19.99},
        {id: 3, name: 'Product 3', price: 20.99},
        // {id: 4, name: 'Product 4', price: 10.99},
    ]
    const cart = []
    const productList = document.getElementById('product-list');
    const cartItems = document.getElementById('cart-items')
    const emptyCartMsg = document.getElementById('empty-cart')
    const CartTotalMsg = document.getElementById('cart-total')
    const totalPriceDisplay = document.getElementById('total-price')
    const checkOutBtn = document.getElementById('checkout-btn')

    products.forEach((product) => {
      const productDiv =  document.createElement('div')
      productDiv.classList.add('product');
      productDiv.innerHTML = `<span>${product.name} - $${product.price.toFixed(2)}</span> 
      <button data-id="${product.id}">add to cart </button>`;
      productList.appendChild(productDiv)
    })
// add eventlistener for each button :
productList.addEventListener('click', (e) => {
  if(e.target.tagName ==="BUTTON") {
    //console.log('Clicked')
    const productId = parseInt(e.target.getAttribute('data-id'))
   const product = products.find((p) => 
      p.id === productId )
      addToCart(product)
  
  }
})

function addToCart(product){
  cart.push(product)
  renderCart()
  // console.log(cart)
}

function renderCart() {
  cartItems.innerText = ""
  let totalPrice = 0

  if(cart.length > 0) {
    emptyCartMsg.classList.add('hidden')
    CartTotalMsg.classList.remove('hidden')
    cart.forEach((item, index) => {
      totalPrice += item.price
      const cartItem = document.createElement('div')
      cartItem.innerHTML = `${item.name} - $${item.price.toFixed(2)}`
      cartItems.appendChild(cartItem)
      totalPriceDisplay.textContent = `${totalPrice.toFixed(2)}`
    })
  } else {
    emptyCartMsg.classList.remove('hidden') 
    totalPriceDisplay.textContent = `$0.00`
  }
}

// when clicked on the checkout-button
checkOutBtn.addEventListener("click", () => {
 cart.length = 0;
  alert('Checkedout successfully');
  renderCart()
})

})