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
    this.display_big();
  }

  this.display = function() {
    push();
      stroke('#434343');
      noFill();
      image(spaceship, this.x, this.y);
    pop();
  }

  this.update = function() {

    this.fire_controls.gameloop(this.x, this.y, this.width, this.height);

    // Make the ship move.
    WASD_update();
    this.x = wasd_x;
    this.y = wasd_y;
  }

  this.display_big = function() {
    push();
    translate(ship_translate.x, ship_translate.y)
      noStroke();
      push();
        stroke(ship_cockpit_blue_6);
        this.base_body();
        this.body_detail();
      pop();
      push();
        stroke(255);
        this.base_cockpit();
        this.cockpit_details();
      pop();
      push();
        stroke(ship_cockpit_blue_6);
        this.cockpit_center();
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
}
