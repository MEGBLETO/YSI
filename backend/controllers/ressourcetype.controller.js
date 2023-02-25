const RessourceType = require("../model/typeressource.model");

exports.addRessourceType = async (req, res) => {
  try {
    const newRessourceType = new RessourceType({
       name: req.body.name
    });

    await newRessourceType.save().then((result) => {
        res.status(200).send(result);
      });
  } catch (error) {
    console.log(error);
    throw error;
  }
};




exports.getRessourceType = async (req, res) => {
    try {
      await newRessourceType.find().then((result) => {
          res.status(200).send(result);
        });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
  