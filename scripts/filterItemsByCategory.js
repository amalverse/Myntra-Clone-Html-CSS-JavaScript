function filterItemsByCategory(category) {
  // Get the container element for displaying items
  let itemsContainerElement = document.querySelector('.items-container');

  // Exit if the container element is not found
  if (!itemsContainerElement) {
    return;
  }

  // Filter items based on the selected category
  let filteredItems = items.filter(item => item.category === category);

  // Generate HTML for each filtered item and append to the container
  let innerHtml = '';
  filteredItems.forEach(item => {
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
      <button class="btn-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
      <button class="btn-wishlist" onclick="addToWishlist(${item.id})">♡</button>
    </div>`;
  });

  // Update the container's inner HTML with the filtered content
  itemsContainerElement.innerHTML = innerHtml;
}