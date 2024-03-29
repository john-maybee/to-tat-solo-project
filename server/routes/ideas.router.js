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

// route for GET thisIdea for editing
router.get('/:id', (req,res) => {
  if (req.isAuthenticated()) {
    console.log('get idea id:', req.params.id);
    const id = req.params.id;
    const queryText = `
    SELECT * FROM "ideas"
    WHERE "id" = $1;`;
    pool
      .query(queryText, [id])
      .then(result => {

        res.send(result.rows);
      })
      .catch((error) => {
        console.log('router.post idea error: ', error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403); // forbidden status code
  }
});

// POST route code here:
router.post('/', (req, res) => {
  
  const name = req.body.newIdea.name;
  const details = req.body.newIdea.details;
  const style = req.body.newIdea.style;
  const placement = req.body.newIdea.placement;
  const user_id = req.user.id;
  console.log('req.body', req.body);
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
      .query(queryText, [user_id, name, details, style, placement]) //, user_id removed this when the other user_id fields were removed. Trying to get back to the state that at least sent the other information. Should I replace that with req.user.id here? That's how it's done above.
      .then(result => {
        console.log('New idea id: ', result.rows[0].id)
        res.send({id: result.rows[0].id});
      })
      .catch(err => {
        console.log('router.post idea error: ', err);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403); // forbidden status code
  }
});


// route for PUT thisIdea after submitting the edit request
router.put('/:id', (req, res) => {
  console.log('req.body of PUT request: ', req.body, req.params.id);
  if (req.isAuthenticated()) {
    const id = req.params.id;
    const queryText = `
    UPDATE "ideas"
    SET
    "name" = $2,
    "details" = $3,
    "style" = $4,
    "placement" = $5
    WHERE "id" = $1;`;
    pool
      .query(queryText, [
        id,
        req.body.name,
        req.body.details,
        req.body.style,
        req.body.placement
      ])
      .then (result => {
        console.log('result from PUT: ', result);
        res.sendStatus(204);
      })
      .catch(error => {
        console.log('error updating in router.PUT: ', error);
        res.sendStatus(500);
      })
  } else {
    res.sendStatus(403);
  }
});


// DELETE thisIdea route code here:
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
