var zFront = 0.1;
var zBack = -0.1;

// prettier-ignore
var position_vertices_2 = [
    -0.25,   0.15, zFront,    -0.1,   0.15, zFront,    -0.1,   0.3, zFront,   -0.25,   0.3, zFront,      
     -0.2,    0.2, zFront,     0.2,    0.2, zFront,     0.2,  0.35, zFront,    -0.2,  0.35, zFront,      
      0.1,  -0.05, zFront,    0.25,  -0.05, zFront,    0.25,   0.3, zFront,     0.1,   0.3, zFront,      
    -0.15,   -0.1, zFront,     0.2,   -0.1, zFront,     0.2,  0.05, zFront,   -0.15,  0.05, zFront,      
     -0.2,  -0.15, zFront,   -0.05,  -0.15, zFront,   -0.05,   0.0, zFront,    -0.2,   0.0, zFront,      
    -0.25,   -0.3, zFront,    -0.1,   -0.3, zFront,    -0.1, -0.05, zFront,   -0.25, -0.05, zFront,      
     -0.2,  -0.35, zFront,    0.25,  -0.35, zFront,    0.25,  -0.2, zFront,    -0.2,  -0.2, zFront,      

    -0.25,   0.15, zBack,    -0.1,   0.15, zBack,    -0.1,   0.3, zBack,   -0.25,   0.3, zBack,      
     -0.2,    0.2, zBack,     0.2,    0.2, zBack,     0.2,  0.35, zBack,    -0.2,  0.35, zBack,      
      0.1,  -0.05, zBack,    0.25,  -0.05, zBack,    0.25,   0.3, zBack,     0.1,   0.3, zBack,      
    -0.15,   -0.1, zBack,     0.2,   -0.1, zBack,     0.2,  0.05, zBack,   -0.15,  0.05, zBack,      
     -0.2,  -0.15, zBack,   -0.05,  -0.15, zBack,   -0.05,   0.0, zBack,    -0.2,   0.0, zBack,      
    -0.25,   -0.3, zBack,    -0.1,   -0.3, zBack,    -0.1, -0.05, zBack,   -0.25, -0.05, zBack,      
     -0.2,  -0.35, zBack,    0.25,  -0.35, zBack,    0.25,  -0.2, zBack,    -0.2,  -0.2, zBack,      
     
    -0.25,   0.15, zBack,   -0.25,   0.15, zFront,  -0.25,   0.3, zFront,  -0.25,   0.3, zBack,      
    -0.25,   -0.3, zBack,   -0.25,   -0.3, zFront,  -0.25, -0.05, zFront,  -0.25, -0.05, zBack,           
     -0.2,    0.3, zBack,    -0.2,    0.3, zFront,   -0.2,  0.35, zFront,   -0.2,  0.35, zBack,           
     -0.2,  -0.05, zBack,    -0.2,  -0.05, zFront,   -0.2,   0.0, zFront,   -0.2,   0.0, zBack,           
     -0.2,   -0.3, zBack,    -0.2,   -0.3, zFront,   -0.2, -0.35, zFront,   -0.2, -0.35, zBack,           
    -0.15,    0.0, zBack,   -0.15,    0.0, zFront,  -0.15,  0.05, zFront,  -0.15,  0.05, zBack,           
     -0.1,   0.15, zBack,    -0.1,   0.15, zFront,   -0.1,   0.2, zFront,   -0.1,   0.2, zBack,           
     -0.1,  -0.15, zBack,    -0.1,  -0.15, zFront,   -0.1,  -0.2, zFront,   -0.1,  -0.2, zBack,           
    -0.05,  -0.15, zBack,   -0.05,  -0.15, zFront,  -0.05,  -0.1, zFront,  -0.05,  -0.1, zBack,           
      0.1,   0.05, zBack,     0.1,   0.05, zFront,    0.1,   0.2, zFront,    0.1,   0.2, zBack,           
      0.2,    0.3, zBack,     0.2,    0.3, zFront,    0.2,  0.35, zFront,    0.2,  0.35, zBack,           
      0.2,   -0.1, zBack,     0.2,   -0.1, zFront,    0.2, -0.05, zFront,    0.2, -0.05, zBack,           
     0.25,  -0.05, zBack,    0.25,  -0.05, zFront,   0.25,   0.3, zFront,   0.25,   0.3, zBack,           
     0.25,  -0.35, zBack,    0.25,  -0.35, zFront,   0.25,  -0.2, zFront,   0.25,  -0.2, zBack,           
     
     -0.2,   0.35, zFront,    0.2,  0.35, zFront,     0.2,  0.35, zBack,    -0.2,  0.35, zBack,           
    -0.25,    0.3, zFront,   -0.2,   0.3, zFront,    -0.2,   0.3, zBack,   -0.25,   0.3, zBack,           
     0.25,    0.3, zFront,    0.2,   0.3, zFront,     0.2,   0.3, zBack,    0.25,   0.3, zBack,           
     -0.1,    0.2, zFront,    0.1,   0.2, zFront,     0.1,   0.2, zBack,    -0.1,   0.2, zBack,           
     -0.1,   0.15, zFront,  -0.25,  0.15, zFront,   -0.25,  0.15, zBack,    -0.1,  0.15, zBack,           
    -0.15,   0.05, zFront,    0.1,  0.05, zFront,     0.1,  0.05, zBack,   -0.15,  0.05, zBack,           
    -0.15,    0.0, zFront,   -0.2,   0.0, zFront,    -0.2,   0.0, zBack,   -0.15,   0.0, zBack,           
    -0.25,  -0.05, zFront,   -0.2, -0.05, zFront,    -0.2, -0.05, zBack,   -0.25, -0.05, zBack,           
     0.25,  -0.05, zFront,    0.2, -0.05, zFront,     0.2, -0.05, zBack,    0.25, -0.05, zBack,           
    -0.05,   -0.1, zFront,    0.2,  -0.1, zFront,     0.2,  -0.1, zBack,   -0.05,  -0.1, zBack,           
    -0.05,  -0.15, zFront,   -0.1, -0.15, zFront,    -0.1, -0.15, zBack,   -0.05, -0.15, zBack,           
     -0.1,   -0.2, zFront,   0.25,  -0.2, zFront,    0.25,  -0.2, zBack,    -0.1,  -0.2, zBack,           
     -0.2,   -0.3, zFront,  -0.25,  -0.3, zFront,   -0.25,  -0.3, zBack,    -0.2,  -0.3, zBack,           
     -0.2,  -0.35, zFront,   0.25, -0.35, zFront,    0.25, -0.35, zBack,    -0.2, -0.35, zBack,           

];

