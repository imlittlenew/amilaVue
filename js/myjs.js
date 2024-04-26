
// // AOS 初始化
// AOS.init({
//   offset: 100,
//   duration: 600,
//   easing: 'ease-in-out',
//   delay: 100,
//   once: false // 這個選項將允許動畫在每次元素出現時觸發
// });

// // 當頁面復原時（例如返回到此頁面），重新啟動 AOS 動畫
// window.addEventListener('load', function () {
//   AOS.refresh();
// });


// document.querySelectorAll(".hover").forEach(function (element) {
//   element.addEventListener('mouseleave', function () {
//     this.classList.remove("hover");
//   });
// });


// function decreaseQuantity() {
//   var quantityInput = document.getElementById('quantity');
//   var currentValue = parseInt(quantityInput.value);
//   if (!isNaN(currentValue) && currentValue > 1) {
//     quantityInput.value = currentValue - 1;
//   }
// }

// function increaseQuantity() {
//   var quantityInput = document.getElementById('quantity');
//   var currentValue = parseInt(quantityInput.value);
//   if (!isNaN(currentValue)) {
//     quantityInput.value = currentValue + 1;
//   }
// }

// function sortProducts(value) {
//   switch (value) {
//     case "lowToHigh":
//       sortProductsByPriceLowToHigh();
//       break;
//     case "highToLow":
//       sortProductsByPriceHighToLow();
//       break;
//     // 你可以继续添加其他值的处理
//     default:
//       break;
//   }
// }



// // 排序
// function sortProductsByPriceLowToHigh() {
//   const products = Array.from(document.querySelectorAll('.col-md-9 .card'));

//   products.sort((a, b) => {
//     const priceA = parseFloat(a.querySelector('.card-text b').innerText.replace('NT$', ''));
//     const priceB = parseFloat(b.querySelector('.card-text b').innerText.replace('NT$', ''));

//     return priceA - priceB;
//   });

//   const productList = document.querySelector('.col-md-9 .row');
//   productList.innerHTML = '';

//   products.forEach(product => {
//     productList.appendChild(product.parentElement);
//   });

//   // 移除之前設置的 flex 布局
//   document.querySelectorAll('.col-md-9 .row .card').forEach(card => {
//     card.style.flex = 'initial'; // 移除 flex 樣式
//     card.style.width = '100%'; // 設置寬度為 100%
//     card.classList.remove('col-md-3'); // 移除之前設置的列樣式
//   });
// }


// function sortProductsByPriceHighToLow() {
//   const products = Array.from(document.querySelectorAll('.col-md-9 .card'));

//   products.sort((a, b) => {
//     const priceA = parseFloat(a.querySelector('.card-text b').innerText.replace('NT$', ''));
//     const priceB = parseFloat(b.querySelector('.card-text b').innerText.replace('NT$', ''));

//     return priceB - priceA;
//   });

//   const productList = document.querySelector('.col-md-9 .row');
//   productList.innerHTML = '';

//   products.forEach(product => {
//     productList.appendChild(product.parentElement);
//   });

//   // 移除之前設置的 flex 布局
//   document.querySelectorAll('.col-md-9 .row .card').forEach(card => {
//     card.style.flex = 'initial'; // 移除 flex 樣式
//     card.style.width = '100%'; // 設置寬度為 100%
//     card.classList.remove('col-md-3'); // 移除之前設置的列樣式
//   });
// }




// // 已加入購物車
// document.addEventListener('DOMContentLoaded', function () {
//   var addToCartBtn = document.getElementById('addToCartBtn');
//   var modal = document.getElementById('exampleModal');
//   var cartMessage = document.getElementById('cartMessage');

//   addToCartBtn.addEventListener('click', function () {
//     // 顯示加入購物車訊息
//     cartMessage.style.display = 'block';

//     // 一段時間後隱藏訊息（例如：1秒後）
//     setTimeout(function () {
//       var modalInstance = bootstrap.Modal.getInstance(modal);
//       modalInstance.hide();
//       cartMessage.style.display = 'none';
//     }, 1000);

//   });
// });


// 抓價格和商品名稱
// document.addEventListener('DOMContentLoaded', function () {
//   function displayInModal(event) {
//     var button = event.target;
//     var card = button.closest('.col');

//     var imgSrc = card.querySelector('.card-img-top').getAttribute('src');
//     var title = card.querySelector('.card-title').textContent.trim();
//     var price = card.querySelector('.card-text').textContent.trim();

//     var modalImg = document.getElementById('imgDog01');
//     var modalTitle = document.getElementById('modalTitle');
//     var modalPrice = document.getElementById('modalPrice');

//     modalImg.src = imgSrc;
//     modalTitle.textContent = title;
//     modalPrice.textContent = price;
//   }

