const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const { registerValidation } = require('../middlewares/validation');


const signUp = async (req, res) => {
    try {

        const { name, email, password } = req.body;

        //validate data
        const error = registerValidation(req.body);
        if (error) {
            return res.status(400).json({ error: error.details[0].message });
        }

        //check if this email is already used
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ error: 'Email already exists.' });
        }

        //create new user
        //const newUser = await new User({ name: name, email: email, password: password}).save();

        /* const salt = await bycrypt.genSalt(10);
        const hashedPass = await bycrypt.hash(req.body.password,salt); */
        const hashedPass = await bcrypt.hash(password, 10);

        const newUser = await new User({ name: name, email: email, password: hashedPass }).save();

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
