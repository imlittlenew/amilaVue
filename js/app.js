const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(bodyParser.json());
app.listen(8000);
const usersFilePath = '../json/users.json';
app.use(cors());

// 讀取users.json
function getUsers() {
  try {
    const usersData = fs.readFileSync(usersFilePath);
    return JSON.parse(usersData);
  } catch (error) {
    return [];
  }
}

// 寫入users.json
function saveUsers(users) {
  const data = JSON.stringify(users);
  fs.writeFileSync(usersFilePath, data);
}

// 註冊路由
app.post('/register', (req, res) => {
  const { email, password } = req.body;
  const users = getUsers();
  const maxUserId = users.reduce((maxId, user) => {
    return user.id > maxId ? user.id : maxId;
  }, 0);
  
  // 產生 userId
  const id = maxUserId + 1;

  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    res.status(400).send('使用者已存在');
  } else {
    users.push({ id, email, password });
    saveUsers(users);
    res.status(201).send('使用者註冊成功');
  }
});

// 登入路由
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const users = getUsers();
  const user = users.find(user => user.email === email && user.password === password);
  if (user) {
    res.status(200).json({ userId: user.id, userEmail: user.email });
  } else {
    res.status(401).send('電子郵件或密碼錯誤');
  }
});

// 忘記密碼路由
app.post('/forgotPassword', (req, res) => {
  const { email } = req.body;
  const users = getUsers();
  const user = users.find(user => user.email === email);
  if (user) {
    res.status(200).send('密碼重設郵件已發送');
  } else {
    res.status(404).send('會員不存在');
  }
});

const cartFilePath = '../json/cart.json';

// 獲取下個 cartId
function getNextCartId(callback) {
    fs.readFile(cartFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error('錯誤讀取 cart.json:', err);
            callback(err);
            return;
        }
        let orders = [];
        let cartId = 1;
        if (data) {
            orders = JSON.parse(data);
            if (orders.length > 0) {
                cartId = orders[orders.length - 1].cartId + 1;
            }
        }
        callback(null, cartId);
    });
}
// 計算總數量總金額
function calculateTotalQuantityAndAmount(cartItems) {
  let totalQuantity = 0;
  let totalPrice = 0;
  cartItems.forEach(item => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
  });
  return { totalQuantity, totalPrice };
}

// 提交訂單路由
app.post('/submitOrder', (req, res) => {

  const { userId, userEmail, cartItems, userFormData, paymentMethod } = req.body;

  getNextCartId((err, cartId) => {
      if (err) {
          console.error('錯誤:', err);
          res.status(500).send('內部伺服器錯誤');
          return;
      }
      const currentDate = new Date();
      const orderDate = `${currentDate.getFullYear()}-${(currentDate.getMonth() + 1).toString().padStart(2, '0')}-${currentDate.getDate().toString().padStart(2, '0')}`;
      const orderTime = `${currentDate.getHours().toString().padStart(2, '0')}:${currentDate.getMinutes().toString().padStart(2, '0')}`;
      const { totalQuantity, totalPrice } = calculateTotalQuantityAndAmount(cartItems);
      const order = {
          cartId,
          userId,
          userEmail,
          items: cartItems.map(item => ({
              title: item.title,
              price: item.price,
              quantity: item.quantity,
              totalAmount: item.price * item.quantity
          })),
          userFormData,
          paymentMethod,
          orderDate,
          orderTime,
          totalQuantity,
          totalPrice
      };

      fs.readFile(cartFilePath, 'utf8', (err, data) => {
          if (err) {
              console.error('錯誤讀取 cart.json:', err);
              res.status(500).send('內部伺服器錯誤');
              return;
          }
          let orders = [];
          if (data) {
              orders = JSON.parse(data);
          }
          orders.push(order);
          fs.writeFile(cartFilePath, JSON.stringify(orders, null, 2), err => {
              if (err) {
                  console.error('錯誤寫入 cart.json:', err);
                  res.status(500).send('內部伺服器錯誤');
                  return;
              }
              res.status(200).json({ cartId });
          });
      });
  });
});

// 取得 JSON 訂單資料路由
app.post('/userOrders', (req, res) => {
  const { userId } = req.body;
  fs.readFile(cartFilePath, 'utf8', (err, data) => {
      if (err) {
          console.error('錯誤讀取 cart.json:', err);
          res.status(500).send('內部伺服器錯誤');
          return;
      }
      let orders = [];
      if (data) {
          orders = JSON.parse(data);
      }
      const userOrders = orders.filter(order => order.userId === userId);
      res.status(200).json(userOrders);
  });
});