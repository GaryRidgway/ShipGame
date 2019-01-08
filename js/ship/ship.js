function ship_preload() {
  spaceship = loadImage('Assets/spaceship_red.png')
}

function Ship(x, y) {
  this.width = 47;
  this.height = 29;
  this.x = x || width/2 - this.width/2;
  this.y = y || height - 10 - this.height;
  this.fire_controls = new Fire_controls(75);

  this.gameloop = function() {
    this.update();
    this.display();
  }

  this.display = function() {
    push()
      stroke('#434343');
      noFill();
      image(spaceship, this.x, this.y);
    pop()
  }

  this.update = function() {

    this.fire_controls.gameloop(this.x, this.y, this.width, this.height);

    // Make the ship move.
    WASD_update();
    this.x = wasd_x;
    this.y = wasd_y;
  }
}
