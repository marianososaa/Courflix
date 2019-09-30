
assets = require ("../mocks/carrousel.json")

class AssetsController {
    getUser(req,res){
      res.json({
        assets: assets
       })
   }
}
module.exports = AssetsController;
