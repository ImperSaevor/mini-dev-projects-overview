const router = require('express').Router();
const colorChanger = require('../controllers/color.changer');

router.get('/color', colorChanger.getColorTab);

module.exports = router;
