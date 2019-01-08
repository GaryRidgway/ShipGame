function Fire_controls(fire_key) {
  this.beams = [];
  this.fire = false;
  this.since_last_fire = 0;
  this.beam_width = 4;
  this.ship_data;
  this.beam_inset = 7;

  this.fire_press = function(e){
    if (e.keyCode === fire_key /* designated fire key */){
      this.fire = true;
    }
  }.bind(this);
  $(document).keydown(this.fire_press);

  this.fire_release = function(e){
    if (e.keyCode === fire_key /* designated fire key */){
      this.fire = false;
    }
  }.bind(this);
  $(document).keyup(this.fire_release);

  // This is the function to call to run the fire loop.
  this.gameloop = function(x, y, width, height) {
    this.get_ship_data(x, y, width, height);
    this.fire_update();
  }

  this.fire_update = function() {
    if (this.fire){
      this.fire_beam();
    }
    for (beam in this.beams) {
      this.beams[beam].gameloop();
      if(this.beams[beam].y < -this.beams[beam].height) {
        this.beams.splice(beam, 1);
      }
    }
  }

  this.fire_beam = function() {
    if(this.since_last_fire == 0) {
      this.beams.push(new Beam(this.ship_data.x + this.beam_inset, this.ship_data.y, beam_velocity, this.beam_width));
      this.beams.push(new Beam(this.ship_data.x + this.ship_data.width - this.beam_width - this.beam_inset, this.ship_data.y, beam_velocity, this.beam_width));
      this.since_last_fire = fire_interval;
    } else {
      this.since_last_fire --;
    }
  }.bind(this);

  this.get_ship_data = function(x, y, width, height) {
    this.ship_data =  {x      : x,
                       y      : y,
                       width  : width,
                       height : height
                      }
  }.bind(this);
}