// prettier-ignore
var normal_vertices_2 = [
    0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,
    0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,
    0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,
    0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,
    0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,
    0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,
    0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,

    0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 
    0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 
    0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 
    0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 
    0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 
    0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 
    0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 

    -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, 
    -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, 
    -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, 
    -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, 
    -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, 
    -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, 
    1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 
    1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 
    1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 
    -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, 
    1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 
    1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 
    1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 
    1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 

    0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 
    0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 
    0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 
    0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 
    0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 
    0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 
    0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 
    0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 
    0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 
    0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 
    0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 
    0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 
    0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 
    0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 
];

// prettier-ignore
var color_vertices_2 = [
    1.0, 0.65, 0.0, 1.0, 0.65, 0.0, 1.0, 0.65, 0.0, 1.0, 0.65, 0.0, 
    1.0, 0.65, 0.0, 1.0, 0.65, 0.0, 1.0, 0.65, 0.0, 1.0, 0.65, 0.0,
    1.0, 0.65, 0.0, 1.0, 0.65, 0.0, 1.0, 0.65, 0.0, 1.0, 0.65, 0.0,
    1.0, 0.65, 0.0, 1.0, 0.65, 0.0, 1.0, 0.65, 0.0, 1.0, 0.65, 0.0,
    1.0, 0.65, 0.0, 1.0, 0.65, 0.0, 1.0, 0.65, 0.0, 1.0, 0.65, 0.0,
    1.0, 0.65, 0.0, 1.0, 0.65, 0.0, 1.0, 0.65, 0.0, 1.0, 0.65, 0.0,
    1.0, 0.65, 0.0, 1.0, 0.65, 0.0, 1.0, 0.65, 0.0, 1.0, 0.65, 0.0,

    1.0, 0.65, 0.0, 1.0, 0.65, 0.0, 1.0, 0.65, 0.0, 1.0, 0.65, 0.0,
    1.0, 0.65, 0.0, 1.0, 0.65, 0.0, 1.0, 0.65, 0.0, 1.0, 0.65, 0.0,
    1.0, 0.65, 0.0, 1.0, 0.65, 0.0, 1.0, 0.65, 0.0, 1.0, 0.65, 0.0,
    1.0, 0.65, 0.0, 1.0, 0.65, 0.0, 1.0, 0.65, 0.0, 1.0, 0.65, 0.0,
    1.0, 0.65, 0.0, 1.0, 0.65, 0.0, 1.0, 0.65, 0.0, 1.0, 0.65, 0.0,
    1.0, 0.65, 0.0, 1.0, 0.65, 0.0, 1.0, 0.65, 0.0, 1.0, 0.65, 0.0,
    1.0, 0.65, 0.0, 1.0, 0.65, 0.0, 1.0, 0.65, 0.0, 1.0, 0.65, 0.0,

    0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102,
    0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102,
    0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102,
    0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102,
    0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102,
    0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102,
    0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102,
    0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102,
    0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102,
    0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102,
    0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102,
    0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102,
    0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102,
    0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102,

    0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102,
    0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102,
    0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102,
    0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102,
    0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102,
    0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102,
    0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102,
    0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102,
    0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102,
    0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102,
    0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102,
    0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102,
    0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102,
    0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102, 0.706, 0.051, 0.102,
];