//   var addToCartButtons = document.querySelectorAll('.btn-outline-dark');
//   addToCartButtons.forEach(function (button) {
//     button.addEventListener('click', displayInModal);
//   });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   var prevScrollpos = window.pageYOffset; // 儲存先前的捲動位置
//   var backToTopBtn = document.getElementById("backToTopBtn");

//   window.addEventListener("scroll", function () {
//     var currentScrollPos = window.pageYOffset; // 當前捲動位置

//     if ((currentScrollPos > 100 && currentScrollPos !== 0) && prevScrollpos > currentScrollPos) {
//       backToTopBtn.style.opacity = "1"; // 捲動往上，顯示按鈕
//     } else {
//       backToTopBtn.style.opacity = "0"; // 捲動往下，隱藏按鈕
//     }

//     prevScrollpos = currentScrollPos; // 更新先前捲動位置
//   });

//   function scrollToTop() {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth"
//     });
//   }

//   backToTopBtn.addEventListener("click", scrollToTop); // 點擊按鈕後捲動到頂部
// });

// document.addEventListener("DOMContentLoaded", function () {
//   var secondKnowledgeSection = document.getElementById('secondKnowledgeSection');
//   var thirdKnowledgeSection = document.getElementById('thirdKnowledgeSection');
//   var showMoreBtn = document.getElementById('showMoreBtn');

//   if (secondKnowledgeSection && thirdKnowledgeSection && showMoreBtn) {
//     // 执行与这些元素相关的逻辑
//     secondKnowledgeSection.style.visibility = 'hidden';
//     secondKnowledgeSection.style.height = '0';
//     secondKnowledgeSection.style.overflow = 'hidden';
//     thirdKnowledgeSection.style.visibility = 'hidden';
//     thirdKnowledgeSection.style.height = '0';
//     thirdKnowledgeSection.style.overflow = 'hidden';

//     let toggleState = 0; // 0: 隱藏全部, 1: 第二筆可見, 2: 第三筆可見

//     showMoreBtn.addEventListener('click', function () {
//       if (toggleState === 0) {
//         secondKnowledgeSection.style.visibility = 'visible';
//         secondKnowledgeSection.style.height = 'auto';
//         secondKnowledgeSection.style.overflow = 'visible';
//         toggleState = 1;
//       } else {
//         thirdKnowledgeSection.style.visibility = 'visible';
//         thirdKnowledgeSection.style.height = 'auto';
//         thirdKnowledgeSection.style.overflow = 'visible';
//         showMoreBtn.style.display = 'none'; // 隐藏按钮
//         toggleState = 2;
//       }
//     });
//   }
// });

// 登入註冊

// JavaScript
// document.addEventListener("DOMContentLoaded", function () {
//   const toggleRegister = document.getElementById("toggleRegister");
//   const toggleLogin = document.getElementById("toggleLogin");
//   const toggleforgot = document.getElementById("toggleforgot");
//   const loginForm = document.getElementById("loginForm");
//   const forgotPasswordForm = document.getElementById("forgotPasswordForm");
//   const registerForm = document.getElementById("registerForm");

//   // 初始状态隐藏注册表单
//   registerForm.classList.add("d-none");
//   forgotPasswordForm.classList.add("d-none");
//   // 点击"忘記密碼"超链接时显示登入表单
//   toggleforgot.addEventListener("click", function (event) {
//     event.preventDefault();
//     loginForm.style.display = "none";
//     forgotPasswordForm.classList.remove("d-none");
//   });
//   // 点击"免费注册"超链接时显示注册表单
//   toggleRegister.addEventListener("click", function (event) {
//     event.preventDefault();
//     loginForm.style.display = "none";
//     registerForm.classList.remove("d-none");
//     registerForm.classList.add("slideIn");
//   });

//   // 点击"登入"超链接时显示登入表单
//   toggleLogin.addEventListener("click", function (event) {
//     event.preventDefault();
//     registerForm.classList.remove("slideIn");
//     registerForm.classList.add("slideOut");
//     loginForm.classList.remove("slideOut");
//     loginForm.classList.add("slideIn");
//   });



//   // 动画结束时隐藏注册表单
//   registerForm.addEventListener("animationend", function () {
//     if (registerForm.classList.contains("slideOut")) {
//       registerForm.classList.add("d-none");
//       registerForm.classList.remove("slideOut");
//       loginForm.style.display = "block";
//     }
//   });
//   //忘記密碼驗證
//   forgotPasswordForm.addEventListener('submit', function (event) {
//     event.preventDefault();

//     const forgotPasswordEmail = document.getElementById('forgotPasswordEmail');
//     const email = forgotPasswordEmail.value.trim();
//     if (!isValidEmail(email)) {
//       alert('請輸入有效的郵件地址');
//       return;
//     }

