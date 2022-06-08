const Post = require("../models/PostSchema");
const appError = require('../service/appError');

const PostController = {
    get: async (req, res, next) => {
        const data = await Post.find()
            .populate({
                path: 'user',
                select: 'name photo'
            });

        res.status(200)
            .json({
                status: "success",
                data: data,
            });
    },
    post: async (req, res, next) => {
        const { body } = req;

        if (body.content == undefined) {
            return next(appError(400, '你沒填寫 Content 資料', next));
        }

        const model = {
            user: body.user,
            content: body.content,
            image: body.email,
        };

        await Post.create(model);

        const data = await Post.find()
            .populate({
                path: 'user',
                select: 'name photo'
            });
        res.status(200)
            .json({
                status: "success",
                data: data,
            });
    },
    patch: async (req, res, next) => {
        const { id } = req.params;
        const model = {
            image: req.body.image,
            content: req.body.content,
        };
        const result = await Post.findByIdAndUpdate(id, model, { runValidators: true });

        if (result) {
            const data = await Post.find()
                .populate({
                    path: 'user',
                    select: 'name photo'
                });
            res.status(200)
                .json({
                    status: "success",
                    data: data,
                });
        } else {
            return next(appError(400, '更新失敗', next));
        }

    },
    delete: async (req, res, next) => {
        const { id } = req.params;
        const result = await Post.findByIdAndDelete(id);
        if (result) {
            const data = await Post.find()
                .populate({
                    path: 'user',
                    select: 'name photo'
                });
            res.status(200)
                .json({
                    status: "success",
                    data: data,
                });
        } else {
            return next(appError(400, '刪除失敗', next));
        }
    },
    deleteAll: async (req, res, next) => {
        const result = await Post.deleteMany({});
        if (result) {
            res.status(200)
                .json({
                    status: "success",
                    data: [],
                });
        } else {
            return next(appError(400, '刪除失敗', next));
        }
    },
    error: async (req, res, next) => {
        const error = new Error('我是個錯誤');
        throw error;
    },
};

module.exports = PostController;