// ===== Product Data =====
const products = [
  // --- Electronics ---
  {
    id: 1,
    name: "Wireless Bluetooth Headphones",
    category: "electronics",
    price: 79.99,
    oldPrice: 129.99,
    rating: 4.5,
    reviews: 238,
    emoji: "\uD83C\uDFA7",
    description: "Premium wireless headphones with active noise cancellation, 30-hour battery life, and ultra-comfortable memory foam ear cushions. Perfect for music lovers and professionals.",
    features: ["Active Noise Cancellation", "30-hour battery", "Bluetooth 5.3", "Memory foam cushions", "Built-in microphone", "Foldable design"],
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    category: "electronics",
    price: 199.99,
    oldPrice: 249.99,
    rating: 4.7,
    reviews: 412,
    emoji: "\u231A",
    description: "Advanced smartwatch with health monitoring, GPS tracking, and a stunning AMOLED display. Stay connected and track your fitness goals effortlessly.",
    features: ["AMOLED display", "Heart rate monitor", "GPS tracking", "Water resistant 50m", "7-day battery", "Sleep tracking"],
  },
  {
    id: 3,
    name: "Portable Speaker",
    category: "electronics",
    price: 49.99,
    oldPrice: null,
    rating: 4.3,
    reviews: 156,
    emoji: "\uD83D\uDD0A",
    description: "Compact yet powerful Bluetooth speaker with 360-degree sound and IPX7 waterproof rating. Take your music anywhere with 12 hours of playtime.",
    features: ["360-degree sound", "IPX7 waterproof", "12-hour battery", "Bluetooth 5.0", "USB-C charging", "Built-in microphone"],
  },
  {
    id: 4,
    name: "USB-C Hub Adapter",
    category: "electronics",
    price: 34.99,
    oldPrice: 44.99,
    rating: 4.4,
    reviews: 89,
    emoji: "\uD83D\uDD0C",
    description: "7-in-1 USB-C hub with HDMI 4K output, USB 3.0 ports, SD card reader, and 100W power delivery. Essential for modern laptops.",
    features: ["HDMI 4K@60Hz", "3x USB 3.0 ports", "SD/microSD reader", "100W PD charging", "Aluminum body", "Plug and play"],
  },
  {
    id: 5,
    name: "Mechanical Keyboard RGB",
    category: "electronics",
    price: 119.99,
    oldPrice: 149.99,
    rating: 4.6,
    reviews: 324,
    emoji: "\u2328\uFE0F",
    description: "Full-size mechanical keyboard with hot-swappable switches, per-key RGB lighting, and a premium aluminum frame. Type with precision and style.",
    features: ["Hot-swappable switches", "Per-key RGB", "Aluminum frame", "N-key rollover", "USB-C detachable", "PBT keycaps"],
  },
  {
    id: 6,
    name: "Wireless Charging Pad",
    category: "electronics",
    price: 29.99,
    oldPrice: null,
    rating: 4.2,
    reviews: 198,
    emoji: "\uD83D\uDD0B",
    description: "Fast wireless charging pad compatible with all Qi-enabled devices. Sleek design with LED indicator and built-in safety features.",
    features: ["15W fast charging", "Qi compatible", "LED indicator", "Anti-slip surface", "Over-charge protection", "Ultra-slim design"],
  },
  {
    id: 7,
    name: "4K Webcam HD",
    category: "electronics",
    price: 89.99,
    oldPrice: 109.99,
    rating: 4.5,
    reviews: 167,
    emoji: "\uD83D\uDCF7",
    description: "Crystal clear 4K webcam with auto-focus, built-in ring light, and noise-cancelling dual microphones. Perfect for streaming and video calls.",
    features: ["4K Ultra HD", "Auto-focus", "Built-in ring light", "Dual microphones", "Privacy cover", "Universal mount"],
  },
  {
    id: 8,
    name: "Noise Cancelling Earbuds",
    category: "electronics",
    price: 59.99,
    oldPrice: 79.99,
    rating: 4.3,
    reviews: 276,
    emoji: "\uD83C\uDFB5",
    description: "True wireless earbuds with hybrid noise cancellation, transparency mode, and premium sound quality. Compact charging case included.",
    features: ["Hybrid ANC", "Transparency mode", "24-hour total battery", "IPX5 water resistant", "Touch controls", "Wireless charging case"],
  },

  // --- Clothing ---
  {
    id: 9,
    name: "Denim Jacket",
    category: "clothing",
    price: 89.99,
    oldPrice: 120.00,
    rating: 4.6,
    reviews: 189,
    emoji: "\uD83E\udDE5",
    description: "Classic denim jacket crafted from premium cotton with a modern slim fit. Features brass buttons and multiple pockets for a timeless look.",
    features: ["100% premium cotton", "Slim fit", "Brass buttons", "Multiple pockets", "Machine washable", "Available in 5 colors"],
  },
  {
    id: 10,
    name: "Running Sneakers",
    category: "clothing",
    price: 64.99,
    oldPrice: null,
    rating: 4.4,
    reviews: 312,
    emoji: "\uD83D\uDC5F",
    description: "Lightweight running shoes with responsive cushioning and breathable mesh upper. Designed for comfort on long runs and everyday wear.",
    features: ["Breathable mesh", "Responsive cushioning", "Rubber outsole", "Lightweight design", "Reflective details", "Sizes 6-13"],
  },
  {
    id: 11,
    name: "Cotton T-Shirt Pack",
    category: "clothing",
    price: 29.99,
    oldPrice: 39.99,
    rating: 4.2,
    reviews: 445,
    emoji: "\uD83D\uDC55",
    description: "Pack of 3 premium cotton t-shirts in essential colors. Super soft fabric with reinforced stitching for lasting comfort.",
    features: ["3-pack bundle", "100% organic cotton", "Reinforced stitching", "Pre-shrunk fabric", "Crew neck", "Multiple color options"],
  },
  {
    id: 12,
    name: "Sunglasses Classic",
    category: "clothing",
    price: 24.99,
    oldPrice: null,
    rating: 4.1,
    reviews: 134,
    emoji: "\uD83D\uDD76\uFE0F",
    description: "Retro-inspired sunglasses with UV400 protection and polarized lenses. Lightweight acetate frame for all-day comfort.",
    features: ["UV400 protection", "Polarized lenses", "Acetate frame", "Spring hinges", "Includes case", "Unisex design"],
  },
  {
    id: 13,
    name: "Wool Blend Sweater",
    category: "clothing",
    price: 54.99,
    oldPrice: 74.99,
    rating: 4.5,
    reviews: 201,
    emoji: "\uD83E\udDE3",
    description: "Cozy wool-blend sweater with a relaxed fit and ribbed cuffs. Perfect layering piece for cool weather with a soft hand-feel.",
    features: ["Wool-cotton blend", "Relaxed fit", "Ribbed cuffs", "Crew neck", "Hand wash recommended", "Available in 6 colors"],
  },
  {
    id: 14,
    name: "Slim Fit Chinos",
    category: "clothing",
    price: 44.99,
    oldPrice: null,
    rating: 4.3,
    reviews: 267,
    emoji: "\uD83D\uDC56",
    description: "Versatile slim-fit chinos made from stretch cotton twill. Dress them up or down for any occasion with a comfortable modern fit.",
    features: ["Stretch cotton twill", "Slim fit", "Belt loops", "Zip fly", "Machine washable", "4 color options"],
  },
  {
    id: 15,
    name: "Leather Belt Premium",
    category: "clothing",
    price: 34.99,
    oldPrice: 49.99,
    rating: 4.7,
    reviews: 158,
    emoji: "\uD83D\uDC5C",
    description: "Genuine full-grain leather belt with a brushed metal buckle. Handcrafted with attention to detail for a refined finish.",
    features: ["Full-grain leather", "Brushed metal buckle", "Handcrafted", "35mm width", "Adjustable sizing", "Gift box included"],
  },
  {
    id: 16,
    name: "Puffer Vest",
    category: "clothing",
    price: 69.99,
    oldPrice: 89.99,
    rating: 4.4,
    reviews: 143,
    emoji: "\uD83E\udDE5",
    description: "Lightweight puffer vest with synthetic insulation and water-resistant shell. Packable design for easy travel and layering.",
    features: ["Synthetic insulation", "Water-resistant", "Packable design", "Stand collar", "Zip pockets", "Machine washable"],
  },

  // --- Home & Living ---
  {
    id: 17,
    name: "Ceramic Vase Set",
    category: "home",
    price: 42.99,
    oldPrice: 59.99,
    rating: 4.8,
    reviews: 97,
    emoji: "\uD83C\uDFFA",
    description: "Set of 3 handcrafted ceramic vases in modern minimalist designs. Perfect for fresh flowers or as standalone decorative pieces.",
    features: ["Set of 3 vases", "Handcrafted ceramic", "Minimalist design", "Waterproof interior", "Various sizes", "Matte finish"],
  },
  {
    id: 18,
    name: "Scented Candle Collection",
    category: "home",
    price: 18.99,
    oldPrice: null,
    rating: 4.5,
    reviews: 234,
    emoji: "\uD83D\uDD6F\uFE0F",
    description: "Set of 4 hand-poured soy wax candles in calming scents. Each candle burns for up to 25 hours with a clean, even flame.",
    features: ["Soy wax", "4 candle set", "25-hour burn time", "Cotton wicks", "Natural fragrances", "Reusable glass jars"],
  },
  {
    id: 19,
    name: "Throw Blanket",
    category: "home",
    price: 35.99,
    oldPrice: 49.99,
    rating: 4.6,
    reviews: 178,
    emoji: "\uD83D\uDECF\uFE0F",
    description: "Ultra-soft knit throw blanket in a chunky weave pattern. Adds warmth and texture to any sofa or bedroom.",
    features: ["Ultra-soft knit", "Chunky weave", "50x60 inches", "Machine washable", "Hypoallergenic", "Multiple colors"],
  },
  {
    id: 20,
    name: "Plant Pot Set",
    category: "home",
    price: 27.99,
    oldPrice: null,
    rating: 4.3,
    reviews: 112,
    emoji: "\uD83E\uDEB4",
    description: "Set of 4 modern planters in varying sizes with drainage holes and bamboo saucers. Ideal for indoor herbs and succulents.",
    features: ["Set of 4 pots", "Drainage holes", "Bamboo saucers", "Modern matte finish", "Indoor/outdoor use", "Various sizes"],
  },
  {
    id: 21,
    name: "Wall Art Canvas Print",
    category: "home",
    price: 39.99,
    oldPrice: 54.99,
    rating: 4.7,
    reviews: 86,
    emoji: "\uD83D\uDDBC\uFE0F",
    description: "Gallery-quality canvas print with a modern abstract design. Stretched over a solid wood frame, ready to hang.",
    features: ["Gallery-quality print", "Solid wood frame", "Ready to hang", "24x36 inches", "Fade-resistant ink", "Wrapped edges"],
  },
  {
    id: 22,
    name: "Bamboo Cutting Board Set",
    category: "home",
    price: 32.99,
    oldPrice: null,
    rating: 4.4,
    reviews: 203,
    emoji: "\uD83E\uDD6C",
    description: "Set of 3 premium bamboo cutting boards with juice grooves and easy-grip handles. Knife-friendly and naturally antimicrobial.",
    features: ["Set of 3 boards", "Juice grooves", "Easy-grip handles", "Knife-friendly", "Antimicrobial bamboo", "BPA-free"],
  },
  {
    id: 23,
    name: "Linen Cushion Covers",
    category: "home",
    price: 24.99,
    oldPrice: 34.99,
    rating: 4.5,
    reviews: 145,
    emoji: "\uD83D\uDECB\uFE0F",
    description: "Set of 2 premium linen cushion covers with hidden zipper closure. Adds an elegant touch to sofas, chairs, and beds.",
    features: ["Set of 2 covers", "100% linen", "Hidden zipper", "18x18 inches", "Machine washable", "10 color options"],
  },
  {
    id: 24,
    name: "Aroma Diffuser LED",
    category: "home",
    price: 28.99,
    oldPrice: 39.99,
    rating: 4.6,
    reviews: 267,
    emoji: "\uD83C\uDF3F",
    description: "Ultrasonic aroma diffuser with color-changing LED lights and whisper-quiet operation. Covers rooms up to 300 sq ft.",
    features: ["Ultrasonic mist", "7 LED colors", "300 sq ft coverage", "Auto shut-off", "300ml capacity", "Whisper quiet"],
  },

  // --- Others ---
  {
    id: 25,
    name: "Yoga Mat Premium",
    category: "others",
    price: 39.99,
    oldPrice: 55.00,
    rating: 4.7,
    reviews: 298,
    emoji: "\uD83E\udDD8",
    description: "Extra-thick eco-friendly yoga mat with non-slip texture and alignment guides. Comes with carrying strap for easy transport.",
    features: ["6mm thick", "Non-slip texture", "Alignment guides", "Eco-friendly TPE", "Carrying strap", "72x24 inches"],
  },
  {
    id: 26,
    name: "Water Bottle Insulated",
    category: "others",
    price: 22.99,
    oldPrice: null,
    rating: 4.5,
    reviews: 356,
    emoji: "\uD83E\uDDCA",
    description: "Double-wall vacuum insulated water bottle that keeps drinks cold for 24 hours or hot for 12 hours. Leak-proof and BPA-free.",
    features: ["Double-wall insulated", "24hr cold / 12hr hot", "BPA-free", "Leak-proof lid", "750ml capacity", "Powder-coated finish"],
  },
  {
    id: 27,
    name: "Resistance Bands Set",
    category: "others",
    price: 19.99,
    oldPrice: 29.99,
    rating: 4.4,
    reviews: 187,
    emoji: "\uD83D\uDCAA",
    description: "Set of 5 resistance bands in varying strengths with handles and door anchor. Complete home workout solution in a carry bag.",
    features: ["5 resistance levels", "Handles included", "Door anchor", "Ankle straps", "Carry bag", "Exercise guide"],
  },
  {
    id: 28,
    name: "Backpack Adventure",
    category: "others",
    price: 59.99,
    oldPrice: 79.99,
    rating: 4.6,
    reviews: 224,
    emoji: "\uD83C\uDF92",
    description: "Durable 40L backpack with padded laptop compartment, multiple organizer pockets, and ergonomic straps. Built for travel and daily use.",
    features: ["40L capacity", "Laptop compartment", "Water-resistant", "Ergonomic straps", "Multiple pockets", "Luggage strap"],
  },
  {
    id: 29,
    name: "Journal Notebook Set",
    category: "others",
    price: 16.99,
    oldPrice: null,
    rating: 4.3,
    reviews: 189,
    emoji: "\uD83D\uDCD3",
    description: "Set of 3 premium hardcover journals with dotted, lined, and blank pages. Lay-flat binding with an elastic closure and ribbon bookmark.",
    features: ["Set of 3 notebooks", "A5 size", "192 pages each", "Lay-flat binding", "Elastic closure", "Ribbon bookmark"],
  },
  {
    id: 30,
    name: "Desk Organizer Bamboo",
    category: "others",
    price: 26.99,
    oldPrice: 34.99,
    rating: 4.5,
    reviews: 132,
    emoji: "\uD83D\uDCDA",
    description: "Multi-compartment bamboo desk organizer with phone stand, pen holders, and storage drawers. Keep your workspace clean and productive.",
    features: ["Natural bamboo", "Phone stand", "Pen holders", "Storage drawer", "Cable management", "Easy assembly"],
  },
  {
    id: 31,
    name: "Travel Toiletry Bag",
    category: "others",
    price: 21.99,
    oldPrice: null,
    rating: 4.2,
    reviews: 176,
    emoji: "\uD83E\udDF3",
    description: "Hanging toiletry bag with multiple compartments, waterproof lining, and a sturdy hook. Perfect for travel and gym use.",
    features: ["Hanging design", "Waterproof lining", "Multiple compartments", "Sturdy hook", "Compact folding", "TSA-friendly"],
  },
  {
    id: 32,
    name: "Stainless Steel Tumbler",
    category: "others",
    price: 18.99,
    oldPrice: 24.99,
    rating: 4.4,
    reviews: 298,
    emoji: "\u2615",
    description: "Sleek stainless steel tumbler with spill-resistant lid and double-wall insulation. Fits most car cup holders.",
    features: ["Double-wall insulated", "Spill-resistant lid", "Stainless steel", "BPA-free", "450ml capacity", "Dishwasher safe"],
  },
];

