DROP TABLE IF EXISTS savedstate;

CREATE TABLE savedstate (
  id serial PRIMARY KEY,
  name varchar,
  data text
)