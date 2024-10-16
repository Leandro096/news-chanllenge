import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
import User from '../models/user.js'

dotenv.config()

const jwtSecret = process.env.JWT_SECRET;

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decode = jwt.verify(token, jwtSecret);
        const user = await User.findOne({ _id: decode._id, 'tokens.token': token });

        if(!user) {
            throw new Error('Error de login');
        }

        req.token = token;
        req.user = user;
        next();
    } catch (error) {
        res.status(401).send({ error: 'No estas autenticado' });
    }
};

export default auth;
