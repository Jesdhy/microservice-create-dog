const express = require('express');
const router = express.Router();
const createdogcontroller = require('../controllers/createDogController');
const Dog = require('../models/dogModel');
const { title } = require('process');

router.get('/', createdogcontroller);

router.post("/", (req, res) => {
    try {
        const newDog = {
            name: req.body.name,
            breed: req.body.breed,
            age: req.body.age,
            sex: req.body.sex
        };

        const dog = new Dog(newDog);
        dog.save();

        console.log("New dog created!");
        res.status(201).send("A new dog created with success!");
    } catch (err) {
        console.error(err);
        res.status(500).send("An error occurred while creating the dog.");
    }
});

module.exports = router;
