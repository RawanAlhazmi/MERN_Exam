const Pirates = require('../models/pirates.model');

module.exports.All = (req, res) => {
  // SORTED : https://stackoverflow.com/questions/14279924/mongoose-sort-alphabetically/14322741
    Pirates.find().collation({locale:'en',strength: 2}).sort({name:1})
            .then(allPirates => res.json({ pirates: allPirates }))
            .catch(err => {
                console.log({error: err})
                res.status(400).json(err);
            })
    }

    module.exports.One = (req, res) => {
      Pirates.findOne({ _id: req.params.id })
              .then(pirates => res.json(pirates))
              .catch(err => {
                  console.log({error: err})
                  res.status(400).json(err);
              })
      }

module.exports.createPirates = (req, res) => {
    Pirates.create(req.body)
    .then(pirates => {
            console.log(req.body)
            res.json({pirates: pirates})})
    .catch(err => {
            console.log(err)
            res.status(400).json(err);
    })
    }
module.exports.deletePirates = (req, res) => {
        Pirates.deleteOne({ _id: req.params.id })
          .then((pirates) => res.json(pirates))
          .catch(err => {
            res.status(400).json(err);
            console.log({error: err})
        })
}

module.exports.updatePirates = (req, res) => {
    Pirates.findOneAndUpdate(
        { _id: req.params.id }, 
        req.body, 
        { new: true, runValidators: true , useFindAndModify: false})
      .then((pirates) => res.json(pirates))
      .catch(err => {
        res.status(400).json(err);
        console.log({error: err})
    })
  }