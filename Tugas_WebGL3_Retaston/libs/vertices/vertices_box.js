var zFront = 0.1;
var zBack = -0.1;

// prettier-ignore
var position_vertices_box = [
    -1, -1, -1,     1, -1, -1,      1, 1, -1,       -1, 1, -1,
    -1, -1, 1,      1, -1, 1,       1, 1, 1,        -1, 1, 1,
    -1, -1, -1,     -1, 1, -1,      -1, 1, 1,       -1, -1, 1,
    1, -1, -1,      1, 1, -1,       1, 1, 1,        1, -1, 1,
    -1, -1, -1,     -1, -1, 1,      1, -1, 1,       1, -1, -1,
    -1, 1, -1,      -1, 1, 1,       1, 1, 1,        1, 1, -1
];

// prettier-ignore
var normal_vertices_box = [
    0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 
    0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 
    -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, 
    1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 
    0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 
    0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 
];

// prettier-ignore
var color_vertices_box = [
    1.0, 1.0, 1.0,  1.0, 1.0, 1.0,  1.0, 1.0, 1.0,  1.0, 1.0, 1.0,
    1.0, 1.0, 1.0,  1.0, 1.0, 1.0,  1.0, 1.0, 1.0,  1.0, 1.0, 1.0,
    1.0, 1.0, 1.0,  1.0, 1.0, 1.0,  1.0, 1.0, 1.0,  1.0, 1.0, 1.0,
    1.0, 1.0, 1.0,  1.0, 1.0, 1.0,  1.0, 1.0, 1.0,  1.0, 1.0, 1.0,
    1.0, 1.0, 1.0,  1.0, 1.0, 1.0,  1.0, 1.0, 1.0,  1.0, 1.0, 1.0,
    1.0, 1.0, 1.0,  1.0, 1.0, 1.0,  1.0, 1.0, 1.0,  1.0, 1.0, 1.0,
];

// prettier-ignore
var indices_box = [
    0, 1, 2,     0, 2, 3,     // Face A
    4, 5, 6,     4, 6, 7,     // Face B
    8, 9, 10,    8, 10, 11,   // Face C
    12, 13, 14,  12, 14, 15,  // Face D
    16, 17, 18,  16, 18, 19,  // Face E
    20, 21, 22,  20, 22, 23   // Face F  
];

export { position_vertices_box, normal_vertices_box, color_vertices_box, indices_box };
