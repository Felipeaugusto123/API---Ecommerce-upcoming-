import users from "../models/Users.js";
import bcrypt from "bcrypt";
import signToken from "../util/signToken.js";

class LoginController {
    static async login(req, res, next) {
        const user = req.body;

        if (user) {
            try {
                const findUser = await users.findOne({ email: user.email });
                if (findUser !== null) {
                    const passwordMatch = await bcrypt.compare(user.password, findUser.password);

                    if (passwordMatch) {
                        const userToken = {
                            email: findUser.email,
                            userName: findUser.userName
                        }
                        const token = signToken({ userToken });

                        res.status(200).json({ message: "User authentic", user: userToken })
                    } else {
                        res.status(400).send("Somethins wrong with User or password")
                    }
                }


            } catch (err) {
                console.log(err);

            }
        }
    }
}

export default LoginController;