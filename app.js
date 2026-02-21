// ===== Product Data =====
const products = [
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    category: "electronics",
    price: 79.99,
    oldPrice: 129.99,
    rating: 4.5,
    emoji: "\uD83C\uDFA7",
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    category: "electronics",
    price: 199.99,
    oldPrice: 249.99,
    rating: 4.7,
    emoji: "\u231A",
  },
  {
    id: 3,
    name: "Portable Speaker",
    category: "electronics",
    price: 49.99,
    oldPrice: null,
    rating: 4.3,
    emoji: "\uD83D\uDD0A",
  },
  {
    id: 4,
    name: "USB-C Hub Adapter",
    category: "electronics",
    price: 34.99,
    oldPrice: 44.99,
    rating: 4.4,
    emoji: "\uD83D\uDD0C",
  },
  {
    id: 5,
    name: "Denim Jacket",
    category: "clothing",
    price: 89.99,
    oldPrice: 120.00,
    rating: 4.6,
    emoji: "\uD83E\udDE5",
  },
  {
    id: 6,
    name: "Running Sneakers",
    category: "clothing",
    price: 64.99,
    oldPrice: null,
    rating: 4.4,
    emoji: "\uD83D\uDC5F",
  },
  {
    id: 7,
    name: "Cotton T-Shirt Pack",
    category: "clothing",
    price: 29.99,
    oldPrice: 39.99,
    rating: 4.2,
    emoji: "\uD83D\uDC55",
  },
  {
    id: 8,
    name: "Sunglasses Classic",
    category: "clothing",
    price: 24.99,
    oldPrice: null,
    rating: 4.1,
    emoji: "\uD83D\uDD76\uFE0F",
  },
  {
    id: 9,
    name: "Ceramic Vase Set",
    category: "home",
    price: 42.99,
    oldPrice: 59.99,
    rating: 4.8,
    emoji: "\uD83C\uDFFA",
  },
  {
    id: 10,
    name: "Scented Candle Collection",
    category: "home",
    price: 18.99,
    oldPrice: null,
    rating: 4.5,
    emoji: "\uD83D\uDD6F\uFE0F",
  },
  {
    id: 11,
    name: "Throw Blanket",
    category: "home",
    price: 35.99,
    oldPrice: 49.99,
    rating: 4.6,
    emoji: "\uD83D\uDECF\uFE0F",
  },
  {
    id: 12,
    name: "Plant Pot Set",
    category: "home",
    price: 27.99,
    oldPrice: null,
    rating: 4.3,
    emoji: "\uD83E\uDEB4",
  },
  {
    id: 13,
    name: "Yoga Mat Premium",
    category: "sports",
    price: 39.99,
    oldPrice: 55.00,
    rating: 4.7,
    emoji: "\uD83E\udDD8",
  },
  {
    id: 14,
    name: "Water Bottle Insulated",
    category: "sports",
    price: 22.99,
    oldPrice: null,
    rating: 4.5,
    emoji: "\uD83E\uDDCA",
  },
  {
    id: 15,
    name: "Resistance Bands Set",
    category: "sports",
    price: 19.99,
    oldPrice: 29.99,
    rating: 4.4,
    emoji: "\uD83D\uDCAA",
  },
  {
    id: 16,
    name: "Backpack Adventure",
    category: "sports",
    price: 59.99,
    oldPrice: 79.99,
    rating: 4.6,
    emoji: "\uD83C\uDF92",
  },
];

// ===== State =====
let cart = JSON.parse(localStorage.getItem("shopwave-cart") || "[]");
let currentCategory = "all";
let currentSort = "default";
let searchQuery = "";

// ===== DOM Elements =====
const productGrid = document.getElementById("product-grid");
const cartSidebar = document.getElementById("cart-sidebar");
const cartOverlay = document.getElementById("cart-overlay");
const cartItems = document.getElementById("cart-items");
const cartFooter = document.getElementById("cart-footer");
const cartCount = document.getElementById("cart-count");
const cartTotalPrice = document.getElementById("cart-total-price");
const searchInput = document.getElementById("search-input");
const sortSelect = document.getElementById("sort-select");
const toast = document.getElementById("toast");

// ===== Render Products =====
function getFilteredProducts() {
  let filtered = [...products];

  // Filter by category
  if (currentCategory !== "all") {
    filtered = filtered.filter((p) => p.category === currentCategory);
  }

  // Filter by search
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }

  // Sort
  switch (currentSort) {
    case "price-low":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "name":
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
  }

  return filtered;
}

function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return (
    "\u2605".repeat(full) +
    (half ? "\u00BD" : "") +
    "\u2606".repeat(empty) +
    ` <span style="color:#64748b">(${rating})</span>`
  );
}

