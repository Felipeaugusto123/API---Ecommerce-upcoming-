import jwt from "jsonwebtoken";

function signToken(payLoad) {
    const token = jwt.sign(payLoad, process.env.DB_CONNECT_STRING, { expiresIn: "1h" });

    return token;
}

export default signToken;