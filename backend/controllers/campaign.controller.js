const Campaign = require("../model/campagne.model");

exports.createcampaign = async (req, res) => {
  try {
    const newCampaign = new Campaign({
      title: req.body.title,
      description: req.body.description,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      budget: req.body.budget,
      resources: req.body.resources,
    });

    await newCampaign.save().then((result) => {
      res.status(200).send(result);
    });
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

exports.getCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find();
    res.status(200).send(campaigns);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};
