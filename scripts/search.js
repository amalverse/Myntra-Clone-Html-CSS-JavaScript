// Search functionality

// Function to search items by name, company, or category
function searchItems(searchQuery) {
  const query = searchQuery.toLowerCase().trim();

  // If search is empty, display all items
  if (query === "") {
    displayItemsOnHomePage();
    return;
  }

  // Filter items based on search query
  const filteredItems = items.filter((item) => {
    return (
      item.item_name.toLowerCase().includes(query) ||
      item.company.toLowerCase().includes(query) ||
      item.category.toLowerCase().includes(query)
    );
  });

  // Display filtered items
  displaySearchResults(filteredItems);
}

// Function to display search results
function displaySearchResults(filteredItems) {
  let itemsContainerElement = document.querySelector(".items-container");
  if (!itemsContainerElement) return;

  if (filteredItems.length === 0) {
    itemsContainerElement.innerHTML =
      "<p style='text-align: center; padding: 40px; font-size: 18px; color: #999;'>No products found matching your search.</p>";
    return;
  }

  let innerHtml = "";
  filteredItems.forEach((item) => {
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

  itemsContainerElement.innerHTML = innerHtml;
}

// Initialize search functionality when DOM is ready
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search_input");
  if (searchInput) {
    // Real-time search as user types
    searchInput.addEventListener("input", (event) => {
      searchItems(event.target.value);
    });

    // Also search on Enter key press
    searchInput.addEventListener("keypress", (event) => {
      if (event.key === "Enter") {
        searchItems(event.target.value);
      }
    });
  }
});
