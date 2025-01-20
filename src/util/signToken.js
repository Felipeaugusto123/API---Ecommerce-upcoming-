import jwt from "jsonwebtoken";

function signToken(payLoad) {
    const token = jwt.sign(payLoad, "secretWord", { expiresIn: "1h" });
    
    return token;
}

export default signToken;