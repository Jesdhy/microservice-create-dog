const { default: mongoose } = require('mongoose');
const db = require('C:/Users/Jessy/Desktop/microservice-create-dog/service/config/dbConfig');

const createDogController = (req, res) => {
    try {
        const newDog = new Dog(req.body);
        newDog.save();
        res.status(201).send({ message: "Dog created successfully!", dog: newDog });
    } catch (err) {
        res.status(500).send({ error: "An error occurred while creating the dog.", details: err });
    }
}

module.exports = createDogController;