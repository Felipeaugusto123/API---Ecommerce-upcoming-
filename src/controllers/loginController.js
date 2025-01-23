import users from "../models/Users.js";
import bcrypt from "bcrypt";
import signToken from "../util/signToken.js";

class LoginController {
    static async login(req, res, next) {
        const user = req.body;

        if (user) {
            try {
                const findUser = await users.findOne({ email: user.email });
                console.log(findUser);
                
                if (findUser !== null) {
                    const passwordMatch = await bcrypt.compare(user.password, findUser.password);

                    if (passwordMatch) {
                        const userToken = {
                            id: findUser._id,
                            email: findUser.email,
                            userName: findUser.userName
                        }
                        const token = signToken({ userToken });
                        console.log(token);
                        

                        res.status(200).json({ message: "User authentic", user: userToken })
                    } else {
                        res.status(400).send("Your password is incorrect");
                    }
                } else {
                    res.status(400).send("Somethins wrong with E-MAIL")
                }


            } catch (err) {
                console.log(err);

            }
        }
    }
}

export default LoginController;