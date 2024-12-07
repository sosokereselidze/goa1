const events = require('events');

const players = [];

const playerEvents = new events.EventEmitter();

playerEvents.on("registration", player => {
  console.log(`${player.username} has registered!`);
  players.push(player);
})

playerEvents.on("login", player => {
  if(player !== undefined) {
    console.log(`${player.username} has logged in!`);
    return;
  } else {
    console.log("Player not found!");
    return;
  }
})

class Player {
  constructor(username, email, lvl, score, password) {
    this.username = username;
    this.email = email;
    this.lvl = lvl;
    this.score = score;
    this.password = password;

    playerEvents.emit("registration", this);
  }

  static login(email, password) {
    const player = players.find(acc => acc.email === email && acc.password === password);

    playerEvents.emit("login", player);
  }
}

new Player("John Doe", "johndoe@example.com", 1, 100, "john111");
new Player("Jane Smith", "janesmith@example.com", 2, 200, "jane111");


Player.login("johndoe@example.com", "john121");