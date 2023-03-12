const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET all artists
router.get('/', (req, res) => {
  // GET route code here
  console.log('is authenticated: ', req.isAuthenticated());
  console.log('in the server GET artists router');
  console.log('user is: ', req.user);
  if (req.isAuthenticated()) {
    const queryText = `SELECT * FROM "artists" WHERE "user_id" = $1 ORDER BY "id" DESC;`; // changed this to order by the id to show newest artists at the top of the list. changed back
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

// route for GET thisArtist for editing
router.get('/:id', (req,res) => {
  if (req.isAuthenticated()) {
    console.log('get artist id:', req.params.id);
    const id = req.params.id;
    const queryText = `
    SELECT * FROM "artists"
    WHERE "id" = $1;`;
    pool
      .query(queryText, [id])
      .then(result => {

        res.send(result.rows);
      })
      .catch((error) => {
        console.log('router.post artist error: ', error);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403); // forbidden status code
  }
});

// POST route code here:
router.post('/', (req, res) => {
  
  const name = req.body.newArtist.name;
  const shop = req.body.newArtist.shop;
  const instagram = req.body.newArtist.instagram;
  const style = req.body.newArtist.style;
  const details = req.body.newArtist.details;
  const user_id = req.user.id;
  console.log('req.body', req.body);
  // console.log('new artist name:', name);
  console.log('in the server POST artists for: ', req.user);
  console.log('is authenticated: ', req.isAuthenticated());
  // RETURNING "id" will give you back the id of the new artist
  // only allow this POST if the user is authenticated
  if (req.isAuthenticated()){
    const queryText = `
    INSERT INTO "artists" ("user_id", "name", "shop", "instagram", "style", "details")
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING "id";` // RETURNING "id" will give you back the id of the new artist // Need to also insert the user_id somehow.
    pool
      .query(queryText, [user_id, name, shop, instagram, style, details]) //, user_id removed this when the other user_id fields were removed. Trying to get back to the state that at least sent the other information. Should I replace that with req.user.id here? That's how it's done above.
      .then(result => {
        console.log('New artist id: ', result.rows[0].id)
        res.send({id: result.rows[0].id});
      })
      .catch(err => {
        console.log('router.post artist error: ', err);
        res.sendStatus(500);
      });
  } else {
    res.sendStatus(403); // forbidden status code
  }
});


// route for PUT thisArtist after submitting the edit request
router.put('/:id', (req, res) => {
  console.log('req.body of PUT request: ', req.body, req.params.id);
  if (req.isAuthenticated()) {
    const id = req.params.id;
    const queryText = `
    UPDATE "artists"
    SET
    "name" = $2,
    "shop" = $3,
    "instagram" = $4,
    "style" = $5,
    "details" = $6
    WHERE "id" = $1;`;
    pool
      .query(queryText, [
        id,
        req.body.name,
        req.body.shop,
        req.body.instagram,
        req.body.style,
        req.body.details,
      ])
      .then (result => {
        console.log('result from PUT artist: ', result);
        res.sendStatus(204);
      })
      .catch(error => {
        console.log('error updating in router.PUT artist: ', error);
        res.sendStatus(500);
      })
  } else {
    res.sendStatus(403);
  }
});


// DELETE thisArtist route code here:
router.delete('/:id', (req, res) => {
  console.log('req.body', req.params.id);
  // allow to DELETE if the user is authenticated
  if (req.isAuthenticated()){
    let id = req.params.id;
    const queryText = `
    DELETE FROM "artists"
    WHERE id = $1;`;
    pool
      .query(queryText, [id])
      .then((result) => {
        console.log('Delete result: ', result);
        res.sendStatus(202);
      })
      .catch((error) => {
        console.log('router.delete artist error: ', error);
        res.sendStatus(500);
      })
  } else {
    res.sendStatus(403);
  }
});

module.exports = router;


// information on how to complete this get request would be in the last lecture from the 2/28 class

// could use number 7 from the sql-joins-syntax-basics-heroes assignment