// prettier-ignore
var indices_2 = [
    0,1,2,      0,2,3,
    4,5,6,      4,6,7,
    8,9,10,     8,10,11,
    12,13,14,   12,14,15,
    16,17,18,   16,18,19,
    20,21,22,   20,22,23,
    24,25,26,   24,26,27,
    
    28,29,30,   28,30,31,
    32,33,34,   32,34,35,
    36,37,38,   36,38,39,
    40,41,42,   40,42,43,
    44,45,46,   44,46,47,
    48,49,50,   48,50,51,
    52,53,54,   52,54,55,
    
    56,57,58,   56,58,59,
    60,61,62,   60,62,63,
    64,65,66,   64,66,67,
    68,69,70,   68,70,71,
    72,73,74,   72,74,75,
    76,77,78,   76,78,79,
    80,81,82,   80,82,83,
    84,85,86,   84,86,87,
    88,89,90,   88,90,91,
    92,93,94,   92,94,95,
    96,97,98,   96,98,99,
    100,101,102,100,102,103,
    104,105,106,104,106,107,
    108,109,110,108,110,111,
    
    112,113,114,112,114,115,
    116,117,118,116,118,119,
    120,121,122,120,122,123,
    124,125,126,124,126,127,
    128,129,130,128,130,131,
    132,133,134,132,134,135,
    136,137,138,136,138,139,
    140,141,142,140,142,143,
    144,145,146,144,146,147,
    148,149,150,148,150,151,
    152,153,154,152,154,155,
    156,157,158,156,158,159,
    160,161,162,160,162,163,
    164,165,166,164,166,167
];

export { position_vertices_2, normal_vertices_2, color_vertices_2, indices_2 };
