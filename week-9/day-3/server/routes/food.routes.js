
const foodRouter = require('express').Router();

let allFoods = [ 'carrot', 'pizza', 'rhubarb' ];

foodRouter.get('/', function showAllFoods(req, res, next) {
    // res.setHeader('Content-Type', 'application/json');
    // res.end(JSON.stringify(allFoods));
    res.json(allFoods);
});

/**
 * Adds a food to our collection
 * @param {Object}   req  Must have a body like: { food: String }
 * @param {Object}   res  The response will contain a message if added: { message: 'I added it' }
 */
function addAFood(req, res, next) {
    console.log('incoming data for POST', req.body);

    if (!req.body.food) {
        let err = new Error('You must provide some food');
        err.status = 400;
        next(err);
        return;
    }

    allFoods.push(req.body.food);

    res.json({ message: 'I added it!', theFoodIAdded: req.body.food });
}
foodRouter.post('/', addAFood);


module.exports = foodRouter;
