
const bannedAccount = async (req,res,next) => {
    const user = req.user;
    if(user.bannedAccount === true) {
        res.status(401).json({message:"Tu cuenta está baneada"})
    }
    next()
}

module.exports = bannedAccount