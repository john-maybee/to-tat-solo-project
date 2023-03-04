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
  pool.query(queryText, [req.user.id])
    .then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    }).catch((err) => {
      console.log('error with get ideas request: ', err);
      res.sendStatus(500);
    });
});

/**
 * POST route template
 */
router.post('/create', (req, res) => {
  // POST route code here
  const name = req.body.name;
  const details = req.body.details;
  const style = req.body.style;
  const placement = req.body.placement;


  console.log('in the server POST ideas', req.user);
  console.log(req.body.params);
  const queryText = `
  INSERT INTO "ideas" (name, details, style, placement)
  VALUES ($1, $2, $3, $4);`; // do I need to add a RETURNING statement here?
  pool
    .query(queryText, [name, details, style, placement])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('POST idea error: ', err);
      res.sendStatus(500);
    });
});

module.exports = router;


// information on how to complete this get request would be in the last lecture from the 2/28 class