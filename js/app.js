class Enemy {
    constructor() {
        this.x = 0; //zero, since this property is changed in the update method. 
        this.yVar = [3, 86, 169] //All possible y-values that will collide with player
        this.y = (this.yVar[Math.floor(Math.random()* this.yVar.length)]) + 45; //randomises y-position that enemy will occupy
        this.moveStep = 100;
        this.speed = (Math.floor(Math.random()*301)+100);
        //This generates a random speed for each enemy between 100 and 300. From w3schools.com
        this.sprite = 'images/enemy-bug.png';
    }


    render (){
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    };

    update(dt){
    if (this.x < this.moveStep * 5.5){
        this.x += this.speed*(dt)
    } else {
        //if x position is greater than step * 5.5, reset position to slightly offscreen. 
        this.x = -83
    }
    };

}

class Avatar {
    constructor() {
        this.moveX = 100;
        this.moveY = 83;
        this.startX = 203;
        this.startY = 380;
        this.x = 203;
        this.y = 380;
        this.gameOver = false;
        //starting position at top left of screen (0, 0)
        //new starting position at center block of bottom row (203,380)
        this.sprite = 'images/char-boy.png';

    }

    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }

    handleInput(input) {
      switch(input){
        //establish controls for the player, prevent them from moving offscreen. 
          case 'left':
          if (this.x > 3){
            this.x -= this.moveX;
          }

          break;

          case 'right':
          if (this.x < 403) {
            this.x += this.moveX;
            }
          break;

          case 'up':
          if (this.y > 0){
            this.y -= this.moveY;
          }
          break;

          case 'down':
          if (this.y < 380){
          this.y += this.moveY;
          }
          break;

      }
    }

    update() {
        for(let enemy of allEnemies){
            if(this.y === enemy.y && (enemy.x + enemy.moveStep/1.75 > this.x && enemy.x + enemy.moveStep/1.55 < (this.x + this.moveY))){
               this.reset();
               //dividing moveStep by an interger reduces the distance needed to detect a collision, making it more visually accurate. 
            }
        }
        if(this.y === -35){
           this.gameOver = true; 
        }
    }
    
    reset(){
        //moves player back to starting position
        this.x = this.startX;
        this.y = this.startY; 
    }

}

const player = new Avatar();
//since each enemy is generated seperately, they will have varying speeds and row positions. 
const enemy1 = new Enemy();
const enemy2 = new Enemy();
const enemy3 = new Enemy();
const enemy4 = new Enemy();
const enemy5 = new Enemy();
let allEnemies = [];
allEnemies.push(enemy1, enemy2, enemy3, enemy4, enemy5);



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
