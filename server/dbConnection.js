const mongoose = require("mongoose");

module.exports = async function connection() {
    try {
        const connectionParams = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        await mongoose.connect('mongodb+srv://dani:dani123asd@e-commerce.wt1gm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', connectionParams);
        console.log("Connected to database!");
    } catch (error) {
        console.log(error);
        console.log("Could not connect to database!");
    }
};
