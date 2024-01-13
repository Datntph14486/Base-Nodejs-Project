import jwt from "jsonwebtoken"

const verifyToken = (req, res, next) => {

    const authHeader = req.header('Authorization');
    const token = authHeader && authHeader.split(' ')[1];

    if(!token){
        return res.sendStatus(401);
    }

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

}

export {verifyToken}