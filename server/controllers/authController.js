const router = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');


router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const salt = await bcrypt.genSalt();
        const hashedPass = await bcrypt.hash(password, salt);

        User.findOne({ email }).then((user) => {
            if (user) {
                res.send('bad');
            } else {
                const newUser = new User({
                    username,
                    email,
                    password: hashedPass
                });
                newUser.save()
                    .then(createdUser => {
                        res.status(201).send(createdUser._id);
                    })
                    .catch((err) => console.log(err));

            };
        }).catch((err) => console.log(err));

    } catch (error) {
        console.log(error);
    };
});


router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    User.findOne({ email }).then(user => {
        if (user) {
            bcrypt.compare(password, user.password, function (err, response) {
                if (response) {
                    const token = jwt.sign({
                        _id: user._id,
                        username: user.username,
                    }, process.env.SECRET_KEY);

                    res.status(200).json({ token, username: user.username });
                } else {
                    res.send('pass');
                };
            });
        } else {
            res.send('email');
        };
    });
});


module.exports = router;