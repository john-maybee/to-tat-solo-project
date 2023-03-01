const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  console.log('in the server GET ideas', req.user);
  let queryText = 'SELECT * FROM "ideas" WHERE "user_id" = $1;';
  pool
    .query(queryText, [req.params])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
  console.log(req.body);
  res.sendStatus(200); // might be able to delete this line once I have the correct information in here being posted
});

module.exports = router;


// information on how to complete this get request would be in the last lecture from the 2/28 class