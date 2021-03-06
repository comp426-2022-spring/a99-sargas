const express = require('express')
const app = express()

const morgan = require('morgan')
const db = require('./database/user.js')
const feeldb = require('./database/feeling.js')


// Serve static HTML files
app.use(express.static('./public'));

// Add cors dependency
const cors = require('cors')
// Set up cors middleware on all endpoints
app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var port = 5555
// Make this const default to port 3000 if there is no argument given for `--port`.
console.log(port)

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

app.get("/app/delete", (req, res)=>{ // NOT READY
    res.statusCode = 200
    let data = {
        user: req.body.username,
    } 
    const stmt = db.prepare("DELETE FROM userinfo where username = ?")
    const info = stmt.run("data.user")
    res.status(200).json(info)

 //   "SELECT * FROM mobile_sales WHERE unit_sale >= ?"
})

app.post('/app/register', (req, res)=>{
    //var userName = req.body.username // have to attach this to a form
    let data = {
        user: req.body.username,
        password:req.body.password
    } 
    //var password = req.body.password // have to attach this to a form
    const stmt = db.prepare(`INSERT INTO userinfo (
        username,
        password
    ) VALUES (?, ?)
      `)
    const info = stmt.run(data.user , data.password) // Gotta figure out how to get them
    info
    res.status(200).json("You're Registered!")
    console.log("something registered!")
})

app.post('/app/login', (req, res) => {
    //Respond w status 200
    var isUserNamePresent = false
    let data = {
        username: req.body.username,
        password:req.body.password
    } 
   let i = -1;
    console.log(data.username)
    console.log(data.password)
    res.statusCode = 200;
    var login = false
    var stmt = db.prepare("SELECT * FROM userinfo").all()
    for (x in stmt){
        if (stmt[x]["username"] == data.username){ // the magical way to access the username... This took me an hour, lol - Albert
            isUserNamePresent = true
            i = x;
        }
    }
    if(isUserNamePresent){
        if (stmt[i]["password"] == data.password){
            login = true
        }else{
            res.status(200).json({"status":"incorrectPassword"})
         //   res.status(200).json("Incorrect Password")
            console.log("Incorrect Password")
        }
            
        
    }else{
        res.status(200).json({"status":"badUsername"})
  //      res.json({"message": "usernameNotRecognized"})
      //  res.status(200).json("Username is not recognized")
        console.log("Username not recognized")
    }
    if(login){
        res.status(200).json({"status":"LOGIN", "user":data.username})
      //  res.status(200).json("LOGIN")
        console.log("LOGIN")
    }
});


app.post("/app/feeling/user", (req, res, next) => {
    let data = {
        feeling: req.body.feeling,
        username: req.body.username,
        date: new Date().toISOString().split('T')[0]
    }
    //need to get user from  other parts
    console.log(data.username)
    console.log(data.feeling)
    console.log(data.date)
    const stmt = feeldb.prepare('INSERT INTO feelinginfo (username, feeling, date) VALUES (?, ?,?)')
    const info = stmt.run(data.username, data.feeling, data.date)
  
    res.status(200).json(info)
});

app.get("/app/graph/:username", (req, res) => {
    try {

        let all = []
        let dates = []
        let d = 0
        let feel = []
        let f=0
        const stmt = feeldb.prepare('SELECT * FROM feelinginfo').all()
        for (x in stmt){
            if (stmt[x]["username"] == req.params.username){ // the magical way to access the username... This took me an hour, lol - Albert
                console.log(stmt[x]["date"])
                dates[d] = stmt[x]["date"]

                feel[f] = stmt[x]["feeling"]
                all[d] = [stmt[x]["date"], stmt[x]["feeling"]]
                d++
                f++
            }
        }
        console.log(all)
        console.log(dates)
        console.log(feel)
        res.status(200).json(all)
        
    } catch (e) {
        console.error(e)
    }

});

app.use(function(req, res) {
    res.type("text/plain")
    res.status(404).send("Endpoint does not exist")
})