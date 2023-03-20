
# To Tat Solo Project 

## List of utilized programs and dependencies
- React
- Redux
- Express
- Passport
- PostgreSQL
- Figma (where many of the SVGs were created) 

(a full list of dependencies can be found in `package.json`).

## APP Milestones and Schedule
- [X] Create the App.js start | estimated hours: 2 | Due: 3/1 | Base | Complete
- [X] Create the Index.js start | estimated hours: 2 | Due: 3/1 | Base | Complete
- [X] Make tables on Postico | estimated hours: 2 | Due: 3/2 | Base | Complete
- [X] LOGIN/SIGN-UP page | estimated hours: 2 | Due: 3/2 | Base | Complete
- [X] GET - Info from db | estimated hours: 1 | Due: 3/2 | Base | Complete
- [X] Pool and Router starters | estimated hours: 1 | Due: 3/2 | Base | Complete with work to add for other pools
- [X] Research correct names for tattoo styles | estimated hours: 1 | Due: 3/1 | Base | Complete
- [X] Home onClick (follows App title header) | estimated hours: 1 | Due: 3/7 | Base | Complete
- [X] POST - tattoo idea to database onClick of post/save button | estimated hours: 8 | Due: 3/7 | Base | Complete
- [X] Create an edit component | estimated hours: 2 | Due: 3/7 | Base | Complete
- [X] DELETE - ability to remove idea | estimated hours: 6 | Due: 3/7 | Base | Complete
- [X] PUT - edit idea button brings you back to the edit page and sends back an edited object | estimated hours: 6 | Due: 3/7 | Base | Complete
- [X] Import material-ui/icons | estimated hours: 3 | Due: 3/7 | Base | Complete
- [X] Insert Index.js updates to utilize sagas and to create store for the reducers | estimated hours: 3 | Due: 3/8 | Base | Complete
- [X] Styling via CSS | estimated hours: 30 | Due: 3/20 | Base | In progress

## STRETCH Milestones
- [X] Create a new table in postico to hold the artists | estimated hours: .5 | Stretch | Complete
- [X] DELETE - ability to remove artist | estimated hours: 2 | Stretch | Complete
- [X] POST - artist added to database onClick of post/save button | estimated hours: 2 | Stretch | Complete
- [X] PUT - Edit artist button brings you back to the add artist page | estimated hours: 4 | Stretch | Complete
- [X] Create images for the site utilizing Figma | estimated hours: 4 | Stretch | Complete
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

## Tattoo placements to include:

- Undecided
- Upper Arm - Right
- Upper Arm - Left
- Forearm - Right
- Forearm - Left
- Upper Leg - Right
- Upper Leg - Left
- Lower Leg - Right
- Lower Leg - Left
- Side - Right
- Side - Left
- Back
- Chest
- Abdomen
- Hand - Right>
- Hand - Left
- Foot - Right
- Foot - Left
- Neck
- Face
- Butt
- Head
- Other

## HEX numbers for color palette styles to include:

- #fcf7e6 (corn at 70% lighter tint)
- #005249 (Aqua Deep)
- #E1AD01 (corn)
- #282828 (Mine Shaft)

## Lay of the Land

- `src/` contains the React application
- `public/` contains static assets for the client-side
- `server/` contains the Express App

# Other Setup performed at the beginning:

## Development Setup

- [X] change the localhost to 5001. (searched for all occurences of 5000 and changed all to 5001).
- [X] Run `npm install`
- [X] Create a `.env` file at the root of the project
- [X] Start postgres if not running already
- [X] Run `npm run server`
- [X] Run `npm run client`
- [X] Navigate to `localhost:3000`

## Testing Routes with Postman

1. [X] Start the server - `npm run server`
2. [X] Import the sample routes JSON file [v2](./PostmanPrimeSoloRoutesv2.json) by clicking `Import` in Postman. Select the file.
3. [X] Click `Collections` and `Send` the following three calls in order:
   1. [X] `POST /api/user/register` registers a new user, see body to change username/password
   2. [X] `POST /api/user/login` will login a user, see body to change username/password
   3. [X] `GET /api/user` will get user information, by default it's not very much

# Deployment

## Future Deployment (if desired)

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy

