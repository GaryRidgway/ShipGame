function Beam(x, y, velocity, beam_width) {
  this.height = 42;
  this.width = beam_width;
  this.x = x;
  this.y = y;
  this.velocity = velocity;

  this.gameloop = function() {
    this.update_ypos();
    this.display();
  }

  this.update_ypos = function(){
    this.y -= velocity;
  }.bind(this);

  this.display = function() {
    push();
      beamsplit = 6;
      color1 = color('rgba(24, 190, 255, 0.9)');
      color2 = color('rgba(255, 255, 255, 0)');
      noStroke();
      fill(color1);
      rect(this.x, this.y, this.width, beamsplit, 50, 50, 0, 0);
      setGradient(this.x, this.y + beamsplit, this.width -1, this.height - beamsplit, color1, color2, "Y");
    pop();
  }.bind(this);
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();
  if (axis == "Y") {  // Top to bottom gradient
    for (let i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
  }
  else if (axis == "X") {  // Left to right gradient
    for (let j = x; j <= x+w; j++) {
      var inter2 = map(j, x, x+w, 0, 1);
      var d = lerpColor(c1, c2, inter2);
      stroke(d);
      line(j, y, j, y+h);
    }
  }
}
