// The ship the player controls.
var ship;
// The canvas the game is drawn on.
var canvas;
// The set dimensions of the Canvas.
var cDim = [400, 600];
// The speed the ship is allowed to move about the canvas.
var ship_speed = 7;
// The Array of stars in the background.
var bg_stars =[];
// The amount of stars to put in the background.
var num_bg_stars = 120;
// The default background color
var bg_color;
// The image for the spaceship if an image is loaded.
var fire_interval = 6;
// The speed that a fired beam travels at.
var beam_velocity = 15;
// The speed of the stars int he back. speeds up depending on the layer.
// Check the background file for more understanding.
var starspeed = 0.8;


// Ship display variables.

// Ship size. Change this to make the ship larger or smaller.
var ship_size = 1;
// Ship dimensions.
var ship_dims = {x: 82 * ship_size, y: 52 * ship_size};
var ship_cockpit_grey_1 = '#ebf6fa';
var ship_cockpit_grey_2 = '#dbe4e9';

var ship_cockpit_blue_1 = '#1968d1';
var ship_cockpit_blue_2 = '#488eeb';
var ship_cockpit_blue_3 = '#4a8ee7';
var ship_cockpit_blue_4 = '#599af0';
var ship_cockpit_blue_5 = '#79b3ff';
var ship_cockpit_blue_6 = '#91c0ff';

var ship_wing_grey_1 = '#eeeeee';
var ship_wing_grey_2 = '#dfdfdf';
var ship_wing_grey_3 = '#d3d3d3';


// Body vertices.
var bv = [
  [-3,0],
  [2,0],
  [7,30],
  [7,50],
  [3,45],
  [-4,45],
  [-8,50],
  [-8,30]
];

// Cockpit Outer vertices.
var cov = [
  [-3, 22],
  [2, 22],
  [4, 29],
  [4, 35],
  [2, 38],
  [-3, 38],
  [-5, 35],
  [-5, 29]
];

// Cockpit Inner vertices.
var civ = [
  [-2, 25],
  [1, 25],
  [4, 29],
  [4, 35],
  [1, 36],
  [-2, 36],
  [-5, 35],
  [-5, 29]
];

// Wing vertices
var wv = [
  [10,33],
  [40,43],
  [40,47],
  [14,47],
  [10,52]
];

