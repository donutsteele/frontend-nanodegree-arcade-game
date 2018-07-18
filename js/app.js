// Enemies our player must avoid
class Enemy {
    constructor() {
        this.x = -83;
        this.y = 45;
        this.moveStep = 83;

        //enemy valid y positions:45, 128, 211
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images

    this.sprite = 'images/enemy-bug.png';
    }
    render (){
        // Draw the enemy on the screen, required method for game
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

    update(dt){
    if (this.x < this.moveStep * 6.5){
        this.x += 100*(dt)
    } else {
        this.x = -83
    }
    };

}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
// Enemy.prototype.update = function(dt) {
//     // You should multiply any movement by the dt parameter
//     // which will ensure the game runs at the same speed for
//     // all computers.


// };




// Now write your own player class
// This class requires an update()

class Avatar{
    constructor() {
        this.moveRow = 100;
        this.moveCol = 83;
        this.x = 203;
        this.y = 380;
        //starting position at top left of screen (0, 0)
        //new starting position at center block of bottom row (203,380)
        //potential feature: replace this.sprite with template literal to allow avatar selection 
        this.sprite = 'images/char-boy.png';

    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    handleInput(input) {
      switch(input){

          case 'left':
          if (this.x > 3){
            this.x -= this.moveRow;
          }

          break;

          case 'right':
          if (this.x < 403) {
            this.x += this.moveRow;
            }
          break;

          case 'up':
          if (this.y > 0){
            this.y -= this.moveCol;
          }
          break;

          case 'down':
          if (this.y < 380){
          this.y += this.moveCol;
          }
          break;

      }
    }

    // update(dt) {

    // }
}

const player = new Avatar();
const enemy1 = new Enemy();
let allEnemies = [];
allEnemies.push(enemy1);

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



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
