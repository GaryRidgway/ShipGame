// Stars will be 5 pixels wide.

function Star(layer) {
  this.starspeed = 1.5;
  this.layer = layer;
  this.color = color('rgba(255, 255, 255, 0.6)');
  this.choice_arrays = [
                  [2],
                  [2,2,2,2,2,0,0,0,0],
                  [0,0,0,0,2,2,2,2],
                  [0,0,0,0,0,1,2,2,2,2]
                ];
  this.chosen_array = this.choice_arrays[this.layer];
  this.choice = this.chosen_array[Math.floor(Math.random() * this.chosen_array.length)];
  this.random_x = Math.floor(Math.random() * cDim[0]);
  this.random_y = Math.floor(Math.random() * cDim[1]);

  this.gameloop = function() {
    this.update();
    this.display();
  }

  this.display = function() {
    push();
      translate(this.random_x, this.random_y);
      stroke(this.color);
      if (this.choice == 0) {
        this.design_0();
      } else if(this.choice == 1) {
        this.design_1();
      } else if(this.choice == 2) {
        this.design_2();
      }
    pop();
  }.bind(this);

  this.update = function() {
    this.random_y += (layer + 1) * this.starspeed;
  }

  this.design_0 = function() {
    line(1, 3, 5, 3);
    line(3, 1, 3, 5);
  }

  this.design_1 = function() {
    line(0, 4, 8, 4);
    line(4, 0, 4, 8);
    line(2, 2, 6, 6);
    line(2, 6, 6, 2);
  }

  this.design_2 = function() {
    point(3, 3);
  }
}
