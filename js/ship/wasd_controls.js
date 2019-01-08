// This Might be better if rewritten as an object??

var wasd_up = false,
    wasd_right = false,
    wasd_down = false,
    wasd_left = false;
var wasd_x, wasd_y, wasd_velocity;

// Must be called first before doing any game loops.
// Takes the X and Y it will be monitoring
function WASD_Setup(x, y, velocity) {
  wasd_x = x;
  wasd_y = y;
  wasd_velocity = velocity;
}

document.addEventListener('keydown',press);
function press(e){
  if (e.keyCode === 38 /* up */ || e.keyCode === 87 /* w */ || e.keyCode === 90 /* z */){
    wasd_up = true
  }
  if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */){
    wasd_right = true
  }
  if (e.keyCode === 40 /* down */ || e.keyCode === 83 /* s */){
    wasd_down = true
  }
  if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */ || e.keyCode === 81 /* q */){
    wasd_left = true
  }
}
document.addEventListener('keyup',release);
function release(e){
  if (e.keyCode === 38 /* up */ || e.keyCode === 87 /* w */ || e.keyCode === 90 /* z */){
    wasd_up = false
  }
  if (e.keyCode === 39 /* right */ || e.keyCode === 68 /* d */){
    wasd_right = false
  }
  if (e.keyCode === 40 /* down */ || e.keyCode === 83 /* s */){
    wasd_down = false
  }
  if (e.keyCode === 37 /* left */ || e.keyCode === 65 /* a */ || e.keyCode === 81 /* q */){
    wasd_left = false
  }
}

// Changes the y and x.
function WASD_update() {
  if (wasd_up){
    wasd_y = wasd_y - wasd_velocity;
  }
  if (wasd_right){
    wasd_x = wasd_x + wasd_velocity;
  }
  if (wasd_down){
    wasd_y = wasd_y + wasd_velocity;
  }
  if (wasd_left){
    wasd_x = wasd_x - wasd_velocity;
  }
}