// Category metadata
const categoryMeta = {
  electronics: {
    name: "Electronics",
    emoji: "\uD83D\uDCBB",
    tagline: "Discover the latest in tech and gadgets",
    description: "Browse our curated collection of cutting-edge electronics, from audio gear to productivity tools.",
    color: "#6366f1",
  },
  clothing: {
    name: "Clothing",
    emoji: "\uD83D\uDC55",
    tagline: "Style that speaks for itself",
    description: "Explore premium fashion essentials designed for comfort, durability, and modern style.",
    color: "#ec4899",
  },
  home: {
    name: "Home & Living",
    emoji: "\uD83C\uDFE0",
    tagline: "Make your space feel like home",
    description: "Transform your living space with beautiful decor, cozy textiles, and practical accessories.",
    color: "#10b981",
  },
  others: {
    name: "Others",
    emoji: "\uD83C\uDF1F",
    tagline: "Everything else you love",
    description: "From fitness gear to travel essentials and stationery, find everything you need in one place.",
    color: "#f59e0b",
  },
};

// ===== State =====
let cart = JSON.parse(localStorage.getItem("shopwave-cart") || "[]");
let currentCategory = "all";
let currentSort = "default";
let searchQuery = "";

// ===== Router =====
function navigateTo(hash) {
  window.location.hash = hash;
}

