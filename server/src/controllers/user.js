import User from "../models/user.js";
import Preference from "../models/preference.js";

export const createUser = async (req, res) => {
    const user = new User(req.body);

    try {
        // Save the user
        await user.save();

        // Create a preference document for the new user
        const preference = new Preference({
            owner: user._id,
            countries: "",
            categories: "",
            sources: "",
            language: "en",
        });

        await preference.save();

        res.status(201).send({ user, preference });
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
};

export const login = async (req, res) => {
    try {
        const user = await User.findByCredentials(
            req.body.email,
            req.body.password
        );

        if (!user) {
            return res.status(401).send({ error: "Login failed! Wrong credentials" });
        }

        const token = await user.generateAuthToken();
        
        res.send({ user, token });
    } catch (error) {
        res.status(400).send();
    }
};

export const logout = async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token;
        });
        
        await req.user.save();
        res.send();
    } catch (error) {
        res.status(500).send();
    }
};

export const logoutAll = async (req, res) => {
    try {
        req.user.tokens = [];
        await req.user.save();
        res.send();
    } catch (error) {
        res.status(500).send();
    }
};

export const readUser = async (req, res) => {
    try {
        const user = await User.findById(req.user._id)
            .populate('preferences')
            .exec();

        if (!user) {
            return res.status(404).send({ error: "User not found" });
        }

        // Include user info and preferences in the response
        const preferences = await Preference.findOne({ owner: user._id });

        const response = {
            _id: user._id,
            name: user.name,
            email: user.email,
            preference: preferences,
        };

        res.status(200).send(response);
    } catch (error) {
        res.status(500).send({ error: "Internal Server Error" });
    }
};

export const updateUser = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["name", "email", "password"];
    const isValidOperation = updates.every((update) =>
        allowedUpdates.includes(update)
    );

    if (!isValidOperation) {
        return res.status(400).send({ error: "Invalid updates!" });
    }

    try {
        updates.forEach((update) => (req.user[update] = req.body[update]));
        await req.user.save();
        res.send(req.user);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const updateUserPreferences = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["countries", "categories", "sources", "language"];
    const isValidOperation = updates.every((update) =>
        allowedUpdates.includes(update)
    );

    if (!isValidOperation) {
        return res.status(400).send({ error: "Invalid updates!" });
    }

    try {
        const preference = await Preference.findOne({
            owner: req.user._id,
        });

        if (!preference) {
            return res.status(404).send({ error: "Preferences not found" });
        }

        updates.forEach((update) => (preference[update] = req.body[update]));
        await preference.save();

        res.send(preference);
    } catch (error) {
        res.status(500).send({ error: "Internal Server Error" });
    }
};

export const deleteUser = async (req, res) => {
    try {
        await req.user.remove();
        res.send(req.user);
    } catch (error) {
        res.status(500).send();
    }
};
