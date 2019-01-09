function Ship(x, y) {
  this.width = ship_dims.x;
  this.height = ship_dims.y;
  this.x = x || width/2 - this.width/2;
  this.y = y || height - 10 - this.height;
  this.fire_controls = new Fire_controls(75);

  this.gameloop = function() {
    this.update();
    this.display();
  }

  this.update = function() {

    this.fire_controls.gameloop(this.x, this.y, this.width, this.height);

    // Make the ship move.
    WASD_update();
    this.x = wasd_x;
    this.y = wasd_y;
  }

  this.display = function() {
    push();
    translate(this.x + this.width / 2, this.y);
      noStroke();
      push();
        stroke(ship_cockpit_blue_6);
        this.base_body();
        this.body_detail();
      pop();
      push();
        stroke('#ffffff');
        this.base_cockpit();
        this.cockpit_details();
      pop();
      push();
        stroke(ship_cockpit_blue_6);
        this.cockpit_center();
      pop
      push();
        stroke('#ffffff');
        this.right_wing();
      pop();
    pop();
  }

  // Basic Body
  this.base_body = function() {
    push();
      fill(ship_cockpit_blue_5);
      beginShape();
        vertex(bv[0][0] * ship_size, bv[0][1] * ship_size);
        vertex(bv[1][0] * ship_size, bv[1][1] * ship_size);
        vertex(bv[2][0] * ship_size, bv[2][1] * ship_size);
        vertex(bv[3][0] * ship_size, bv[3][1] * ship_size);
        vertex(bv[4][0] * ship_size, bv[4][1] * ship_size);
        vertex(bv[5][0] * ship_size, bv[5][1] * ship_size);
        vertex(bv[6][0] * ship_size, bv[6][1] * ship_size);
        vertex(bv[7][0] * ship_size, bv[7][1] * ship_size);
      endShape(CLOSE);
    pop();
  }

  // Body Detail.
  this.body_detail = function() {
    push();
      // Top Quad.
      fill(ship_cockpit_blue_4);
      beginShape();
        vertex(bv[0][0] * ship_size, bv[0][1] * ship_size);
        vertex(bv[1][0] * ship_size, bv[1][1] * ship_size);
        vertex(cov[1][0] * ship_size, cov[1][1] * ship_size);
        vertex(cov[0][0] * ship_size, cov[0][1] * ship_size);
      endShape(CLOSE);

      // Right Quad & Left Quad.
      fill(ship_cockpit_blue_4);
      beginShape();
        vertex(bv[2][0] * ship_size, bv[2][1] * ship_size);
        vertex(bv[3][0] * ship_size, bv[3][1] * ship_size);
        vertex(cov[3][0] * ship_size, cov[3][1] * ship_size);
        vertex(cov[2][0] * ship_size, cov[2][1] * ship_size);
      endShape(CLOSE);
      beginShape();
        vertex(bv[6][0] * ship_size, bv[6][1] * ship_size);
        vertex(bv[7][0] * ship_size, bv[7][1] * ship_size);
        vertex(cov[7][0] * ship_size, cov[7][1] * ship_size);
        vertex(cov[6][0] * ship_size, cov[6][1] * ship_size);
      endShape(CLOSE);

      // Top-Right Quad & Top-Left Quad.
      fill(ship_cockpit_blue_3);
      beginShape();
        vertex(bv[1][0] * ship_size, bv[1][1] * ship_size);
        vertex(bv[2][0] * ship_size, bv[2][1] * ship_size);
        vertex(cov[2][0] * ship_size, cov[2][1] * ship_size);
        vertex(cov[1][0] * ship_size, cov[1][1] * ship_size);
      endShape(CLOSE);
      beginShape();
        vertex(bv[7][0] * ship_size, bv[7][1] * ship_size);
        vertex(bv[0][0] * ship_size, bv[0][1] * ship_size);
        vertex(cov[0][0] * ship_size, cov[0][1] * ship_size);
        vertex(cov[7][0] * ship_size, cov[7][1] * ship_size);
      endShape(CLOSE);

      // Bottom Quad.
      fill(ship_cockpit_blue_2);
      beginShape();
        vertex(bv[4][0] * ship_size, bv[4][1] * ship_size);
        vertex(bv[5][0] * ship_size, bv[5][1] * ship_size);
        vertex(cov[5][0] * ship_size, cov[5][1] * ship_size);
        vertex(cov[4][0] * ship_size, cov[4][1] * ship_size);
      endShape(CLOSE);
    pop();
  }

  // Basic Cockpit
  this.base_cockpit = function() {
    push();
      fill(ship_cockpit_grey_1);
      beginShape();
        vertex(cov[0][0] * ship_size, cov[0][1] * ship_size);
        vertex(cov[1][0] * ship_size, cov[1][1] * ship_size);
        vertex(cov[2][0] * ship_size, cov[2][1] * ship_size);
        vertex(cov[3][0] * ship_size, cov[3][1] * ship_size);
        vertex(cov[4][0] * ship_size, cov[4][1] * ship_size);
        vertex(cov[5][0] * ship_size, cov[5][1] * ship_size);
        vertex(cov[6][0] * ship_size, cov[6][1] * ship_size);
        vertex(cov[7][0] * ship_size, cov[7][1] * ship_size);
      endShape(CLOSE);
    pop();
  }

  // Cockpit Center
  this.cockpit_center = function() {
    push();
      fill(ship_cockpit_blue_5);
      beginShape();
        vertex(civ[0][0] * ship_size, civ[0][1] * ship_size);
        vertex(civ[1][0] * ship_size, civ[1][1] * ship_size);
        vertex(civ[2][0] * ship_size, civ[2][1] * ship_size);
        vertex(civ[3][0] * ship_size, civ[3][1] * ship_size);
        vertex(civ[4][0] * ship_size, civ[4][1] * ship_size);
        vertex(civ[5][0] * ship_size, civ[5][1] * ship_size);
        vertex(civ[6][0] * ship_size, civ[6][1] * ship_size);
        vertex(civ[7][0] * ship_size, civ[7][1] * ship_size);
      endShape(CLOSE);
    pop();
  }

  // Cockpit Details
  this.cockpit_details = function() {
    push();
      fill(ship_cockpit_grey_2);
      beginShape();
        vertex(cov[0][0] * ship_size, cov[0][1] * ship_size);
        vertex(cov[1][0] * ship_size, cov[1][1] * ship_size);
        vertex(civ[1][0] * ship_size, civ[1][1] * ship_size);
        vertex(civ[0][0] * ship_size, civ[0][1] * ship_size);
      endShape(CLOSE);
      beginShape();
        vertex(cov[4][0] * ship_size, cov[4][1] * ship_size);
        vertex(cov[5][0] * ship_size, cov[5][1] * ship_size);
        vertex(civ[5][0] * ship_size, civ[5][1] * ship_size);
        vertex(civ[4][0] * ship_size, civ[4][1] * ship_size);
      endShape(CLOSE);
    pop();
  }

  // Right Wing
  this.right_wing = function() {
    push();
      fill(ship_wing_grey_1);
      beginShape();
        vertex(wv[0][0] * ship_size, wv[0][1] * ship_size);
        vertex(wv[1][0] * ship_size, wv[1][1] * ship_size);
        vertex(wv[2][0] * ship_size, wv[2][1] * ship_size);
        vertex(wv[3][0] * ship_size, wv[3][1] * ship_size);
        vertex(wv[4][0] * ship_size, wv[4][1] * ship_size);
      endShape(CLOSE);
      beginShape();
        vertex(wv[0][0] * ship_size * -1 - 1, wv[0][1] * ship_size);
        vertex(wv[1][0] * ship_size * -1 - 1, wv[1][1] * ship_size);
        vertex(wv[2][0] * ship_size * -1 - 1, wv[2][1] * ship_size);
        vertex(wv[3][0] * ship_size * -1 - 1, wv[3][1] * ship_size);
        vertex(wv[4][0] * ship_size * -1 - 1, wv[4][1] * ship_size);
      endShape(CLOSE);
      fill(ship_wing_grey_2);
      beginShape();
        vertex(wv[0][0] * ship_size, wv[0][1] * ship_size);
        vertex(wv[3][0] * ship_size, wv[3][1] * ship_size);
        vertex(wv[4][0] * ship_size, wv[4][1] * ship_size);
      endShape(CLOSE);
      beginShape();
        vertex(wv[0][0] * ship_size * -1 - 1, wv[0][1] * ship_size);
        vertex(wv[3][0] * ship_size * -1 - 1, wv[3][1] * ship_size);
        vertex(wv[4][0] * ship_size * -1 - 1, wv[4][1] * ship_size);
      endShape(CLOSE);
      fill(ship_wing_grey_3);
      beginShape();
        vertex(wv[0][0] * ship_size, wv[0][1] * ship_size);
        vertex(wv[1][0] * ship_size, wv[1][1] * ship_size);
        vertex(wv[2][0] * ship_size, wv[2][1] * ship_size);
      endShape(CLOSE);
      beginShape();
        vertex(wv[0][0] * ship_size * -1 - 1, wv[0][1] * ship_size);
        vertex(wv[1][0] * ship_size * -1 - 1, wv[1][1] * ship_size);
        vertex(wv[2][0] * ship_size * -1 - 1, wv[2][1] * ship_size);
      endShape(CLOSE);
    pop();
  }
}
