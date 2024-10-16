import Preference from "../models/preference.js";

export const createPreference = async (req, res) => {
    const preference = new Preference({
        ...req.body,
        owner: req.user._id,
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

export const readPreference = async (req, res) => {
    try {
        const preference = await Preference.findOne({
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

export const updatePreference = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ["countries", "categories", "sources"];
    const isValidOperation = updates.every((update) =>
        allowedUpdates.includes(update)
    );

    if (!isValidOperation) {
        return res.status(400).send({ error: "Invalid updates!" });
    }

    try {
        const preference = await Preference.findOne({
            _id: req.params.id,
            owner: req.user._id,
        });

        if (!preference) {
            return res.status(404).send();
        }

        updates.forEach((update) => (preference[update] = req.body[update]));
        await preference.save();
        res.send(preference);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deletePreference = async (req, res) => {
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
