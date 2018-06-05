// Enemies our player must avoid
var Enemy = function({x=-101, y=405}={}) {
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
// speed of the enemy after each run has been completed
  if (!this.gotRandom) {

  function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

  let randomNumber = getRandomArbitrary(100, 500);
  this.moveIncrementer = randomNumber;
  this.gotRandom = true;
};


  if (this.widthSpace<505+171) {
      this.x = (this.x + this.moveIncrementer*dt);

      // This checks for collisions
      if (this.y == player.y && (this.widthSpace-50)>=player.x && (this.widthSpace-50)<player.widthSpace) {
        player.x = 200;
        player.y = 405;
        player.numOFWins = 0;
      } else if (this.y == player.y && (this.x+50)>=player.x && (this.x+50)<player.widthSpace) {
        player.x = 200;
        player.y = 405;
        player.numOFWins = 0;
      };


    } else {
      this.x = -101;
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
var Player = function({x=200, y=405, value="char-princess-girl"}={}) {
  this.value = value;
  this.sprite = `images/${this.value}.png`;
  this.x = x;
  this.y = y;
  this.widthSpace;
  this.heightSpace;
  this.numOFWins = 0;
  // this.previousScore = 0;
  // this.checkWin = false;
};

Player.prototype.update = function () {
  this.widthSpace= this.x + 101;

  // Arrow function to set "this" properly to the player
  const resetPosition = () => {
  this.x = 200;
  this.y = 405;
  // this.previousScore = this.numOFWins;
  }

  const updateWin = () => {
  // if (this.numOFWins == this.previousScore) {
    ++this.numOFWins;
  // }
  }

  if (this.y == -10) {
    updateWin();
    resetPosition();
    animations();
  }

};

Player.prototype.render = function () {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (key) {
  if (key == "up" && this.y>-10) {
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
  enemy1 = new Enemy({y:322}),
  enemy2 = new Enemy({y:239}),
  enemy3 = new Enemy({y:156}),
  enemy33 = new Enemy({y:156}),
  enemy4 = new Enemy({y:73}),
  enemy44 = new Enemy({y:73}),
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
