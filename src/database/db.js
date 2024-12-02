import mongoose from "mongoose";

const connectcDatabase = () => {
    console.log("Espere conectando com o banco")

    mongoose.connect("mongodb+srv://web:5646@cluster0.6uwsq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", 
    )
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error));
};

export default connectcDatabase;