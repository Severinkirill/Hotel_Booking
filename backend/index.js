import express from 'express';
import  mongoose from 'mongoose';
const app = express();

const connectDB = async () => {
    try{
        await mongoose.connect()
    }catch (error) {
        throw error;
    }
};
mongoose.connection.on("disconnected", () => {
    console.log("MongoDB disconnected!");
})
mongoose.connection.on("connected", () => {
    console.log("MongoDB connected!");
})
app.get("/users", (req, res) => {
    res.send("!");
})

app.listen(8000, () => {
    console.log('Server is running on port 8000');
});