//     // Display login success message and redirect after a delay
//     showSuccessMessage('forgotPasswordSuccessAlert');

//     // 延迟3秒后重定向到 index.html
//     setTimeout(function () {
//       forgotPasswordForm.classList.add("d-none");
//       loginForm.style.display = 'block';

//     }, 1000);
//   });


//   //表單驗證
//   loginForm.addEventListener('submit', function (event) {
//     event.preventDefault();

//     const emailInput = document.getElementById('loginEmail');
//     const email = emailInput.value.trim();
//     if (!isValidEmail(email)) {
//       alert('請輸入有效的郵件地址');
//       return;
//     }

//     // Display login success message and redirect after a delay
//     showSuccessMessage('loginSuccessAlert');

//     // 延迟3秒后重定向到 index.html
//     setTimeout(function () {
//       window.location.href = 'index.html';
//     }, 500); // 3000 毫秒 = 3 秒
//   });

//   function isValidEmail(email) {
//     const emailPattern = /\S+@\S+\.\S+/;
//     return emailPattern.test(email);
//   }
//   registerForm.addEventListener('submit', function (event) {
//     event.preventDefault();

//     const emailInput = document.getElementById('floatingInput');
//     const passwordInput = document.getElementById('floatingPassword');

//     const email = emailInput.value.trim();
//     const password = passwordInput.value.trim();

//     // 邮箱验证
//     if (!isValidEmail(email)) {
//       alert('請輸入有效的郵件地址');
//       return;
//     }

//     // Save registered email and password to localStorage
//     localStorage.setItem('registeredEmail', email);
//     localStorage.setItem('registeredPassword', password);

//     // Display register success message without redirecting
//     showSuccessMessage('registerSuccessAlert', 'login-signup.html');
//   });

//   // Function to display success message and redirect after a delay
//   function showSuccessMessage(elementId) {
//     const successAlert = document.getElementById(elementId);
//     successAlert.style.display = 'block';

//     setTimeout(function () {
//       successAlert.style.display = 'none';
//       loginForm.classList.remove("slideIn");
//       registerForm.classList.contains("slideOut");
//       if (registerForm.classList.contains("slideOut")) {
//         registerForm.classList.add("d-none");
//         registerForm.classList.remove("slideOut");
//       }
//       // 顯示登入表單並自動填寫憑證
//       loginForm.style.display = 'block';
//       registerForm.classList.add("d-none");
//       const emailInput = document.getElementById('loginEmail');
//       const passwordInput = document.getElementById('loginPassword');
//       const rememberedEmail = localStorage.getItem('registeredEmail');
//       const rememberedPassword = localStorage.getItem('registeredPassword');

//       if (rememberedEmail && rememberedPassword) {
//         emailInput.value = rememberedEmail;
//         passwordInput.value = rememberedPassword;
//       }

//     }, 1000);
//   }
// });

// document.addEventListener('DOMContentLoaded', function () {
//   const addToCartButton = document.getElementById('addToCartBtn');

//   if (addToCartButton) {
//     addToCartButton.addEventListener('click', function () {
//       const modalTitle = document.getElementById('modalTitle').textContent;
//       const modalPrice = document.getElementById('modalPrice').textContent;
//       const quantity = document.getElementById('quantity').value;

//       // 获取本地存储的购物车数据，如果存在则解析，否则初始化为空数组
//       const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

//       // 将新商品信息添加到购物车数组中
//       cartItems.push({
//         title: modalTitle,
//         price: modalPrice,
//         quantity: quantity
//       });

//       // 将更新后的购物车数据重新存储到 localStorage 中
//       localStorage.setItem('cartItems', JSON.stringify(cartItems));

//       // 更新购物车数量的显示
//       updateCartItemCount('.cart-badge-form');
//       updateCartItemCount('.cart-badge-nav');
//     });
//   }
// });


document.addEventListener('DOMContentLoaded', function () {
  const cartList = document.getElementById('cartList');

  function displayCartItems() {
    cartList.innerHTML = ''; // 清空购物车列表

    // 获取本地存储的购物车数据
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    let totalPrice = 0; // 初始化总价

    // 遍历购物车数据，创建并显示列表项
    cartItems.forEach(function (cartItem) {
      const listItem = document.createElement('li');
      listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'lh-sm');

      const itemName = document.createElement('div');
      itemName.innerHTML = `<h6 class="my-0">${cartItem.title}</h6>`;

      const itemQuantity = cartItem.quantity || 1; // 如果未定义数量，则默认为1
      const itemPrice = parseFloat(cartItem.price.replace(/\D/g, '')); // 从价格中提取数字部分
      const totalItemPrice = itemQuantity * itemPrice; // 计算单项商品总价

      const itemPriceElement = document.createElement('span');
      itemPriceElement.classList.add('text-body-secondary');
      itemPriceElement.textContent = `$${totalItemPrice}`;

      listItem.appendChild(itemName);
      listItem.appendChild(itemPriceElement);
      cartList.appendChild(listItem);

      // 计算总价
      totalPrice += totalItemPrice;
    });

    const totalListItem = document.createElement('li');
    totalListItem.classList.add('list-group-item', 'd-flex', 'justify-content-between');
    totalListItem.innerHTML = `
      <span>總額 (NT)</span>
      <strong>$${totalPrice}</strong>
    `;
    cartList.appendChild(totalListItem);
  }

  displayCartItems(); // 显示购物车中的商品信息

});

