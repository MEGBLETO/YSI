const User = require("../model/user.model");

exports.getAllUsers = (req, res) => {
    User.find().then(
        (user) => 
            res.send(user)
            .catch(err => res.status(400).send(err))
    )
    return res.status(404).send('Users not found')
}

exports.createUser = (req,res) => {
    User.create(req.body).then(
        (user) => 
            res.send(user)
    )
        .catch(err => res.status(400).send(err))
}

exports.getUser = (req,res) => {
    User.find().then(
        (user) => res.send(user)
        .catch(err => res.status(400).send(err))
    )
}

exports.deleteUser = (req,res) => {
    User.findByIdAndDelete(req.params.id)
        .catch(err => res.status(400).send(err))
}

exports.updateUser = (req,res) => {
    User.findByIdAndUpdate((req.params.id), req.body, {new: true})
     .then((user) => {
        if(!user) {
            return res.status(404).send({
                message: "User Not Found"
            })
        }
        res.send(user)
    })
    .catch(err => {
        res.status(400).send(err)
    })
}