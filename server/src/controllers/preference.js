import Preference from "../models/preference.js";

export const createUserPreferences = async (req, res) => {
    const preference = new Preference({
        ...req.body,
    });

    try {
        await preference.save();
        res.status(201).send(preference);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const readPreferences = async (req, res) => {
    try {
        await req.user.populate("preferences").execPopulate();
        res.send(req.user.preferences);
    } catch (error) {
        res.status(500).send();
    }
};

export const readUserPreference = async (req, res) => {
    try {
        const preference = await Preference.findOne({
            _id: req.params.id,
            owner: req.user._id,
        });

        if (!preference) {
            return res.status(404).send({message: "No preference found"});
        }

        res.send(preference);
    } catch (error) {
        res.status(500).send();
    }
};

export const updateUserPreference = async (req, res) => {
    if (!req.body || typeof req.body !== 'object') {
        return res.status(400).send({ error: "Invalid body!" });
    }

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
            _id: req.params.id,
        });

        if (!preference) {
            return res.status(404).send();
        }

        updates.forEach((update) => (preference[update] = req.body[update]));
        await preference.save();
        res.send(preference);
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
};

export const deleteUserPreference = async (req, res) => {
    try {
        const preference = await Preference.findOneAndDelete({
            _id: req.params.id,
            owner: req.user._id,
        });

        if (!preference) {
            return res.status(404).send();
        }

        res.send(preference);
    } catch (error) {
        res.status(500).send();
    }
};
