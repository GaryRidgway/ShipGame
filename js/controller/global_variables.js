var ship;
var canvas;
var cDim = [400, 600];
var ship_speed = 6;
var bg_stars =[];
var num_bg_stars = 120;
var bg_color;
var spaceship;
var fire_interval = 6;
var beam_velocity = 15;
var starspeed = 0.8;


// Ship display variables.

// Ship size.
var ship_size = 4;
var ship_translate = {x: 50, y: 10};
var ship_cockpit_grey_1 = '#ebf6fa';
var ship_cockpit_grey_2 = '#dbe4e9';

var ship_cockpit_blue_1 = '#1968d1';
var ship_cockpit_blue_2 = '#488eeb';
var ship_cockpit_blue_3 = '#4a8ee7';
var ship_cockpit_blue_4 = '#599af0';
var ship_cockpit_blue_5 = '#79b3ff';
var ship_cockpit_blue_6 = '#91c0ff';


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

