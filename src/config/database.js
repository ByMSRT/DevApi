import mongoose from "mongoose";

mongoose
    .connect("mongodb://localhost:27017/ynovapi")
    .then(() => console.log("Database ON"))
    .catch((e) => console.log("Error", e));