# Myntra Clone - Fashion E-Commerce Platform   
# Live - https://amalverse.github.io/Myntra-Clone-Html-CSS-JavaScript/

A fully functional e-commerce web application built with vanilla JavaScript, HTML, and CSS that replicates the core features of the Myntra shopping platform.

## 🎯 Project Overview

This project is a feature-rich clone of Myntra, India's popular online fashion marketplace. It demonstrates modern web development practices with a focus on user experience and functionality without relying on external frameworks like React or Vue.

## ✨ Key Features

### 🛍️ Shopping & Browsing

- **Product Display**: Browse a wide variety of products with detailed information including images, prices, discounts, and ratings
- **Category Filtering**: Filter products by categories (Men, Women, Kids, Home & Living, Beauty)
- **Search Functionality**: Search for products across the entire catalog
- **Product Details**: View comprehensive information including original price, discounted price, discount percentage, delivery date, return period, and customer ratings
  <img width="1920" height="2572" alt="screencapture-127-0-0-1-5500-index-html-2025-12-27-19_02_32" src="https://github.com/user-attachments/assets/604302bb-1dbe-4d80-ab36-81ad890a480e" />


### 🛒 Shopping Bag

- **Add to Bag**: Add products to your shopping bag with one click
- **Bag Management**: View all items in your bag on a dedicated page
- **Remove Items**: Remove unwanted items from your bag
- **Persistent Storage**: Your bag items are saved to your browser's local storage, so they persist even after closing the app
  <img width="1920" height="1475" alt="screencapture-127-0-0-1-5500-pages-bag-html-2025-12-27-19_03_21" src="https://github.com/user-attachments/assets/2436f135-7a9a-4eaf-8a9d-17588cb791b0" />


### ❤️ Wishlist

- **Add to Wishlist**: Save items you love for later
- **Wishlist Page**: View all your wishlisted items on a dedicated page
- **Remove from Wishlist**: Remove items from your wishlist
- **Persistent Storage**: Wishlist items are saved and persist across sessions
<img width="1920" height="1181" alt="screencapture-127-0-0-1-5500-pages-wishlist-html-2025-12-27-19_03_08" src="https://github.com/user-attachments/assets/9f36dc0e-ae77-4113-a4e3-bc5522836ab5" />



### 👤 User Profile

- **Profile Page**: Dedicated profile page to view user information

### 📱 Responsive Design

- **Mobile-Friendly**: Hamburger menu for mobile devices
- **Adaptive Layout**: Works seamlessly on different screen sizes
- **Touch-Friendly**: Optimized for both desktop and mobile interactions

## 📁 Project Structure

```
Myntra Clone JS/
├── index.html              # Main homepage
├── css/
│   ├── index.css           # Styles for homepage
│   ├── bag.css             # Styles for shopping bag page
│   └── wishlist.css        # Styles for wishlist page
├── data/
│   └── items.js            # Product catalog data
├── pages/
│   ├── bag.html            # Shopping bag page
│   ├── wishlist.html       # Wishlist page
│   └── profile.html        # User profile page
├── scripts/
│   ├── index.js            # Main functionality and home page logic
│   ├── bag.js              # Shopping bag page logic
│   ├── wishlist.js         # Wishlist page logic
│   ├── profile.js          # Profile page logic
│   ├── search.js           # Search functionality
│   └── filterItemsByCategory.js  # Category filtering
├── images/                 # Product and logo images
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites

- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies or npm packages required

### Installation & Usage

1. **Clone or download the project** to your local machine
2. **Open `index.html`** in your web browser
3. Start shopping! Browse products, use the search bar, filter by category, and manage your bag and wishlist

### Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Microsoft Edge
- Mobile browsers

## 💾 Data Persistence

This application uses **localStorage** to persist user data:

- **Shopping Bag**: Items you add are saved in your browser's local storage
- **Wishlist**: Your wishlist items are automatically saved
- **Data Persists**: Even after closing the browser, your bag and wishlist items remain saved

## 🔧 How It Works

### Add to Bag

1. Click the "Add to Bag" button on any product
2. The item is added to your shopping bag
3. A badge on the bag icon shows the item count
4. View your bag by clicking the bag icon in the header

### Add to Wishlist

1. Click the heart icon on any product
2. The item is added to your wishlist
3. A badge on the wishlist icon shows your wishlist count
4. View your wishlist by clicking the wishlist icon in the header

### Filter & Search

1. **Category Filter**: Click on categories in the navigation (Men, Women, Kids, etc.)
2. **Search**: Type in the search bar to find specific products
<img width="1920" height="1276" alt="screencapture-127-0-0-1-5500-index-html-2025-12-27-19_11_30" src="https://github.com/user-attachments/assets/254ce5b6-498b-4011-a406-e4b18645d507" />

### Mobile Navigation

- Click the hamburger menu on mobile devices to access the navigation menu
- All features work seamlessly on mobile devices

## 🎨 Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**: Responsive styling, flexbox, and grid layouts
- **Vanilla JavaScript**: No frameworks - pure JavaScript for all functionality
- **Material Symbols**: Google Material Icons for UI elements
- **Local Storage API**: For persistent data storage

## 📊 Product Data

The `items.js` file contains an array of product objects with the following properties:

- `id`: Unique product identifier
- `image`: Product image path
- `company`: Brand/company name
- `item_name`: Product name
- `category`: Product category
- `original_price`: Original price before discount
- `current_price`: Discounted price
- `discount_percentage`: Discount percentage
- `return_period`: Days available for returns
- `delivery_date`: Expected delivery date
- `rating`: Object containing star rating and number of reviews

## 🎓 Learning Outcomes

This project demonstrates:

- ✅ DOM manipulation with vanilla JavaScript
- ✅ Event handling and listeners
- ✅ Local storage for data persistence
- ✅ Array methods (map, filter, find)
- ✅ Responsive web design
- ✅ Component-based architecture (without frameworks)
- ✅ User interface patterns for e-commerce

## 🐛 Features in Detail

### Homepage (index.html)

- Header with logo, navigation, and search bar
- Product grid displaying all items
- Add to bag and wishlist buttons on each product
- Responsive layout with hamburger menu for mobile

### Shopping Bag (pages/bag.html)

- List of all items in your bag
- Option to remove items
- Item details including price and quantity
- Persistent across sessions

### Wishlist (pages/wishlist.html)

- Display of all wishlist items
- Move items to bag directly from wishlist
- Remove items from wishlist
- Saved across sessions

### Profile (pages/profile.html)

- User profile page for future customization

## 🔮 Potential Enhancements

- Add quantity selector for bag items
- Implement checkout functionality
- Add price filtering
- Integrate with a backend API
- Add user authentication
- Implement reviews and ratings system
- Add product sorting options
- Payment gateway integration

## 📝 Notes

- This is a frontend clone for educational purposes
- No backend server is required
- All data is stored locally in the browser
- Perfect for learning modern web development practices

## 👨‍💻 Development Tips

- Use browser DevTools to inspect elements and debug
- Check the Console tab for any errors
- Use the Application/Storage tab to view localStorage data
- Test on different devices and screen sizes

---

**Happy Shopping! 🛍️**

This project showcases how you can build a fully functional e-commerce platform using only HTML, CSS, and JavaScript!
