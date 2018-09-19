const sqlite3 = require("sqlite3").verbose();

let db = new sqlite3.Database("./db/uts-sensor-data.db", err => {
  if (err) {
    console.error(err.message);
  }
  console.log("Connected to the sensor database.");
  db.run("CREATE TABLE IF NOT EXISTS sensor(data text)");
});

function save(message) {
  db.run(`INSERT INTO sensor(data) VALUES(?)`, [message], function(err) {
    if (err) {
      return console.log(err.message);
    }
    console.log(`last inserted data id ${this.lastID}`);
  });
}

module.exports = save;