function getRoute() {
  const hash = window.location.hash || "#/";
  if (hash.startsWith("#/product/")) {
    const id = parseInt(hash.replace("#/product/", ""), 10);
    return { page: "product", id };
  }
  if (hash.startsWith("#/collection/")) {
    const cat = hash.replace("#/collection/", "");
    return { page: "collection", category: cat };
  }
  return { page: "home" };
}

function handleRoute() {
  const route = getRoute();

  // Hide all views
  document.getElementById("home-view").style.display = "none";
  document.getElementById("collection-view").style.display = "none";
  document.getElementById("product-view").style.display = "none";

  // Update active nav
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
  });

  window.scrollTo({ top: 0, behavior: "smooth" });

  switch (route.page) {
    case "collection":
      renderCollectionPage(route.category);
      document.getElementById("collection-view").style.display = "block";
      // Set active nav
      document.querySelectorAll(".nav-link").forEach((link) => {
        if (link.dataset.category === route.category) link.classList.add("active");
      });
      break;
    case "product":
      renderProductPage(route.id);
      document.getElementById("product-view").style.display = "block";
      break;
    default:
      currentCategory = "all";
      searchQuery = "";
      currentSort = "default";
      renderHomeProducts();
      document.getElementById("home-view").style.display = "block";
      document.querySelector('.nav-link[data-category="all"]').classList.add("active");
      break;
  }
}

