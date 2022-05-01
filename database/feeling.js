"use strict";
// Require better-sqlite.
const Database = require('better-sqlite3');

// Connect to a database or create one if it doesn't exist yet.
const db = new Database('feeling.db');

// Is the database initialized or do we need to initialize it?
const stmt = db.prepare(`
    SELECT name FROM sqlite_master WHERE type='table' and name='feelinginfo';`
    );
// Define row using `get()` from better-sqlite3
let row = stmt.get();
// Check if there is a table. If row is undefined then no table exists.
if (row === undefined) {
// Echo information about what you are doing to the console.
    console.log('Your database appears to be empty. I will initialize it now.');
// Set a const that will contain your SQL commands to initialize the database.
    const sqlInit = `
        CREATE TABLE feelinginfo ( id INTEGER PRIMARY KEY, username TEXT, date TEXT, feeling INTEGER );
        INSERT INTO feelinginfo (username, date, feeling) VALUES ('demo', '2022-04-01',4),
        ('demo','2022-04-02',2),('demo', '2022-04-03',5),('demo', '2022-04-04',3),('demo', '2022-04-05',8),
        ('demo','2022-04-06',7),('demo', '2022-04-07',4),('demo', '2022-04-08',2),('demo', '2022-04-09',9),
        ('demo','2022-04-10',6),('demo', '2022-04-11',1),('demo', '2022-04-12',9),('demo', '2022-04-13',2),
        ('demo','2022-04-14',2),('demo', '2022-04-15',6),('demo', '2022-04-16',3),('demo', '2022-04-17',7),
        ('demo','2022-04-18',3),('demo', '2022-04-19',8),('demo', '2022-04-20',10),('demo', '2022-04-21',8),
        ('demo','2022-04-22',2),('demo', '2022-04-23',6),('demo', '2022-04-24',1),('demo', '2022-04-25',7),
        ('demo','2022-04-26',10),('demo', '2022-04-27',4),('demo', '2022-04-28',6),('demo', '2022-04-29',8),
        ('demo','2022-04-30',9),('demo', '2022-05-01',7);
    `;
// Execute SQL commands that we just wrote above.
    db.exec(sqlInit);
// Echo information about what we just did to the console.
    console.log('Your database has been initialized with a new table and two entries containing a username and password.');
} else {
// Since the database already exists, echo that to the console.
    console.log('FeelingDatabase exists.')
}
// Export all of the above as a module so that we can use it elsewhere.
module.exports = db