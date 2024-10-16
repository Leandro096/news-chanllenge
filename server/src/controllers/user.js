import User from "../models/user.js";

export const createUser = async (req, res) => {
    const user = new User(req.body);
    console.log("Here we got:", user);

    try {
        await user.save();
        const token = await user.generateAuthToken();
        res.status(201).send({ user, token });
    } catch (error) {
        res.status(400).send(error);
    }
};

export const login = async (req, res) => {
    try {
        const user = await User.findByCredentials(
            req.body.email,
            req.body.password
        );
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
        if (!req.user) {
            return res.status(404).send("No user found logged");
        }
        res.send(req.user);
    } catch (error) {
        res.status(500).send("Server error trying to get the user");
    }
};

export const readUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.send(users);
    } catch (error) {
        res.status(500).send();
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

export const deleteUser = async (req, res) => {
    try {
        await req.user.remove();
        res.send(req.user);
    } catch (error) {
        res.status(500).send();
    }
};

export const readUserPreferences = async (req, res) => {
    res.send(req.user.preferences);
};

export const addUserPreferences = async (req, res) => {
    try {
        req.user.preferences = req.user.preferences.concat(req.body);
        await req.user.save();
        res.status(201).send(req.user.preferences);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const deleteUserPreferences = async (req, res) => {
    try {
        req.user.preferences = req.user.preferences.filter((preference) => {
            return preference !== req.params.preference;
        });
        await req.user.save();
        res.send(req.user.preferences);
    } catch (error) {
        res.status(500).send();
    }
};

export const readUserToken = async (req, res) => {
    res.send(req.token);
};

export const readUserTokens = async (req, res) => {
    res.send(req.user.tokens);
};
