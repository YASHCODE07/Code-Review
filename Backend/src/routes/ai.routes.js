const express = require('express');
const aiController = require('../controller/ai.controller');

const router = express.Router();

router.post('/get-review',aiController.getReview);

// router.post('/get-review',aiController);

module.exports = router;

// module.exports = router.post('/get-review',aiController.getReview);


// const rou = router.post('/get-review',aiController.getReview);
// module.exports = rou;