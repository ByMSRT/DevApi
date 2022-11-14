import mongoose from "mongoose";

const { Schema } = mongoose;

const exempleSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    color: {
        type: [String],
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

const Exemple = mongoose.model("Exemple", exempleSchema);

/* Exemple.create({
    name: "Iphone 14 Pro",
    description: "The best phone in the world",
    color: ["Black", "Blue"],
    price: 999,
}); */

const findById = async() => {
    const test = await Exemple.findById("637219ab95290ea261340f22");
    console.log(test);
};
const findAll = async() => {
    const test = await Exemple.find({});
    console.log(test);
};

/* const updateById = async() => {
    const test = await Exemple.findByIdAndUpdate("637219ab95290ea261340f22", {
        name: "Iphone 13 Pro",
        description: "The best phone in the world",
        color: ["Black", "Blue"],
        price: 9999,
    });
    console.log(test);
}; */

/* const deleteById = async() => {
    const test = await Exemple.findByIdAndDelete("637219ab95290ea261340f22");
    console.log(test);
}; */

/* findById();
findAll(); */
/* updateById(); */

export default Exemple;