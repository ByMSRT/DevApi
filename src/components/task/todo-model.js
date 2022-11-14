import mongoose from "mongoose";

const { Schema } = mongoose;

const taskSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    status: {
        type: Boolean,
        required: true,
    },
    description: {
        type: String,
    },
    updatedAt: {
        type: Date,
    },
    createdAt: {
        type: Date,
    },
});

const Task = mongoose.model("TaskExemple", taskSchema);

/* Task.create({
    title: "Exemple",
    status: false,
    description: "Exemple",
    updatedAt: new Date(),
    createdAt: new Date(),
}); */

export default Task;