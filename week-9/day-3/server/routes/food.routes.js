
const foodRouter = require('express').Router();
const Food = require('../models/Food.model.js');

foodRouter.get('/', function showAllFoods(req, res, next) {

    Food.find()
        .then(function sendBackAllFoods(allFoods) {
            // res.setHeader('Content-Type', 'application/json');
            // res.end(JSON.stringify(allFoods));
            res.json(allFoods);
        })
        .catch(function handleIssues(err) {
            console.error(err);
            let ourError = new Error('Unable to retrieve foods');
            ourError.status = 500;
            next(ourError);
        });
});

foodRouter.get('/find', function findMatchingFoods(req, res, next) {
    // http://127.0.0.1:3000/food/find?search=bacon
    Food.find({ name: { $regex: req.query.search, $options: 'i' } })
        .then(function sendBackMatchingFoods(allMatchingData) {
            // log out first?
            // transform first?
            // get this data and other data?
            res.json(allMatchingData);
        })
        .catch(function handleIssues(err) {
            console.error(err);
            // I'm lazy....
            next(err);
        });
});

foodRouter.get('/:foodid', function retrieveSingleFood(req, res, next) {

    console.log('req params', req.params);

    Food.findById(req.params.foodid)
        .then(function sendBackSingleFood(theData) {
            if (!theData) {
                let err = new Error('No food with that ID');
                err.status = 404;
                return next(err);
            }
            res.json({ theFoodIFound: theData });
        })
        .catch(function handleIssues(err) {
            console.error(err);
            // I'm lazy......
            next(err);
        });

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

    let theFoodCreated = new Food({ name: req.body.food, isPoisonous: true });

    theFoodCreated.save()
        .then(function sendBackTheResponse(data) {
            res.json({ message: 'I added it!', theFoodIAdded: data });
        })
        .catch(function handleIssues(err) {
            console.error(err);
            let ourError = new Error('Unable to save new Food');
            ourError.status = 500;
            next(ourError);
        });

}
foodRouter.post('/', addAFood);


module.exports = foodRouter;
