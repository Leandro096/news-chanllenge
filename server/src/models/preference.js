import mongoose from "mongoose";

const preferenceSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    country: {
        type: String,
        trim: true
    },
    category: {
        type: String,
        trim: true
    },
    sources: {
        type: String,
        trim: true
    },
    language:{
        type: String,
        default: 'es',
        required: false,
    },
});

const Preference = mongoose.model('Preference', preferenceSchema);

export default Preference;
