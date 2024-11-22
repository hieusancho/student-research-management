const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const SECRET_KEY = 'mysecretkey';
const users = []; // Temporary in-memory storage for users

// Register API
app.post('/api/register', (req, res) => {
  const { username, email, password } = req.body;

  // Check if user already exists
  if (users.find(user => user.email === email)) {
    return res.status(400).json({ message: 'Email đã tồn tại!' });
  }

  // Hash the password
  const hashedPassword = bcrypt.hashSync(password, 10);
  users.push({ username, email, password: hashedPassword });
  res.status(200).json({ message: 'Đăng ký thành công!' });
});

// Login API
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;
  const user = users.find(user => user.email === email);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ message: 'Thông tin đăng nhập không hợp lệ!' });
  }

  const token = jwt.sign({ email: user.email }, SECRET_KEY, { expiresIn: '1h' });
  res.status(200).json({ message: 'Đăng nhập thành công!', token });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});