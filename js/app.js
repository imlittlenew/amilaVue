const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(bodyParser.json());
app.listen(8000);
const usersFilePath = '../json/users.json';
app.use(cors());
// 读取用户数据
function getUsers() {
  try {
    const usersData = fs.readFileSync(usersFilePath);
    return JSON.parse(usersData);
  } catch (error) {
    return [];
  }
}

// 写入用户数据
function saveUsers(users) {
  const data = JSON.stringify(users);
  fs.writeFileSync(usersFilePath, data);
}

// 注册新用户
app.post('/register', (req, res) => {
  const { email, password } = req.body;
  const users = getUsers();
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    res.status(400).send('User already exists');
  } else {
    users.push({ email, password });
    saveUsers(users);
    res.status(201).send('User registered successfully');
  }
});

// 登录用户
app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const users = getUsers();
  const user = users.find(user => user.email === email && user.password === password);
  if (user) {
    res.status(200).send('登入成功');
  } else {
    res.status(401).send('電子郵件或密碼錯誤');
  }
});

// 检查电子邮件是否存在
app.post('/forgot-password', (req, res) => {
  const { email } = req.body;
  const users = getUsers();
  const user = users.find(user => user.email === email);
  if (user) {
    res.status(200).send('發送成功');
  } else {
    res.status(404).send('會員不存在');
  }
});
