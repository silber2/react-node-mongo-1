import User from "../mongoModels.js/User.js";
import bcrypt from 'bcrypt'

    const postUser = async (req, res) => {

        try {
            const {usuario, mail, password} = req.body;

        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = new User({
            usuario: usuario,
            mail: mail,
            password: passwordHash 
        })

        newUser.save()

        res.status(200)
        } catch (error) {
            console.error({error})
        }
    }

export default postUser;