const express = require('express')
const app = express()
const args = require('minimist')(process.argv.slice(2)) 
const morgan = require('morgan')
const users = require('./public/database/user.js')
const feels = require('./public/database/feeling.js')
const fs = require('fs')
const md5 = require('md5')

// Serve static HTML files
app.use(express.static('./public'));

// Add cors dependency
const cors = require('cors')
// Set up cors middleware on all endpoints
app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const server = app.listen(port, () => {
    console.log('App is running on port %PORT%'.replace('%PORT%',port))
})

app.get('/app/', (req, res) => {
    //Respond w status 200
    res.statusCode = 200;
    //Respond w status message "OK"
    res.statusMessage = 'OK';
    res.writeHead( res.statusCode, {
        'Content-Type' : 'text/plain' });
        res.end(res.statusCode+ ' ' + res.statusMessage)
});

app.get('/app/moreInfo', (req, res) => {
    //Respond w status 200
    res.statusCode = 200;
    //Respond w status message "OK"
    res.statusMessage = 'OK';
    res.writeHead( res.statusCode, {
        'Content-Type' : 'text/plain' });
        res.end(res.statusCode+ ' ' + res.statusMessage)
});

app.get('/app/login', (req, res) => {
    //Respond w status 200
    res.statusCode = 200;
    //Respond w status message "OK"
    res.statusMessage = 'OK';
    res.writeHead( res.statusCode, {
        'Content-Type' : 'text/plain' });
        res.end(res.statusCode+ ' ' + res.statusMessage)
});

app.use(function(req, res) {
    res.type("text/plain")
    res.status(404).send("Endpoint does not exist")
  

})

app.post("/app/feeling/:user", (req, res, next) => {
    let data = {
        user: req.body.username,
        feeling: req.body.feeling,
        date: new Date()
    }
    //need to get user from  other parts

    const stmt = db.prepare('INSERT INTO feelinginfo (username, feeling, date) VALUES (?, ?,?)')
    const info = stmt.run(data.user, data.feeling, data.date)
    res.status(200).json(info)
});

app.get("/app/graph/:user", (req, res) => {
    try {
        const stmt = db.prepare('SELECT * FROM userinfo WHERE id = ?').get(req.params.user);
        res.status(200).json(stmt)
    } catch (e) {
        console.error(e)
    }

});