import mongoose from "mongoose";

const connectcDatabase = () => {
    console.log("Espere conectando com o banco")

    mongoose.connect( process.env.MONGODB_URI
    )
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error));
};

export default connectcDatabase;