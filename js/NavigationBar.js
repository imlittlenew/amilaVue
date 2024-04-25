// NavigationBar.js

// 定義 Vue 組件
const NavigationBar = {
  template: `
    <nav class="navbar navbar-expand-lg navbar sticky-top shadow mt-0 mb-0 bg-body" style="background-color: white;">
      <div class="container">
        <a class="navbar-brand fs-5 fw-bold mt-1" :href="'index.html'">
          <img src="img/logo.png" alt="Logo" width="45" height="36" class="d-inline-block align-text-center ">AMILA</a>
        <button class="navbar-toggler" style="padding: 0 10px 0 10px;" type="button" data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <!-- 導覽連結 -->
            <li class="nav-item">
              <a class="nav-link  fw-bold fs-5" :href="'allProducts.html'">所有商品</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold fs-5" :href="'knowledgePage.html'">毛孩保健知識</a>
            </li>
            <li class="nav-item">
              <a class="nav-link fw-bold fs-5" aria-current="page" :href="'aboutAmila.html'">關於阿米拉</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle fw-bold fs-5" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                常見問題
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item  fs-5" :href="'orderProblem.html'">商品問題</a></li>
                <li><a class="dropdown-item  fs-5" :href="'returnOrExchange.html'">退換貨須知</a></li>
                <li><a class="dropdown-item  fs-5" :href="'delivery.html'">運送政策</a></li>
              </ul>
            </li>
          </ul>
          <!-- 搜索表單 -->
          <form class="d-flex" role="search" @submit.prevent="searchProducts">
            <a href="#" class="btn text-nowrap" @click="toggleSearch($event)">
              <img src="img/search.png" class="d-block img-fluid" alt="search">
            </a>
            <div class="search-overlay" id="searchOverlay">
              <div class="search-form search-form--full-screen" id="searchForm">
                <div class="search-container">
                  <img src="img/bigsearch.png" class="search-icon" alt="search">
                  <input type="text" v-model="searchTerm" placeholder="Search..." class="search-input" @keypress.enter="searchProducts" ref="searchInput">
                  </div>
              </div>
            </div>
            <!-- 購物車圖標 -->
            <a :href="'cart.html'" class="btn text-nowrap" id="cartIconWrapper">
              <img src="img/cart.png" class="d-block img-fluid" alt="cart">
              <span class="badge bg-dark rounded-pill cart-badge-nav" id="cartBadge">{{ cartItemCount }}</span>
            </a>
            <!-- 用戶圖標 -->
            <a :href="'user.html'" class="btn text-nowrap"><img src="img/user.png" class="d-block img-fluid" alt="user"></a>
          </form>
        </div>
      </div>
    </nav>
  `,
  data() {
    return {
      searchTerm: "",
      cartItemCount: 0,
    };
  },
  created() {
    // 在組件創建時，獲取購物車項目數量
    this.cartItemCount = this.getCartItemCount();
  },
  methods: {
    toggleSearch(event) {
      event.preventDefault(); // 阻止默认行为
      const searchOverlay = document.getElementById('searchOverlay');
      searchOverlay.style.display = 'flex'; // 显示遮罩层
    },
    
  
    searchProducts() {
      // 儲存搜索關鍵字到 localStorage
      localStorage.setItem('searchTerm', this.searchTerm);
      // 使用 Promise 延遲跳轉，確保 localStorage 操作完成
      new Promise(resolve => {
        setTimeout(() => {
          resolve();
        }, 700); // 設置一個適當的延遲時間
      }).then(() => {
        // 執行跳轉功能
        window.location.href = 'searchForProducts.html';
      });
    },
    
    navigateTo(url) {
      window.location.href = url;
    },
    updateCartItemCount(selector) {
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      let totalQuantity = 0;

      cartItems.forEach(function (cartItem) {
        totalQuantity += parseInt(cartItem.quantity);
      });

      const badgeElement = document.querySelector(selector);
      if (badgeElement) {
        badgeElement.textContent = totalQuantity;
      }
    },
    getCartItemCount() {
      const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      let totalQuantity = 0;

      cartItems.forEach(function (cartItem) {
        totalQuantity += parseInt(cartItem.quantity);
      });

      return totalQuantity;
    },
  },
};
