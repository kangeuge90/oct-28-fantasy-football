import express from 'express';
import IPlayer from '../models/IPlayer';
import Player from '../models/Player';

const roster = express.Router();
// create a new Router object

// create our apis

// array of players
const players: IPlayer[] = [new Player('BJ Clark', "Grand Circus", "Instructor", false)];

// add players
roster.post('/', (req, res) => {
    console.log(req.body)
    const player = new Player(
        req.body.name, 
        req.body.team, 
        req.body.position, 
        true, 
        false
    );

    players.push(player);
    //  ----API TECHNIQUE-----
    // res.json(player); // return the player that we've constructed

    //  ------WEBPAGE / POSTMAN TECHNIQUE (via add.hbs WEBPAGE or POSTMAN) -----------
    res.render('roster', { players})
})

// edit play information
// .splice()

// delete players
// .splice()

// get all players
roster.get('/', (req, res) => {
    // res.json(players); // return the players array  -----API TECHNIQUE -----
    // ------- WEBPAGE TECHNIQUE ---------- below
    res.render('roster', { players }) // we are passing in players to roster
    // players can be obtained by POSTMAN or by entering directly into .ts
})

roster.get('/add', (req, res) => {
    res.render('add');
})

// get player by name
// Possible Solutions:
// for, 
// forEach, 
// .find(), 
// if player.name = ...etc

// get players that have a specific position

export default roster;