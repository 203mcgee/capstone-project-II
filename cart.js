

// This script runs ONLY on cart.html
document.addEventListener("DOMContentLoaded", () => {
  const itemsList = document.querySelector("#items");

  // 1. Pull the data out of localStorage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // 2. Clear out any placeholders
  itemsList.innerHTML = "";
  // Wanted to calculate the total number of items in the cart
  let total = 0;
  // 3. Check if empty, otherwise render the items
  if (cart.length === 0) {
    itemsList.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cart.forEach((item, index) => {
      const div = document.createElement("div");
      div.classList.add("block");
      const product = document.createElement('p');
      product.classList.add('productCart');
      product.innerHTML = `<p> ${item.name} - $${item.price}</p>`
      const productImg =  document.createElement('img');
      productImg.src = item.image;


      const removeBtn = document.createElement("button");
      removeBtn.classList.add('rmBtn');
      removeBtn.textContent = "Remove";
      removeBtn.classList.add('rmBtn');
      removeBtn.addEventListener("click", () => {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        window.location.reload(); // Refresh cart UI
      });

      
      

      // This is to make sure it reads as a number and not as a string
      total += parseFloat(item.price);

      div.append(removeBtn,product,productImg);
      itemsList.appendChild(div);
    });
    //Created an element then show the price
    let totalShows = document.createElement('p');
    totalShows.innerHTML = `<p>Total: $${total} </p>`;

    const buyNow = document.createElement('button');
    buyNow.innerText = 'BUY NOW';

    buyNow.addEventListener('click',() => {
      // This will clear out the cart
      localStorage.clear()
      // then it will reload the page
      window.location.reload();
    })

    itemsList.append(totalShows,buyNow);


  }
});