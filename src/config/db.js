const mongoose = require("mongoose");

const DATABASE_URL = "mongodb+srv://piyush1029:piyush1029@cluster0.pl9qb80.mongodb.net/crud-api";

const dbConnect = async () => {
    try {
        await mongoose.connect(DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("Database Connected")
    } catch (error) {
        console.log(error.message)

    }
};

module.exports = dbConnect;