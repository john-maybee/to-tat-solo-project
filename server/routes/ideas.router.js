const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET all ideas
router.get('/', (req, res) => {
  // GET route code here
  console.log('is authenticated: ', req.isAuthenticated());
  console.log('in the server GET ideas router');
  console.log('user is: ', req.user);
  if (req.isAuthenticated()) {
    const queryText = `SELECT * FROM "ideas" WHERE "user_id" = $1 ORDER BY "id" DESC;`; // changed this to order by the id to show newest ideas at the top of the list. changed back
    pool.query(queryText, [req.user.id])
      .then((result) => {
        res.send(result.rows);
      }).catch((error) => {
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403); // forbidden status code
  }  
});

// POST route code here:
router.post('/', (req, res) => {
  
  const details = req.body.newIdea.details;
  const style = req.body.newIdea.style;
  const placement = req.body.newIdea.placement;
  const user_id = req.user.id;
  console.log('req.body', req.body);
  // console.log('new idea name:', name);
  console.log('in the server POST ideas for: ', req.user);
  console.log('is authenticated: ', req.isAuthenticated());
  // RETURNING "id" will give you back the id of the new idea
  // only allow this POST if the user is authenticated
  if (req.isAuthenticated()){
    const queryText = `
    INSERT INTO "ideas" ("user_id", "name", "details", "style", "placement")
    VALUES ($1, $2, $3, $4, $5)
    RETURNING "id";` // RETURNING "id" will give you back the id of the new idea // Need to also insert the user_id somehow. Was using ${req.user.id} as a value and "user_id" as the item I was inserting it into
    pool
      .query(queryText, [user_id, req.body.newIdea.name, details, style, placement]) //, user_id removed this when the other user_id fields were removed. Trying to get back to the state that at least sent the other information. Should I replace that with req.user.id here? That's how it's done above.
      .then(result => {
        console.log('New idea id: ', result.rows[0].id)
        res.send({id: result.rows[0].id});
        // res.sendStatus(201) Is this really where it was messed up?
      })
      .catch(err => {
        console.log('router.post idea error: ', err);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403); // forbidden status code
  }
});


// DELETE route code here:
router.delete('/:id', (req, res) => {
  console.log('req.body', req.params.id);
  // allow to DELETE if the user is authenticated
  if (req.isAuthenticated()){
    let id = req.params.id;
    const queryText = `
    DELETE FROM "ideas"
    WHERE id = $1;`;
    pool
      .query(queryText, [id])
      .then((result) => {
        console.log('Delete result: ', result);
        res.sendStatus(202);
      })
      .catch((error) => {
        console.log('router.delete idea error: ', error);
        res.sendStatus(500);
      })
  } else {
    res.sendStatus(403);
  }
});

module.exports = router;


// information on how to complete this get request would be in the last lecture from the 2/28 class

// could use number 7 from the sql-joins-syntax-basics-heroes assignment