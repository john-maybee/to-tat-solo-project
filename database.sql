
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
); -- added 

-- ideas table
-- question: 
-- should I keep the details column as NOT NULL and have it fill in undecided if there is no detail information filled out?
-- should I make a config table for the styles that I can use a dropdown for, or leave this as a VARCHAR within the "ideas" table?
-- Stretch additions:
-- possibly the config table for styles depending on the answer to the above.
-- a "tatted" column after the placement column.
CREATE TABLE "ideas" (
    "id" SERIAL PRIMARY KEY,
    "user_id" INT REFERENCES "user",
    "name" VARCHAR (80) NOT NULL,
    "details" VARCHAR (1000) NOT NULL,
    "style" VARCHAR (100) NOT NULL,
    "placement" VARCHAR (100) NOT NULL
); -- added