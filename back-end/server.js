/* ==================== Dependencies ==================== */

const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

/* ==================== Initialize Express ==================== */

const app = express();
const port = 8080;

/* ==================== Initialize Pool ==================== */

const pool = new Pool({ connectionString: 'postgresql://postgres:docker@127.0.0.1:5432/logico' });
pool.connect();

/* ==================== Middleware ==================== */

app.use(cors());
app.use(express.json());

/* ==================== Routes ==================== */

/* ========== Create ========== */

// New state
app.post('/state', (req, res) => {
  pool
    .query(`INSERT INTO savedstate (name, data) VALUES ('${req.body.name}','${req.body.data}') RETURNING *`)
    .then((result) => {
      res.send(result.rows);
    });
});

/* ========== Read ========== */

// Get full tables
app.get('/state', (req, res) => {
  pool.query(`SELECT * FROM savedstate`).then((result) => {
    res.send(result.rows);
  });
});

/* ========== Update ========== */

app.patch('/state/:id', (req, res) => {
  pool.query(`UPDATE savedstate SET data = '${req.body}' WHERE id=${req.params.id} RETURNING *`).then((result) => {
    res.send(result.rows);
    console.log(result.rows);
  });
});

/* ========== Destroy ========== */

app.delete('/state/:id', (req, res) => {
  pool.query(`DELETE FROM savedstate WHERE id=${req.params.id} RETURNING *`).then((result) => {
    res.send(result.rows);
    console.log(result.rows);
  });
});

/* ==================== Listener ==================== */

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
