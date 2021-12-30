const router = require('express').Router();
const Item = require('../models/item');
const User = require('../models/user');
const auth = require('../middlewears/auth')

router.get('/items', (req, res) => {
    Item.find({}).then(items => {
        res.send(items);
    });
});
router.get('/users', (req, res) => {
    User.find({}).then(users => {
        res.send(users);
    });
});
router.get('/user', (req, res) => {
    User.find({}).then(user => {
        res.send(user);
    })
})

module.exports = router;