const Ressources = require("../model/ressource.model");

exports.addRessource = async (req, res) => {
  try {
    const newRessource = new Ressources({
      usageHistory: req.body.usageHistory,
      label: req.body.label,
      description: req.body.description,
      url: req.body.url,
      rightDate: req.body.rightDate,
      endDate: req.body.endDate,
      ressourceType: req.body.ressourceType,
    });

    await newRessource.save().then((result) => {
        res.status(200).send(result);
      });
  } catch (error) {
    console.log(error);
    throw error;
  }
};



exports.getRessource = async (req, res) =>{
  try {
    await Ressources.find().then((result) => {
      res.status(200).send(result);
    });
    
  } catch (error) {
    console.log(error)
    throw error
  }
}
