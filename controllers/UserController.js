const User = require("../models/UserSchema");
const appError = require('../service/appError');

const UserController = {
    get: async (req, res, next) => {
        const data = await User.find();

        res.status(200)
            .json({
                status: "success",
                data: data,
            });
    },
    post: async (req, res, next) => {
        const {body} = req;

        const model = {
            name: body.name,
            email: body.email,
        };

        await User.create(model);

        const data = await User.find();
        res.status(200)
            .json({
                status: "success",
                data: data,
            });
    }
};

module.exports = UserController;