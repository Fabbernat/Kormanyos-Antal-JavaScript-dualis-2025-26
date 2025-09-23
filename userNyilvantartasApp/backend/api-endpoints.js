const express = require('express');

const router = express.Router();

const fileRelativePath = '../';
const fileName = 'TEST_USER_DATA';
const filePath = path.join(__dirname, '..', 'TEST_USER_DATA');
    
let users = [];
try {
    const data = fs.readFileSync(filePath, 'utf8');
    users = JSON.parse(data);
} catch (err) {
    console.error('Could not read TEST_USER_DATA, starting with empty users array:', err);
    users = [];
}
console.log(users.toString());

router.post('/api/register', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: 'Username and password required.' });
    }
    if (users.find(u => u.username === username)) {
        return res.status(409).json({ message: 'Username already exists.' });
    }
    users.push({ username, password });
    res.status(201).json({ message: 'User registered successfully.' });
});

router.post('/api/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find(u => u.username === username && u.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials.' });
    }
    res.json({ message: 'Login successful.' });
});

module.exports = router;