
# Prime Solo Project Starting Repo
This version uses React, Redux, Express, Passport, and PostgreSQL (a full list of dependencies can be found in `package.json`).

We **STRONGLY** recommend following these instructions carefully. It's a lot, and will take some time to set up, but your life will be much easier this way in the long run.

## Use the Template for This Repository (Don't Clone)

- Don't Fork or Clone. Instead, click the `Use this Template` button, and make a copy to your personal account. Make the project `PUBLIC`!


## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)

## Create database and table

[X] Create a new database called `prime_app` (now `to_tat`) and create a `user` table:

```SQL
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);
```

[X] (changed the name of the database to `to_tat`) If you would like to name your database something else, you will need to change `prime_app` to the name of your new database name in `server/modules/pool.js`

## Development Setup Instructions

[X] change the localhost to 5001. (searched for all occurences of 5000 and changed all to 5001).

- [X] Run `npm install`
- [X] Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure. Here's a site that can help you: [https://passwordsgenerator.net/](https://passwordsgenerator.net/). If you don't do this step, create a secret with less than eight characters, or leave it as `superDuperSecret`, you will get a warning.
- [X] Start postgres if not running already by using `brew services start postgresql`
- [X] Run `npm run server`
- [X] Run `npm run client`
- [X] Navigate to `localhost:3000`

## Debugging

[X] To debug, you will need to run the client-side separately from the server. Start the client by running the command `npm run client`. Start the debugging server by selecting the Debug button.

![VSCode Toolbar](documentation/images/vscode-toolbar.png)

[X] Then make sure `Launch Program` is selected from the dropdown, then click the green play arrow.

![VSCode Debug Bar](documentation/images/vscode-debug-bar.png)

## Testing Routes with Postman

To use Postman with this repo, you will need to set up requests in Postman to register a user and login a user at a minimum.

Keep in mind that once you using the login route, Postman will manage your session cookie for you just like a browser, ensuring it is sent with each subsequent request. If you delete the `localhost` cookie in Postman, it will effectively log you out.

1. [X] Start the server - `npm run server`
2. [X] Import the sample routes JSON file [v2](./PostmanPrimeSoloRoutesv2.json) by clicking `Import` in Postman. Select the file.
3. [X] Click `Collections` and `Send` the following three calls in order:
   1. [X] `POST /api/user/register` registers a new user, see body to change username/password
   2. [X] `POST /api/user/login` will login a user, see body to change username/password
   3. [X] `GET /api/user` will get user information, by default it's not very much

After running the login route above, you can try any other route you've created that requires a logged in user!

## Production Build

[X] Before pushing to Heroku, run `npm run build` in terminal. This will create a build folder that contains the code Heroku will be pointed at. You can test this build by typing `npm start`. Keep in mind that `npm start` will let you preview the production build but will **not** auto update.

- [X] Start postgres if not running already by using `brew services start postgresql`
- [X] Run `npm start`
- [X] Navigate to `localhost:5001`

## Lay of the Land

There are a few videos linked below that show a walkthrough the client and sever setup to help acclimatize to the boilerplate. Please take some time to watch the videos in order to get a better understanding of what the boilerplate is like.

- [Initial Set](https://vimeo.com/453297271)
- [Server Walkthrough](https://vimeo.com/453297212)
- [Client Walkthrough](https://vimeo.com/453297124)

Directory Structure:

- `src/` contains the React application
- `public/` contains static assets for the client-side
- `build/` after you build the project, contains the transpiled code from `src/` and `public/` that will be viewed on the production site
- `server/` contains the Express App

This code is also heavily commented. We recommend reading through the comments, getting a lay of the land, and becoming comfortable with how the code works before you start making too many changes. If you're wondering where to start, consider reading through component file comments in the following order:

- src/components
  - [X] App/App
  - [X] Footer/Footer
  - [X] Nav/Nav
  - [X] AboutPage/AboutPage
  - [X] InfoPage/InfoPage
  - [X] UserPage/UserPage
  - [X] LoginPage/LoginPage
  - [X] RegisterPage/RegisterPage
  - [X] LogOutButton/LogOutButton
  - [X] ProtectedRoute/ProtectedRoute

## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy

## Update Documentation



Customize this ReadMe and the code comments in this project to read less like a starter repo and more like a project. Here is an example: https://gist.github.com/PurpleBooth/109311bb0361f32d87a2

## APP Milestones and Schedule
- [X] Create the App.js start | estimated hours: 2 | Due: 3/1 | Base | Complete with questions
- [X] Create the Index.js start | estimated hours: 2 | Due: 3/1 | Base | Complete with questions
- [X] Make tables on Postico | estimated hours: 2 | Due: 3/2 | Base | Complete with questions
- [X] GET - Info from db | estimated hours: 1 | Due: 3/2 | Base | Complete will rewatch the end of a lecture from 2/28 to check
- [X] Pool and Router starters | estimated hours: 1 | Due: 3/2 | Base | Complete with work to add for other pools
- [X] Research correct names for tattoo styles | estimated hours: 1 | Due: 3/1 | Base | to-do
- [] Home onClick (follows App title header) | estimated hours: 1 | Due: 3/7 | Base | to-do
- [] POST - tattoo idea to database onClick of post/save button | estimated hours: 3 | Due: 3/7 | Base | to-do
- [] Import material-ui/icons | estimated hours: 3 | Due: 3/7 | Base | to-do
- [] Insert Index.js updates to utilize sagas and to create store for the reducers | estimated hours: 3 | Due: 3/8 | Base | to-do
- [] DELETE - ability to remove idea | estimated hours: 2 | Due: 3/9 | Base | to-do
- [] LOGIN/SIGN-UP page | estimated hours: 6 | Due: 3/10 | Base | to-do
- [] PUT - edit idea button brings you back to the add idea page | estimated hours: 4 | Due: 3/13 | Base | to-do
- [] Styling via CSS | estimated hours: 20 | Due: 3/20 | Base | to-do

## STRETCH Milestones
- [] DELETE - ability to remove artist | estimated hours: 2 | Stretch | to-do
- [] POST - artist added to database onClick of post/save button | estimated hours: 2 | Stretch | to-do
- [] PUT - Edit artist button brings you back to the add artist page | estimated hours: 4 | Stretch | to-do
- [] PUT - completed idea button changes the tatted field to completed | estimated hours: 4 | Stretch | to-do
- [] API - utilize google Maps, so the tattoo shop locations can be mapped | estimated hours: 5 | Stretch | to-do
- [] Link artist style to tattoo idea style - make a joiner table that links the tattoo idea style with the artist style. | estimated hours: 4 | Stretch | to-do
- [] Create an input field on the Add Tattoo Idea page that allows users to store a URL that links to an image for idea reinforcement. If this goal is reached, an 8th property would be added to the ideas table. This property would be named image. | estimated hours: 4 | Stretch | to-do


## Tattoo styles to include:

- Undecided (default this one)
- American Traditional (most common)
- Black and Grey (most common)
- Neo-Traditional (most common)
- Realism (most common)
- New School (most common)
- Fine Line (most common)
- Japanese Traditional(most common)
- Tribal (most common)
- Illustrative (most common)
- Ornamental (most common)
- Abstract
- Blackwork
- Cartoon/Anime
- Chicano
- Continuous Line Contour
- Geometric
- Script/Lettering
- Surrealism
- Trash Polka
- Watercolor
- Embroidery (not including to start)
