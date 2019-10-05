const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

var schema = new mongoose.Schema({
    name:String,
    uname:String,
    passw:String,
    email:String
})

var User = module.exports = mongoose.model("User", schema)

module.exports.registerUser = (user) => {
    var newUser = new User(user);

    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(newUser.passw, salt);

    newUser.passw = hash;

    newUser.save();

    return newUser;
}

module.exports.authenticate = async (candidate) => {
    var { uname, passw } = candidate;

    var res = {
        success:"false",
        msg:"error"
    };

    var user = await User.findOne({uname});
    
    if(!user){
        res = ({
            success:"false",
            msg:"User not found"
        })
    }
    else{
        if(bcrypt.compareSync(passw, user.passw)){
            var token = jwt.sign({uname:uname, name:user.name, email:user.email, id:user._id}, 'my_secret');
            res = ({
                token,
                success:"true",
                msg:"authenticated",
                user:{uname:uname, name:user.name, email:user.email, id:user._id}
            })
        }else{
            res = ({
                success:"false",
                msg:"wrong password"
            })
        }
    }

    return res;
}