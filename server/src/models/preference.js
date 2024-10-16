import mongoose from "mongoose";

const preferenceSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    countries: [{
        type: String,
        trim: true
    }],
    cateories: [{
        type: String,
        trim: true
    }],
    sources: [{
        type: String,
        trim: true
    }],
});

const Preference = mongoose.model('Preference', preferenceSchema);

export default Preference;
