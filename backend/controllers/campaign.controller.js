







exports.createcampaign = async(req, res) =>{
    try {
    //   Place.create(req.body).then(place=>{
    //     res.send(place)
    //   })
    } catch (error) {
      console.log(error)
      res.status(400).send(error)
    }
  }
  
  