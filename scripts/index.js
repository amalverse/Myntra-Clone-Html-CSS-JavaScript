// Use window-scoped globals so multiple page scripts share the same state
window.bagItems = JSON.parse(localStorage.getItem("bagItems")) || [];
window.wishlistItems = JSON.parse(localStorage.getItem("wishlistItems")) || [];

// Load initial data and update UI on page load
onLoad();

function onLoad() {
  // Sync globals from localStorage
  window.bagItems = JSON.parse(localStorage.getItem("bagItems")) || [];
  window.wishlistItems =
    JSON.parse(localStorage.getItem("wishlistItems")) || [];

  // Display items on the homepage and update the bag and wishlist icons
  displayItemsOnHomePage();
  displayBagIcon();
  displayWishlistIcon();
}

function addToBag(itemId) {
  // Find the full item object from the items array
  const item = items.find((i) => i.id === itemId);
  if (item) {
    // Add the selected item to the bag and save to localStorage
    window.bagItems.push(item);
    localStorage.setItem("bagItems", JSON.stringify(window.bagItems));

    // Update the bag icon to reflect the new item count
    displayBagIcon();
  }
}

function displayBagIcon() {
  // Get the bag item count element from the DOM
  let bagItemCountElement = document.querySelector(".bag-item-count");
  if (!bagItemCountElement) return;

  // Show or hide the bag icon based on the number of items in the bag
  if (window.bagItems.length > 0) {
    bagItemCountElement.style.visibility = "visible";
    bagItemCountElement.innerText = window.bagItems.length;
  } else {
    bagItemCountElement.style.visibility = "hidden";
  }
}

// Function to add an item to the wishlist
function addToWishlist(itemId) {
  // Find the full item object from the items array
  const item = items.find((i) => i.id === itemId);
  if (item) {
    // Add the selected item to the wishlist and save to localStorage
    window.wishlistItems.push(item);
    localStorage.setItem("wishlistItems", JSON.stringify(window.wishlistItems));

    // Update the wishlist icon to reflect the new item count
    displayWishlistIcon();
  }
}

function displayWishlistIcon() {
  // Get the wishlist item count element from the DOM
  let wishlistItemCountElement = document.querySelector(".wishlist-item-count");
  if (!wishlistItemCountElement) return;

  // Show or hide the wishlist icon based on the number of items in the wishlist
  if (window.wishlistItems.length > 0) {
    wishlistItemCountElement.style.visibility = "visible";
    wishlistItemCountElement.innerText = window.wishlistItems.length;
  } else {
    wishlistItemCountElement.style.visibility = "hidden";
  }
}

function displayItemsOnHomePage() {
  // Get the container element for displaying items
  let itemsContainerElement = document.querySelector(".items-container");

  // Exit if the container element is not found
  if (!itemsContainerElement) {
    return;
  }

  // Generate HTML for each item and append to the container
  let innerHtml = "";
  items.forEach((item) => {
    innerHtml += `
    <div class="item-container">
      <img class="item-image" src="${item.image}" alt="item image">
      <div class="rating">
          ${item.rating.stars} ⭐ | ${item.rating.count}
      </div>
      <div class="company-name">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price">
          <span class="current-price">Rs ${item.current_price}</span>
          <span class="original-price">Rs ${item.original_price}</span>
          <span class="discount">(${item.discount_percentage}% OFF)</span>
      </div>
      <button class="btn-add-bag" onclick="addToBag('${item.id}')">Add to Bag</button>
      <button class="btn-wishlist" onclick="addToWishlist('${item.id}')">♡</button>
    </div>`;
  });

  // Update the container's inner HTML with the generated content
  itemsContainerElement.innerHTML = innerHtml;
}

// Set the current year in the copyright section
document.addEventListener("DOMContentLoaded", () => {
  const currentYear = new Date().getFullYear();
  document.getElementById("copyright-year").textContent = currentYear;
});

// Function to toggle the navigation menu
function toggleMenu() {
  const nav = document.querySelector(".nav_bar");
  nav.classList.toggle("active");
}
