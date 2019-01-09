# ShipGame

NOTES:
// Ship drawing with create shape. 
// Body vertices
var bv = [
	[21,0],
	[28,0],
	[32,30],
	[32,50],
	[28,45],
	[21,45],
	[17,50],
	[17,30]
];

// Body detail vertices 1
var bdv1 = [
	[bv[0][0], bv[0][1]],
	[bv[1][0], bv[1][1]],
	[bv[0][0], bv[0][1]],
	[bv[0][0], bv[0][1]]
];
function body() {
	fill('#539dff')
	noStroke();
	
	// Basic Body
	beginShape()
		vertex(bv[0][0] * size, bv[0][1] * size);
		vertex(bv[1][0] * size, bv[1][1] * size);
		vertex(bv[2][0] * size, bv[2][1] * size);
		vertex(bv[3][0] * size, bv[3][1] * size);
		vertex(bv[4][0] * size, bv[4][1] * size);
		vertex(bv[5][0] * size, bv[5][1] * size);
		vertex(bv[6][0] * size, bv[6][1] * size);
		vertex(bv[7][0] * size, bv[7][1] * size);
	endShape(CLOSE);
	
	// Body detail
	push();
	beginShape()
		fill('#66a8ff');
		vertex(21 * size, 0 * size);
		vertex(28 * size, 0 * size);
		vertex(27 * size, 19 * size);
		vertex(22 * size, 19 * size);
	endShape(CLOSE);
	pop();
}

beginShape()
		// Top two
		vertex(22 * size, 19 * size);
		vertex(27 * size, 19 * size);
		// right two
		vertex(29 * size, 26 * size);
		vertex(29 * size, 32 * size);
		// bottom two
		vertex(27 * size, 35 * size);
		vertex(22 * size, 35 * size);
		// left two
		vertex(20 * size, 32 * size);
		vertex(20 * size, 26 * size);
	endShape(CLOSE);
