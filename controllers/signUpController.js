const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { registerValidation } = require('../middlewares/validation');


const signUp = async (req, res) => {
    try {

        //validate data
        const error = registerValidation(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        //check if this email is already used
        const userExists = await User.findOne({ email: req.body.email });
        if (userExists) {
            return res.status(400).json({ error: 'Email already exists.' });
        }

        //create new user
        const user = req.body;

        //const newUser = await User.create(user);

        /* const salt = await bycrypt.genSalt(10);
        const hashedPass = await bycrypt.hash(req.body.password,salt); */
        const hashedPass = await bcrypt.hash(req.body.password, 10);
        
        user.password = hashedPass;
        const newUser = await User.create(user);

        //generate token containing user ID
        const accessTocken = jwt.sign({ id: newUser._id }, process.env.ACCESS_TOKEN_SECRET);
        //send it in response header
        res.header('auth-token', accessTocken).send("Signed Up.");

    } catch (err) {
        res.status(500).json({
            status: "error",
            error: err.message,
        });
    }
};

module.exports = signUp;
