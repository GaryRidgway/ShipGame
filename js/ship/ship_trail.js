function Ship_Trail(x,y,e_dis_x,e_dis_y) {
  this.particle_array = [];
  this.max_particles = 15;
  this.ship_x = x;
  this.ship_y = y;
  this.e_dis_x = e_dis_x;
  this.e_dis_y = e_dis_y;
  this.radius = 19;
  this.opacity = 0.2;

  this.gameloop = function(x, y) {
    this.ship_x = x;
    this.ship_y = y;

    this.update_display();
  };

  this.add_particle = function() {
    this.particle_array.push({
      x: this.justify_xy().x,
      y: this.justify_xy().y,
      width: this.radius,
      height: this.radius,
      opacity: this.opacity
    });
  }

  this.update_display = function() {
    if (this.particle_array.length < this.max_particles) {
      this.add_particle();
    }
    // Update the data for each particle and then display it.
    // These are combined for this because it reduces the amount of time it takes
    // by doing them both at once.
    push();
    for (var particle in this.particle_array) {
      if (this.particle_array[particle].opacity <= 0) {
        this.particle_array.splice(particle,1);
      } else {
        dis_color = color('rgba(250,250,250,' + this.particle_array[particle].opacity + ')');
        // stroke('rgba(255,255,255,0.4)');
        noStroke();
        fill(dis_color);
        ellipse(
          this.particle_array[particle].x,
          this.particle_array[particle].y,
          this.particle_array[particle].width,
          this.particle_array[particle].height
          );

        this.particle_array[particle].opacity -= this.opacity/this.max_particles;
        this.particle_array[particle].x += this.radius/this.max_particles/8;
        this.particle_array[particle].y += this.radius/this.max_particles/8;
        this.particle_array[particle].width -= this.radius/this.max_particles;
        this.particle_array[particle].height -= this.radius/this.max_particles;
      }
    }
    pop();
  }.bind(this);

  this.justify_xy = function() {
    j_x = this.ship_x + ship_dims.x/2 + this.e_dis_x;
    j_y = this.ship_y + ship_dims.x/2 + this.e_dis_y;
    return{'x': j_x, 'y': j_y};
  }
}
