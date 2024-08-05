import jwt from 'jsonwebtoken';
import AdminModel from "@models/Admin";

exports.Authentication = async (req:any, res:any, next:any) => {
    try {
        let token = req.headers.authorization;
        if (!token) {
            throw new Error('token not found');
        }
        const checkToken = await jwt.verify(token, process.env.JWT_SECRET);
        console.log("🚀 ~ exports.Authentication= ~ checkToken:", checkToken)
        let loginUserData = await AdminModel.findOne();
        if (!loginUserData) {
            throw new Error('user not found');
        }
        req.user = loginUserData
        next();
    } catch (error) {
        res.status(404).json({
            status: 400,
            message: error.message,
        });
    }
};