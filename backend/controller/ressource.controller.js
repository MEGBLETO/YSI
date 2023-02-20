const Ressource = require("../model/ressource.model");

exports.getAllRessource = (req, res) => {
    Ressource.find().then(
        (ressource) => 
            res.send(ressource)
            .catch(err => res.status(400).send(err))
    )
    return res.status(404).send('Ressources not found')
}

exports.createRessource = (req,res) => {
    Ressource.create(req.body).then(
        (ressource) => 
            res.send(ressource)
    )
        .catch(err => res.status(400).send(err))
}

exports.getRessource = (req,res) => {
    Ressource.find().then(
        (ressource) => res.send(ressource)
        .catch(err => res.status(400).send(err))
    )
}

exports.deleteRessource = (req,res) => {
    Ressource.findByIdAndDelete(req.params.id)
        .catch(err => res.status(400).send(err))
}

exports.updateRessource = (req,res) => {
    Ressource.findByIdAndUpdate((req.params.id), req.body, {new: true})
     .then((ressource) => {
        if(!ressource) {
            return res.status(404).send({
                message: "Ressource Not Found"
            })
        }
        res.send(ressource)
    })
    .catch(err => {
        res.status(400).send(err)
    })
}