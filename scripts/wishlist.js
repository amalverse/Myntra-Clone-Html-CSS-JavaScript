// Retrieve wishlist items from localStorage and expose on window to avoid
// redeclaring the same identifier in other scripts
// Filter out invalid items (strings/IDs instead of objects) from localStorage
let rawWishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];
window.wishlistItems = rawWishlistItems.filter(
  (item) => typeof item === "object" && item.id
);

// Update localStorage to remove invalid items
if (rawWishlistItems.length !== window.wishlistItems.length) {
  localStorage.setItem("wishlistItems", JSON.stringify(window.wishlistItems));
}

// Function to render wishlist items or show empty message
function renderWishlist() {
  const container = document.querySelector(".wishlist-items-container");
  if (!container) return;
  if (window.wishlistItems.length === 0) {
    container.innerHTML = "<p>Your wishlist is empty.</p>";
    return;
  }
  let html = "";
  window.wishlistItems.forEach((item) => {
    html += `
		<div class="item-container">
			<img src="../${item.image}" alt="${item.item_name}" class="item-image">
				<div class="item-company">${item.company}</div>
				<div class="item-name">${item.item_name}</div>
				<div class="price">
					<span class="current-price">Rs ${item.current_price}</span>
					<span class="original-price">Rs ${item.original_price}</span>
					<span class="discount">(${item.discount_percentage}% OFF)</span>
				</div>
				<button class="remove-wishlist-btn" onclick="removeFromWishlist('${item.id}')">Remove</button>
		</div>
		`;
  });
  container.innerHTML = html;
}

// Function to remove an item from the wishlist
function removeFromWishlist(itemId) {
  window.wishlistItems = window.wishlistItems.filter(
    (item) => item.id != itemId
  );
  localStorage.setItem("wishlistItems", JSON.stringify(window.wishlistItems));
  renderWishlist();
  // Update global variables from localStorage before updating badges
  window.wishlistItems =
    JSON.parse(localStorage.getItem("wishlistItems")) || [];
  window.bagItems = JSON.parse(localStorage.getItem("bagItems")) || [];
  // Update the header badges to reflect the change
  displayWishlistIcon();
  displayBagIcon();
}

// Show initial wishlist items on page load
document.addEventListener("DOMContentLoaded", renderWishlist);
