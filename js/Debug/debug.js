function debug_gameloop() {
  push();
    textSize(20);
    text('fps:' + floor(frameRate()), 0, height-30);
  pop()
}
