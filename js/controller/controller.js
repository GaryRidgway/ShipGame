// we are using a base with of screen at 2000.
function preload() {
  environment_preload();
  bg_color = color('#242424');
  ship_img = loadImage('Assets/spaceship_red.png');
}

function setup() {
  setFrameRate(120);
  canvas = createCanvas(cDim[0], cDim[1]);
  ship = new Ship();
  WASD_Setup(ship.x, ship.y, ship_speed);

  // Move the canvas so it’s inside our <div id="sketch-holder">.
  canvas.parent('sketch-holder');
  canvas.background(bg_color);


}

function draw() {
  canvas.background(bg_color);
  environment_gameloop();
  ship.gameloop();
  debug_gameloop();
}
