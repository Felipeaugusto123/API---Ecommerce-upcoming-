import users from "../models/Users.js";
import bcrypt from "bcrypt";

class RegisterController {
    static async registerUser(req, res) {
        const { email, userName, password } = req.body;
        const existEmail = await users.findOne({ email: email })
        const existUserName = await users.findOne({ userName: userName })

        if (existEmail === null) {
            if (existUserName === null) {
                const hashedPassword = await bcrypt.hash(password, 16);
                const newUser = { email, userName, password: hashedPassword };

                if (newUser) {
                    try {
                        const registerUser = await users.create(newUser);
                        res.status(201).json({ message: "Sucess", user: registerUser })
                    } catch (err) {
                        console.log(err);
                    }
                }
            } else {
                res.status(200).json({ message: "This user is already register" })
            }

        } else {
            res.status(200).json({ message: "This email is already register!" });
        }


    }
}

export default RegisterController;