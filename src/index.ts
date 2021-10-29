import express from 'express';
import cors from 'cors';
import roster from './routes/Roster';
import path from 'path';

const app = express();
// creates an instance of an Express server

app.use(cors())
// enable Cross Origin Resource Sharing so this API can be used from web-apps on other domains
// makes API publicly available to everyone

app.use(express.json())
// allow POST and PUT requests to use JSON bodies

app.use("/Roster/", roster); 
// everytime we go to "/roster/" we will use the roster route instructions
// use the roster object (and all the defined routes)

app.use(express.urlencoded({ extended: false }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));


const port = 3000;
// define the port

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}.`)
});
// Starts the server
// This function runs when server starts



// Construct a fantasy football roster
// array of players

// add players

// edit play information

// delete players

// get all players

// get player by id

// get players that have a specific position