function renderProducts() {
  const filtered = getFilteredProducts();

  if (filtered.length === 0) {
    productGrid.innerHTML = `<p style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:40px;">No products found.</p>`;
    return;
  }

  productGrid.innerHTML = filtered
    .map(
      (p) => `
    <div class="product-card">
      <div class="product-image">${p.emoji}</div>
      <div class="product-info">
        <div class="product-category">${p.category}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-rating">${renderStars(p.rating)}</div>
        <div class="product-bottom">
          <div class="product-price">
            $${p.price.toFixed(2)}
            ${p.oldPrice ? `<span class="old-price">$${p.oldPrice.toFixed(2)}</span>` : ""}
          </div>
          <button class="add-to-cart" data-id="${p.id}">Add to Cart</button>
        </div>
      </div>
    </div>
  `
    )
    .join("");
}

// ===== Cart =====
function saveCart() {
  localStorage.setItem("shopwave-cart", JSON.stringify(cart));
}

function addToCart(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) return;

  const existing = cart.find((item) => item.id === productId);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  saveCart();
  renderCart();
  showToast(`${product.name} added to cart!`);
}

function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  saveCart();
  renderCart();
}

function updateQty(productId, delta) {
  const item = cart.find((i) => i.id === productId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) {
    removeFromCart(productId);
    return;
  }

  saveCart();
  renderCart();
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function renderCart() {
  cartCount.textContent = getCartCount();

  if (cart.length === 0) {
    cartItems.innerHTML = `<p class="cart-empty">Your cart is empty</p>`;
    cartFooter.style.display = "none";
    return;
  }

  cartFooter.style.display = "block";
  cartTotalPrice.textContent = `$${getCartTotal().toFixed(2)}`;

  cartItems.innerHTML = cart
    .map(
      (item) => `
    <div class="cart-item">
      <div class="cart-item-image">${item.emoji}</div>
      <div class="cart-item-details">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">$${(item.price * item.qty).toFixed(2)}</div>
        <div class="cart-item-qty">
          <button class="qty-btn" data-id="${item.id}" data-delta="-1">&minus;</button>
          <span>${item.qty}</span>
          <button class="qty-btn" data-id="${item.id}" data-delta="1">&plus;</button>
        </div>
      </div>
      <button class="cart-item-remove" data-remove="${item.id}">&times;</button>
    </div>
  `
    )
    .join("");
}

function openCart() {
  cartSidebar.classList.add("open");
  cartOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  cartSidebar.classList.remove("open");
  cartOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

// ===== Toast =====
function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

// ===== Event Listeners =====

// Add to cart
productGrid.addEventListener("click", (e) => {
  if (e.target.classList.contains("add-to-cart")) {
    const id = parseInt(e.target.dataset.id, 10);
    addToCart(id);
  }
});

// Cart quantity & remove
cartItems.addEventListener("click", (e) => {
  const qtyBtn = e.target.closest(".qty-btn");
  if (qtyBtn) {
    const id = parseInt(qtyBtn.dataset.id, 10);
    const delta = parseInt(qtyBtn.dataset.delta, 10);
    updateQty(id, delta);
    return;
  }

  const removeBtn = e.target.closest(".cart-item-remove");
  if (removeBtn) {
    const id = parseInt(removeBtn.dataset.remove, 10);
    removeFromCart(id);
  }
});

// Cart toggle
document.getElementById("cart-toggle").addEventListener("click", openCart);
document.getElementById("cart-close").addEventListener("click", closeCart);
cartOverlay.addEventListener("click", closeCart);

// Category navigation
document.querySelectorAll("[data-category]").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    currentCategory = el.dataset.category;

    // Update active nav
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.classList.toggle(
        "active",
        link.dataset.category === currentCategory
      );
    });

    renderProducts();

    // Scroll to products
    document.getElementById("products").scrollIntoView({ behavior: "smooth" });
  });
});

// Search
searchInput.addEventListener("input", (e) => {
  searchQuery = e.target.value;
  renderProducts();
});

// Sort
sortSelect.addEventListener("change", (e) => {
  currentSort = e.target.value;
  renderProducts();
});

// Mobile menu
document.getElementById("mobile-menu-btn").addEventListener("click", () => {
  document.querySelector(".nav").classList.toggle("open");
});

// Newsletter
document.getElementById("newsletter-form").addEventListener("submit", (e) => {
  e.preventDefault();
  showToast("Thanks for subscribing!");
  e.target.reset();
});

// Checkout
document.getElementById("checkout-btn").addEventListener("click", () => {
  if (cart.length === 0) return;
  const total = getCartTotal().toFixed(2);
  cart = [];
  saveCart();
  renderCart();
  closeCart();
  showToast(`Order placed! Total: $${total}`);
});

// ===== Init =====
renderProducts();
renderCart();
