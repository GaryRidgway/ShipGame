
function bg_preload() {
  for( i=0; i < num_bg_stars; i++) {
    bg_stars.push(new Star(Math.floor(Math.random() * 4)));
  }
}

function bg_gameloop() {
  for (star in bg_stars) {
    bg_stars[star].gameloop();
    if(bg_stars[star].random_y > cDim[1] + 10) {
      bg_stars[star].random_y = - 10 - (Math.floor(Math.random() * 5));
      bg_stars[star].random_x = Math.floor(Math.random() * cDim[0]);
    }
  }
}


