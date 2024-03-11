import User from "../models/User.js";
import bcrypt from 'bcrypt'

    const userRegister = async (req, res) => {

        try {
            const {usuario, mail, password} = req.body;

             const passwordHash = await bcrypt.hash(password, 10)

            const newUser = new User({
                usuario: usuario,
                mail: mail,
                password: passwordHash 
            })

        newUser.save()

        res.send(newUser)
        } catch (error) {
            console.error({error})
        }
    }

    const userLogin = async (req, res) => {
        try {
            const {usuario, password} = req.body;
            const user = await User.findOne({usuario})
            const checkPassword = user === null
            ? false 
            : await bcrypt.compare(password, user.password)

            if (!(user && checkPassword)) {
                res.status(401).json({
                    error: "invalid username or password"
                })
            }

            res.status(200).send("login ok")
        } catch (error) {
            console.error('error login ' + error)
        }
    }

export {userRegister, userLogin};