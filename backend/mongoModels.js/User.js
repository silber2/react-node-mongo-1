import {Schema,model} from "mongoose";

const userSchema = new Schema({
    usuario: String,
    mail: String,
    password: String
})

const User = new model('user', userSchema);

export default User