const express = require('express');
const router = express.Router();

// Sample route for user authentication
router.get('/signup', (req, res) => {
    res.send('User signup');
})

router.get('/login', (req, res) => {
    res.send('User login');
})

router.get('/logout', (req, res) => {
    res.send('User logout');
})

module.exports = router;