const Campagne = require("../model/campagne.model");

exports.getAllCampagne = (req, res) => {
    Campagne.find().then(
        (campagne) => 
            res.send(campagne)
            .catch(err => res.status(400).send(err))
    )
    return res.status(404).send('Campagnes not found')
}

exports.createCampagne = (req,res) => {
    Campagne.create(req.body).then(
        (campagne) => 
            res.send(campagne)
    )
        .catch(err => res.status(400).send(err))
}

exports.getCampagne = (req,res) => {
    Campagne.find().then(
        (campagne) => res.send(campagne)
        .catch(err => res.status(400).send(err))
    )
}

exports.deleteCampagne = (req,res) => {
    Campagne.findByIdAndDelete(req.params.id)
        .catch(err => res.status(400).send(err))
}

exports.updateCampagne = (req,res) => {
    Campagne.findByIdAndUpdate((req.params.id), req.body, {new: true})
     .then((campagne) => {
        if(!campagne) {
            return res.status(404).send({
                message: "Campagne Not Found"
            })
        }
        res.send(campagne)
    })
    .catch(err => {
        res.status(400).send(err)
    })
}