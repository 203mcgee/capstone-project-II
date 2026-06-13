// This script runs ONLY on cart.html
document.addEventListener("DOMContentLoaded", () => {
  const itemsList = document.querySelector("#items");
  
  // 1. Pull the data out of localStorage
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  // 2. Clear out any placeholders
  itemsList.innerHTML = "";

  // 3. Check if empty, otherwise render the items
  if (cart.length === 0) {
    itemsList.innerHTML = "<p>Your cart is empty.</p>";
  } else {
    cart.forEach((item, index) => {
      const div = document.createElement("div");
      div.classList.add("block");
      div.textContent = `${item.name} - $${item.price}`;
      
      // Optional: Add a quick delete button for convenience
      const removeBtn = document.createElement("button");
      removeBtn.classList.add('rmBtn');
      removeBtn.textContent = "Remove";
      removeBtn.style.marginLeft = "10px";
      removeBtn.addEventListener("click", () => {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        window.location.reload(); // Refresh cart UI
      });

      div.appendChild(removeBtn);
      itemsList.appendChild(div);
    });
  }
});