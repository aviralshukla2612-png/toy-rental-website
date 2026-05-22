const User = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// create JWT token
const createToken = (user) =>
    jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1d' });


// register user
exports.register = async (req, res) => {
    try {
        const { username, name, email, password, dob, number, gender, address } = req.body;

        // check if user already exists
        const existingUser = await User.findOne({ $or: [{ email }, { username }] });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email or username already exists' });
        }

        const user = new User({
            username,
            name,
            email,
            password,
            dob,
            number,
            gender,
            address,
            role: 'user'
        })
        await user.save();
        res.status(201).json({ message: 'User registered successfully', data: user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// login user
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({ message: 'Email and password are required' });
        };

        // find user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }

        // compare password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const token = createToken(user);
        res.json({ message: 'Login successful', token, data: user });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Admin register

exports.registerAdmin = async(req,res)=>{
    try{
        const{ username, name, email, password} = req.body;
      
        const existingAdmin = await User.findOne({email});
        if(existingAdmin) {
            return res.status(400).json({message:"Admin already exists"});
        }


        const admin = await User.create({
            username,
            name,
            email,
            password: password,
            role: 'admin'
        });
        res.status(201).json({message:"Admin registered successfully",admin});

    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};

// Admin login

exports.loginAdmin = async(req,res)=>{
    try{
        const{email,password}=req.body;

        const admin = await User.findOne({email});
        if(!admin){
            return res.status(400).json({message:"Invalid email or password"});
        }
        const ismatch = await bcrypt.compare(password,admin.password);
        if(!ismatch){
            return res.status(400).json({message:"Invalid email or password"});
        }

        const token = jwt.sign({id:admin._id,role:admin.role},process.env.JWT_SECRET,{expiresIn:"1d"});

        res.status(200).json({message:"Login successfully",token,role:admin.role});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
};

// User list
exports.getUsers = async (req, res) => {
    try{
        const users = await User.find({role: 'user'}).select('-password');
        res.status(200).json({message:"User list fetched successfully",data:users});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
};