// function updateCartItemCount(selector) {
//   const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
//   let totalQuantity = 0;

//   cartItems.forEach(function (cartItem) {
//     totalQuantity += parseInt(cartItem.quantity);
//   });

//   const badgeElement = document.querySelector(selector);
//   if (badgeElement) {
//     badgeElement.textContent = totalQuantity;
//   }
// }

// // 更新表单中的购物车徽章
// updateCartItemCount('.cart-badge-form');

// // 更新导航栏中的购物车徽章
// updateCartItemCount('.cart-badge-nav');





cartForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // 获取表单中需要验证的元素
  const firstName = document.getElementById('firstName');
  const lastName = document.getElementById('lastName');
  const email = document.getElementById('email');
  const address = document.getElementById('address');
  const country = document.getElementById('country');
  const state = document.getElementById('state');
  const zip = document.getElementById('zip');

  const cartList = document.getElementById('cartList');
  const cartSuccessAlert = document.getElementById('cartSuccessAlert');

  // 简单的示例验证，你可以根据需要进行更多的验证
  if (firstName.value && lastName.value && email.value && address.value && country.value && state.value && zip.value) {
    // 清空购物车列表
    cartList.innerHTML = '';
    localStorage.removeItem('cart');
    // 显示下单成功的消息
    cartSuccessAlert.style.display = 'block';

    // 延迟一段时间后重定向到 index.html
    setTimeout(function () {
      window.location.href = 'index.html';
    }, 500); // 500 毫秒 = 0.5 秒
  } else {
    // 如果表单未填写完整，显示错误或提醒用户填写完整表单
    cartfailAlert.style.display = 'block';
    setTimeout(function () {
      cartfailAlert.style.display = 'none';
    }, 1000);
  }
});

document.addEventListener('DOMContentLoaded', function () {
  // 检查本地存储中的购物车数据
  const cartData = JSON.parse(localStorage.getItem('cartItems'));

  // 如果购物车数据存在，则清空它
  if (cartData && cartData.length > 0) {
    localStorage.removeItem('cartItems');
  }
});



// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})()
// 獲取所有支付方式的單選按鈕
const paymentMethods = document.querySelectorAll('input[name="paymentMethod"]');

// 獲取信用卡輸入欄位的父級元素
const creditCardDetails = document.querySelectorAll('.credit-card-details');

// 對每個支付方式的單選按鈕添加監聽器
paymentMethods.forEach(function (method, index) {
  method.addEventListener('change', function () {
    // 隱藏所有信用卡輸入欄位
    creditCardDetails.forEach(function (detail) {
      detail.style.display = 'none';
    });

    // 如果選中信用卡支付方式，顯示相關的信用卡輸入欄位
    if (this.id === 'credit') {
      creditCardDetails.forEach(function (detail) {
        detail.style.display = 'block';
      });
    }
  });
});

function showSearchOverlay() {
  const searchOverlay = document.getElementById('searchOverlay');
  searchOverlay.style.display = 'flex'; // 显示遮罩层
}

// function searchProducts(searchTerm) {
//   const lowerCaseSearchTerm = searchTerm.toLowerCase();
//   const products = document.querySelectorAll('.product');

//   products.forEach(product => {
//     const productName = product.querySelector('h3').innerText.toLowerCase();
//     const productDescription = product.querySelector('p').innerText.toLowerCase();

//     // 检查商品名称或描述中是否包含搜索词，如果包含则显示，否则隐藏
//     if (productName.includes(lowerCaseSearchTerm) || productDescription.includes(lowerCaseSearchTerm)) {
//       product.classList.remove('hidden'); // 移除隐藏类
//     } else {
//       product.classList.add('hidden'); // 添加隐藏类
//     }
//   });
// }

// function toggleSearch() {
//   const overlay = document.getElementById('searchOverlay');
//   overlay.style.display = 'flex';
//   const input = document.getElementById('searchInput');
//   input.focus();

//   // 监听输入框的键盘按下事件
//   input.addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') {
//       overlay.style.display = 'none'; // 按下 Enter 键后关闭搜索框
//     }
//   });
// }