// ===== DOM Elements =====
function getDomElements() {
  return {
    productGrid: document.getElementById("product-grid"),
    cartSidebar: document.getElementById("cart-sidebar"),
    cartOverlay: document.getElementById("cart-overlay"),
    cartItems: document.getElementById("cart-items"),
    cartFooter: document.getElementById("cart-footer"),
    cartCount: document.getElementById("cart-count"),
    cartTotalPrice: document.getElementById("cart-total-price"),
    searchInput: document.getElementById("search-input"),
    sortSelect: document.getElementById("sort-select"),
    toast: document.getElementById("toast"),
  };
}

// ===== Render Stars =====
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return (
    "\u2605".repeat(full) +
    (half ? "\u00BD" : "") +
    "\u2606".repeat(empty)
  );
}

function renderStarsHTML(rating, reviews) {
  return `<span class="stars">${renderStars(rating)}</span> <span class="rating-number">${rating}</span>${reviews !== undefined ? ` <span class="review-count">(${reviews} reviews)</span>` : ""}`;
}

// ===== Product Card HTML =====
function productCardHTML(p, extraClasses = "") {
  const discount = p.oldPrice ? Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100) : 0;
  return `
    <div class="product-card ${extraClasses}" onclick="navigateTo('#/product/${p.id}')">
      ${discount ? `<div class="product-badge">-${discount}%</div>` : ""}
      <div class="product-image">${p.emoji}</div>
      <div class="product-info">
        <div class="product-category">${categoryMeta[p.category]?.name || p.category}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-rating">${renderStarsHTML(p.rating, p.reviews)}</div>
        <div class="product-bottom">
          <div class="product-price">
            $${p.price.toFixed(2)}
            ${p.oldPrice ? `<span class="old-price">$${p.oldPrice.toFixed(2)}</span>` : ""}
          </div>
          <button class="add-to-cart" data-id="${p.id}" onclick="event.stopPropagation(); addToCart(${p.id})">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
}

// ===== Home Page Products =====
function getFilteredProducts() {
  let filtered = [...products];

  if (currentCategory !== "all") {
    filtered = filtered.filter((p) => p.category === currentCategory);
  }

  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }

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
    case "rating":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
  }

  return filtered;
}

function renderHomeProducts() {
  const productGrid = document.getElementById("product-grid");
  const filtered = getFilteredProducts();

  if (filtered.length === 0) {
    productGrid.innerHTML = `<p class="no-products">No products found.</p>`;
    return;
  }

  productGrid.innerHTML = filtered.map((p, i) => {
    const delayClass = `reveal-delay-${(i % 4) + 1}`;
    return productCardHTML(p, `reveal ${delayClass}`);
  }).join("");

  // Re-observe new reveal elements
  requestAnimationFrame(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    productGrid.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  });
}

// ===== Collection Page =====
function renderCollectionPage(category) {
  const meta = categoryMeta[category];
  if (!meta) {
    navigateTo("#/");
    return;
  }

  const view = document.getElementById("collection-view");
  const categoryProducts = products.filter((p) => p.category === category);

  // Get price range
  const prices = categoryProducts.map((p) => p.price);
  const minPrice = Math.floor(Math.min(...prices));

  view.innerHTML = `
    <!-- Collection Banner -->
    <div class="collection-banner" style="--cat-color: ${meta.color}">
      <div class="container">
        <div class="breadcrumbs">
          <a href="#/">Home</a> <span>/</span> <span>${meta.name}</span>
        </div>
        <div class="collection-banner-content">
          <span class="collection-emoji">${meta.emoji}</span>
          <div>
            <h1>${meta.name}</h1>
            <p>${meta.tagline}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="collection-layout container">
      <!-- Sidebar -->
      <aside class="collection-sidebar">
        <div class="sidebar-section">
          <h3>About</h3>
          <p class="sidebar-desc">${meta.description}</p>
        </div>
        <div class="sidebar-section">
          <h3>Price Range</h3>
          <div class="price-filter">
            <label>
              <input type="checkbox" class="price-checkbox" data-min="0" data-max="25" checked> Under $25
            </label>
            <label>
              <input type="checkbox" class="price-checkbox" data-min="25" data-max="50" checked> $25 - $50
            </label>
            <label>
              <input type="checkbox" class="price-checkbox" data-min="50" data-max="100" checked> $50 - $100
            </label>
            <label>
              <input type="checkbox" class="price-checkbox" data-min="100" data-max="9999" checked> $100+
            </label>
          </div>
        </div>
        <div class="sidebar-section">
          <h3>Rating</h3>
          <div class="rating-filter">
            <label><input type="radio" name="rating-filter" value="0" checked> All Ratings</label>
            <label><input type="radio" name="rating-filter" value="4.5"> 4.5 & above</label>
            <label><input type="radio" name="rating-filter" value="4"> 4.0 & above</label>
          </div>
        </div>
        <div class="sidebar-section">
          <h3>Stats</h3>
          <div class="collection-stats">
            <div class="stat-item">
              <span class="stat-num">${categoryProducts.length}</span>
              <span class="stat-label">Products</span>
            </div>
            <div class="stat-item">
              <span class="stat-num">$${minPrice}</span>
              <span class="stat-label">From</span>
            </div>
            <div class="stat-item">
              <span class="stat-num">${categoryProducts.filter(p => p.oldPrice).length}</span>
              <span class="stat-label">On Sale</span>
            </div>
          </div>
        </div>
      </aside>

      <!-- Products -->
      <div class="collection-main">
        <div class="collection-toolbar">
          <span class="collection-count">${categoryProducts.length} products</span>
          <div class="sort-box">
            <label for="collection-sort">Sort by:</label>
            <select id="collection-sort">
              <option value="default">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Highest Rated</option>
              <option value="name">Name A-Z</option>
            </select>
          </div>
        </div>
        <div class="product-grid" id="collection-product-grid">
          ${categoryProducts.map((p) => productCardHTML(p)).join("")}
        </div>
      </div>
    </div>
  `;

  // Sort listener
  document.getElementById("collection-sort").addEventListener("change", () => {
    applyCollectionFilters(category);
  });

  // Price filter listeners
  view.querySelectorAll(".price-checkbox").forEach((cb) => {
    cb.addEventListener("change", () => applyCollectionFilters(category));
  });

  // Rating filter listeners
  view.querySelectorAll('input[name="rating-filter"]').forEach((rb) => {
    rb.addEventListener("change", () => applyCollectionFilters(category));
  });
}

function applyCollectionFilters(category) {
  const view = document.getElementById("collection-view");
  let filtered = products.filter((p) => p.category === category);

  // Price filter
  const checkedPrices = view.querySelectorAll(".price-checkbox:checked");
  if (checkedPrices.length > 0 && checkedPrices.length < 4) {
    const ranges = Array.from(checkedPrices).map((cb) => ({
      min: parseFloat(cb.dataset.min),
      max: parseFloat(cb.dataset.max),
    }));
    filtered = filtered.filter((p) =>
      ranges.some((r) => p.price >= r.min && p.price < r.max)
    );
  }

  // Rating filter
  const ratingValue = parseFloat(view.querySelector('input[name="rating-filter"]:checked')?.value || "0");
  if (ratingValue > 0) {
    filtered = filtered.filter((p) => p.rating >= ratingValue);
  }

  // Sort
  const sortValue = document.getElementById("collection-sort").value;
  switch (sortValue) {
    case "price-low":
      filtered.sort((a, b) => a.price - b.price);
      break;
    case "price-high":
      filtered.sort((a, b) => b.price - a.price);
      break;
    case "rating":
      filtered.sort((a, b) => b.rating - a.rating);
      break;
    case "name":
      filtered.sort((a, b) => a.name.localeCompare(b.name));
      break;
  }

  // Update count
  view.querySelector(".collection-count").textContent = `${filtered.length} product${filtered.length !== 1 ? "s" : ""}`;

  // Render
  const grid = document.getElementById("collection-product-grid");
  if (filtered.length === 0) {
    grid.innerHTML = `<p class="no-products">No products match your filters.</p>`;
  } else {
    grid.innerHTML = filtered.map((p) => productCardHTML(p)).join("");
  }
}

// ===== Product Detail Page =====
function renderProductPage(productId) {
  const product = products.find((p) => p.id === productId);
  if (!product) {
    navigateTo("#/");
    return;
  }

  const meta = categoryMeta[product.category];
  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 4);
  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  const view = document.getElementById("product-view");
  view.innerHTML = `
    <div class="container">
      <div class="breadcrumbs">
        <a href="#/">Home</a>
        <span>/</span>
        <a href="#/collection/${product.category}">${meta?.name || product.category}</a>
        <span>/</span>
        <span>${product.name}</span>
      </div>

      <div class="product-detail">
        <div class="product-detail-image">
          ${discount ? `<div class="product-badge product-badge-lg">-${discount}% OFF</div>` : ""}
          <div class="product-detail-emoji">${product.emoji}</div>
        </div>

        <div class="product-detail-info">
          <div class="product-detail-category" style="color: ${meta?.color || 'var(--primary)'}">${meta?.name || product.category}</div>
          <h1 class="product-detail-name">${product.name}</h1>

          <div class="product-detail-rating">
            ${renderStarsHTML(product.rating, product.reviews)}
          </div>

          <div class="product-detail-price-row">
            <span class="product-detail-price">$${product.price.toFixed(2)}</span>
            ${product.oldPrice ? `<span class="product-detail-old-price">$${product.oldPrice.toFixed(2)}</span>` : ""}
            ${discount ? `<span class="product-detail-discount">Save ${discount}%</span>` : ""}
          </div>

          <p class="product-detail-desc">${product.description}</p>

          <div class="product-detail-features">
            <h3>Key Features</h3>
            <ul>
              ${product.features.map((f) => `<li>${f}</li>`).join("")}
            </ul>
          </div>

          <div class="product-detail-actions">
            <div class="qty-selector">
              <button class="qty-selector-btn" id="detail-qty-minus">&minus;</button>
              <span id="detail-qty-value">1</span>
              <button class="qty-selector-btn" id="detail-qty-plus">&plus;</button>
            </div>
            <button class="btn btn-primary btn-add-to-cart" id="detail-add-to-cart">
              Add to Cart &mdash; $${product.price.toFixed(2)}
            </button>
          </div>

          <div class="product-meta-info">
            <div class="meta-item"><span>Category</span><a href="#/collection/${product.category}">${meta?.name || product.category}</a></div>
            <div class="meta-item"><span>Availability</span><strong style="color:#059669">In Stock</strong></div>
            <div class="meta-item"><span>Shipping</span><strong>Free shipping over $50</strong></div>
          </div>
        </div>
      </div>

      ${relatedProducts.length > 0 ? `
        <section class="related-products">
          <h2 class="section-title">You May Also Like</h2>
          <div class="product-grid">
            ${relatedProducts.map((p) => productCardHTML(p)).join("")}
          </div>
        </section>
      ` : ""}
    </div>
  `;

  // Qty controls
  let qty = 1;
  const qtyValue = document.getElementById("detail-qty-value");
  const addBtn = document.getElementById("detail-add-to-cart");

  document.getElementById("detail-qty-minus").addEventListener("click", () => {
    if (qty > 1) {
      qty--;
      qtyValue.textContent = qty;
      addBtn.textContent = `Add to Cart \u2014 $${(product.price * qty).toFixed(2)}`;
    }
  });

  document.getElementById("detail-qty-plus").addEventListener("click", () => {
    if (qty < 10) {
      qty++;
      qtyValue.textContent = qty;
      addBtn.textContent = `Add to Cart \u2014 $${(product.price * qty).toFixed(2)}`;
    }
  });

  addBtn.addEventListener("click", () => {
    for (let i = 0; i < qty; i++) {
      addToCart(product.id);
    }
  });
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
    cart.push({ id: product.id, name: product.name, price: product.price, emoji: product.emoji, qty: 1 });
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
  const { cartItems, cartFooter, cartCount, cartTotalPrice } = getDomElements();
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
  const { cartSidebar, cartOverlay } = getDomElements();
  cartSidebar.classList.add("open");
  cartOverlay.classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCart() {
  const { cartSidebar, cartOverlay } = getDomElements();
  cartSidebar.classList.remove("open");
  cartOverlay.classList.remove("open");
  document.body.style.overflow = "";
}

// ===== Toast =====
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2500);
}

// ===== Event Listeners =====
function initEventListeners() {
  const { cartItems, searchInput, sortSelect } = getDomElements();

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
  document.getElementById("cart-overlay").addEventListener("click", closeCart);

  // Navigation links
  document.querySelectorAll(".nav-link").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      const cat = el.dataset.category;
      if (cat === "all") {
        navigateTo("#/");
      } else {
        navigateTo(`#/collection/${cat}`);
      }
    });
  });

  // Category cards with transition
  document.querySelectorAll(".category-card").forEach((el) => {
    el.addEventListener("click", () => {
      const cat = el.dataset.category;
      const meta = categoryMeta[cat];
      if (!meta) return;

      // Click press effect
      el.classList.add("clicking");

      // Get card position for the expanding circle
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;

      // Setup transition overlay
      const overlay = document.getElementById("page-transition");
      const emoji = document.getElementById("page-transition-emoji");
      const name = document.getElementById("page-transition-name");
      const tagline = document.getElementById("page-transition-tagline");

      emoji.textContent = meta.emoji;
      name.textContent = meta.name;
      tagline.textContent = meta.tagline;

      // Create expanding circle background from card position
      overlay.style.background = `radial-gradient(circle at ${cx}px ${cy}px, ${meta.color} 0%, ${meta.color} 100%)`;
      overlay.style.clipPath = `circle(0% at ${cx}px ${cy}px)`;
      overlay.classList.add("active");

      // Animate the clip-path expansion
      requestAnimationFrame(() => {
        overlay.style.transition = "clip-path 0.5s cubic-bezier(.4,0,.2,1)";
        overlay.style.clipPath = `circle(150% at ${cx}px ${cy}px)`;
      });

      // Navigate after the glimpse
      setTimeout(() => {
        navigateTo(`#/collection/${cat}`);

        // Fade out overlay
        setTimeout(() => {
          overlay.style.transition = "opacity 0.3s ease";
          overlay.classList.remove("active");
          el.classList.remove("clicking");

          // Reset for next use
          setTimeout(() => {
            overlay.style.clipPath = "";
            overlay.style.transition = "";
          }, 300);
        }, 200);
      }, 700);
    });
  });

  // Footer category links
  document.querySelectorAll(".footer-col a[data-category]").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      navigateTo(`#/collection/${el.dataset.category}`);
    });
  });

  // Search
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    const route = getRoute();
    if (route.page === "home") {
      renderHomeProducts();
    }
  });

  // Sort (home page)
  sortSelect.addEventListener("change", (e) => {
    currentSort = e.target.value;
    renderHomeProducts();
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

  // Hash change
  window.addEventListener("hashchange", handleRoute);
}

// ===== Scroll Reveal (Intersection Observer) =====
function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
  );

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

  // Also observe dynamically rendered product cards
  const productObserver = new MutationObserver(() => {
    document.querySelectorAll(".product-card.reveal:not(.visible)").forEach((el) => {
      observer.observe(el);
    });
  });

  const productGrid = document.getElementById("product-grid");
  if (productGrid) {
    productObserver.observe(productGrid, { childList: true });
  }
}

// ===== Init =====
document.addEventListener("DOMContentLoaded", () => {
  initEventListeners();
  renderCart();
  handleRoute();
  initScrollReveal();
});
