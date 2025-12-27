// Define a constant for convenience fees
const CONVENIENCE_FEES = 99;

// Initialize a variable to store detailed information about items in the bag
let bagItemObjects;

// Initialize window.bagItems with data from localStorage, filtering out invalid items
let rawBagItems = JSON.parse(localStorage.getItem("bagItems")) || [];
window.bagItems = rawBagItems.filter(
  (item) => typeof item === "object" && item.id
);

// Update localStorage to remove invalid items
if (rawBagItems.length !== window.bagItems.length) {
  localStorage.setItem("bagItems", JSON.stringify(window.bagItems));
}

// Load initial data and update UI on page load
onLoad();

function onLoad() {
  // Load detailed information about bag items
  loadBagItemObjects();

  // Display bag items and summary on the page
  displayBagItems();
  displayBagSummary();
}

function displayBagSummary() {
  // Get the bag summary element from the DOM
  let bagSummaryElement = document.querySelector(".bag-summary");

  // Calculate total items, MRP, and discount
  let totalItem = bagItemObjects.length;
  let totalMRP = 0;
  let totalDiscount = 0;

  bagItemObjects.forEach((bagItem) => {
    totalMRP += bagItem.original_price; // Add original price to total MRP
    totalDiscount += bagItem.original_price - bagItem.current_price; // Calculate discount
  });

  // Calculate the final payment amount
  let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;

  // Update the bag summary element with calculated details
  bagSummaryElement.innerHTML = `
    <div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
    <div class="price-item">
      <span class="price-item-tag">Total MRP</span>
      <span class="price-item-value">₹${totalMRP}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Discount on MRP</span>
      <span class="price-item-value priceDetail-base-discount">-₹${totalDiscount}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Convenience Fee</span>
      <span class="price-item-value">₹99</span>
    </div>
    <hr>
    <div class="price-footer">
      <span class="price-item-tag">Total Amount</span>
      <span class="price-item-value">₹${finalPayment}</span>
    </div>
  </div>
  <button class="btn-place-order">
    <div class="css-xjhrni">PLACE ORDER</div>
  </button>
  `;
}

function loadBagItemObjects() {
  // Log the current bag items for debugging
  console.log(window.bagItems);

  // Bag items are now full objects, so assign them directly
  bagItemObjects = window.bagItems;

  // Log the detailed bag items for debugging
  console.log(bagItemObjects);
}

function displayBagItems() {
  // Get the container element for displaying bag items
  let containerElement = document.querySelector(".bag-items-container");

  // Generate HTML for each bag item and append to the container
  let innerHTML = "";
  bagItemObjects.forEach((bagItem) => {
    innerHTML += generateItemHTML(bagItem);
  });

  // Update the container's inner HTML with the generated content
  containerElement.innerHTML = innerHTML;
}

function removeFromBag(itemId) {
  // Remove the selected item from the bag
  window.bagItems = window.bagItems.filter((bagItem) => bagItem.id != itemId);

  // Update localStorage with the new bag items
  localStorage.setItem("bagItems", JSON.stringify(window.bagItems));

  // Reload bag item objects and update the UI
  loadBagItemObjects();
  displayBagIcon();
  displayBagItems();
  displayBagSummary();
}

function generateItemHTML(item) {
  // Generate HTML for a single bag item
  return `<div class="bag-item-container">
    <div class="item-left-part">
      <img class="bag-item-img" src="../${item.image}">
    </div>
    <div class="item-right-part">
      <div class="company">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price-container">
        <span class="current-price">Rs ${item.current_price}</span>
        <span class="original-price">Rs ${item.original_price}</span>
        <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
      </div>
      <div class="return-period">
        <span class="return-period-days">${item.return_period} days</span> return available
      </div>
      <div class="delivery-details">
        Delivery by
        <span class="delivery-details-days">${item.delivery_date}</span>
      </div>
    </div>

    <div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
  </div>`;
}
