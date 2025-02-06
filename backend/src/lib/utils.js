import jwt from 'jsonwebtoken';
export const generateToken = (userId, res) => {

    const token = jwt.sign({userId}, process.env.JWT_SECRETKEY, {
        expiresIn:"7d"
    });

    res.cookie("jwt", token, {
        maxAge: 7 * 24 * 60 * 60 * 1000, // MS
        httpOnly: true, // prevent xss attacks 
        sameSite: "strict", //csrf attack cross site request forgery attacks 
        secure: process.env.NODE_ENV !== "development" , 
    });


    return token;
}