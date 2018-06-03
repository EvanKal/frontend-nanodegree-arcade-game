// Enemies our player must avoid
var Enemy = function({x=-91, y=405}={}) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.widthSpace;
    this.heightSpace;
    this.moveIncrementer = 0;
    this.gotRandom = false;

};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {

  this.widthSpace= this.x + 101;

// This conditional is used to get a new random number that defines the
// speed of the enemy after each run
  if (!this.gotRandom) {

  function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

  let randomNumber = getRandomArbitrary(100, 500);
  this.moveIncrementer = randomNumber;
  this.gotRandom = true;
};


  if (this.widthSpace<505) {
      this.x = (this.x + this.moveIncrementer*dt);

      if (this.y == player.y && this.widthSpace>=player.x && this.widthSpace<player.widthSpace) {
        player.x = 200;
        player.y = 405;
      } else if (this.y == player.y && this.x>=player.x && this.x<player.widthSpace) {
        player.x = 200;
        player.y = 405;
      };


    } else {
      this.x = -91;
      this.gotRandom = false;
    };
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function({x=200, y=405}={}) {
  this.sprite = 'images/char-boy.png';
  this.x = x;
  this.y = y;
  this.widthSpace;
  this.heightSpace;
};

Player.prototype.update = function () {
  this.widthSpace= this.x + 101;
  this.heightSpace= this.y + 171;
};

Player.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (key) {
  if (key == "up" && this.y>73) {
    this.y = this.y - 83;
    console.log(`${this.x}, ${this.y}`);
    }

  if (key == "down" && this.y<405) {
    this.y = this.y + 83;
    console.log(`${this.x}, ${this.y}`);
    }

  if (key == "left" && this.x>0) {
    this.x = this.x - 100;
    console.log(`${this.x}, ${this.y}`);
    }

  if (key == "right" && this.x<400) {
    this.x = this.x + 100;
    console.log(`${this.x}, ${this.y}`);
    }

};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
const allEnemies = [
  enemy1 = new Enemy({x:-91, y:322}),
  enemy2 = new Enemy({x:-91, y:239}),
  enemy3 = new Enemy({x:-91, y:156}),
  enemy4 = new Enemy({x:-91, y:73}),
];
const player = new Player();



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
