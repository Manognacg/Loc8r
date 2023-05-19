var express = require('express');
var router = express.Router();
const ctrlLocations =require('../controllers/locations');
const ctrlOthers = require('../controllers/others');

/* GET home page. */
router.get('/', ctrlLocations.homelist);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/review/new', ctrlLocations.addReview);

router.get('/about', ctrlOthers.about);+

module.exports = router;