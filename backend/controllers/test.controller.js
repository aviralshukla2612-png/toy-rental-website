const Test = require('../models/test.model');

exports.createTest = async (req, res) => {
    try {
        const { name, description, price } = req.body;

        const image = req.file ? req.file.filename : null;

        if (!name || !description || !price || !image) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const test = new Test({
            name,
            description,
            price,
            image
        })
        await test.save();
        res.status(201).json({ message: "Test created successfully", test });
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getTests = async (req, res) => {
    try {
        const tests = await Test.find();
        res.status(200).json({ message: "Tests fetched successfully", data: tests });
    }
    catch (errr) {
        res.status(500).json({ message: error.message });
    }
};