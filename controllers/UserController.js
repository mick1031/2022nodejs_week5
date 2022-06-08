const User = require("../models/UserSchema");


const UserController = {
    Get: async (req, res, next) => {
        const data = await User.find();

        res.status(200)
            .json({
                status: "success",
                data: data,
            });
    },
    Post: async (req, res, next) => {
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