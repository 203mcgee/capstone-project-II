// DOMContentLoaded is a web browser event that fires when the initial HTML document is completely parsed and the DOM tree is built
document.addEventListener("DOMContentLoaded", () => {
  const itemsList = document.querySelector("#items");
  const cartCountBadge = document.querySelector("#cart-count");

  // 1. Pull the data out of localStorage
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  // 2. Update the navbar/cart badge number dynamically
  if (cartCountBadge) {
    cartCountBadge.textContent = cart.length;
  }

  // 3. Clear out any hardcoded placeholders
  if (!itemsList) return;
  itemsList.innerHTML = "";

  // 4. Check if empty, otherwise render the items
  if (cart.length === 0) {
    itemsList.innerHTML = "<p style='color: #666; padding: 10px 0;'>Your cart is empty.</p>";
  } else {
    let total = 0;

    cart.forEach((item, index) => {
      // Create the main row container for this item
      const div = document.createElement("div");
      div.classList.add("block");


      // Create a wrapper for item details (image + info text) so they stick together on the left
      const itemDetailsWrapper = document.createElement("div");
      itemDetailsWrapper.classList.add('wrapper');


      // Product Image
      const productImg = document.createElement('img');
      productImg.classList.add('pImg');
      productImg.src = item.image


      // Product Name & Price Link/Text
      const productText = document.createElement('p');
      productText.style.margin = "0";
      productText.innerHTML = `<span class="cart-item-name" style="font-weight: 500;">${item.name}</span>`;

      // Append image and text to the left side wrapper
      itemDetailsWrapper.append(productImg, productText);

      // Product Price Display (Formatted nicely)
      const priceDisplay = document.createElement('span');
      priceDisplay.classList.add('price');
      priceDisplay.style.color = "#333";
      priceDisplay.textContent = `$${parseFloat(item.price).toFixed(2)}`;

      // Remove Button
      const removeBtn = document.createElement("button");
      removeBtn.classList.add('rmBtn');
      removeBtn.textContent = "Remove";

      // Enforce keeping the button on the far right hand side edge
      removeBtn.style.marginLeft = "auto";

      removeBtn.addEventListener("click", () => {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        window.location.reload(); // Refresh cart UI
      });

      // Track running monetary total
      total += parseFloat(item.price || 0);

      // Assemble the element hierarchy onto the row card
      div.append(itemDetailsWrapper, priceDisplay, removeBtn);
      itemsList.appendChild(div);
    });

    // Separator line
    const hr = document.createElement('hr');
    hr.style.border = "0";
    hr.style.borderTop = "1px solid #ddd";
    hr.style.margin = "15px 0";
    itemsList.appendChild(hr);

    // Grand Total Layout Row
    const totalRow = document.createElement('p');
    totalRow.classList.add('total');
    totalRow.innerHTML = `<span>Total:</span> <span class="price" style="color:black"> $${total}</span>`;
    itemsList.appendChild(totalRow);

    // BUY NOW BUTTON
    const buyNow = document.createElement('button');
    buyNow.classList.add('buyNow');
    buyNow.innerText = 'BUY NOW';

    buyNow.addEventListener('click', (e) => {
      e.preventDefault(); // Prevents form errors if inside a parent wrapper form
      localStorage.removeItem("cart");
      alert("Thank you for your order! Processing payment...");
      window.location.reload();
    });

    itemsList.append(buyNow);
  }
});