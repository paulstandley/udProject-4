var allEnemies = [];
var player;
var speed_Random = 0;
var random_location;
var pos_x;
var pos_y;

class Enemy {
    constructor() {
        this.x = 1;
        this.y = 1;
        // Variables applied to each of our instances go here,
        this.speed_Random = (Math.floor(Math.random() * 4) + 1);
        this.random_location = Math.floor(Math.random() * 2);
        // we've provided one for you to get started
        // The image/sprite for our enemies, this uses
        // a helper we've provided to easily load images
        this.sprite = 'images/enemy-bug.png';
    }
    // Update the enemy's position, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
        this.speed_Random = speed_Random * dt;
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
    }
    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}



class Person {
    constructor() {
        this.x = 1;
        this.y = 1;
        // Variables applied to each of our instances go here,
        
        this.sprite = 'images/char-boy.png';
    }
    // Update, required method for game
    // Parameter: dt, a time delta between ticks
    update(dt) {
    
    
        // You should multiply any movement by the dt parameter
        // which will ensure the game runs at the same speed for
        // all computers.
    }

    handleInput(evt) {
        console.log(evt);
    }
    // Draw the enemy on the screen, required method for game
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}


// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy = new Enemy();
player = new Person(); 
console.log(player);
allEnemies.push(enemy);
console.log(allEnemies);
console.log(enemy.speed_Random);


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
