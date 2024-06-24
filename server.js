const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Sample in-memory storage for coupons
let coupons = [];

// Routes
app.post('/coupons', (req, res) => {
    const { coupon } = req.body;

    if (!coupon) {
        return res.status(400).json({ error: 'Coupon data is required' });
    }

    coupons.push(coupon);
    res.status(201).json({ message: 'Coupon created successfully', coupon });
});

app.get('/coupons', (req, res) => {
    res.json(coupons);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
