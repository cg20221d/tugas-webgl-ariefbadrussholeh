var zFront = 0.1;
var zBack = -0.1;

// prettier-ignore
var position_vertices_h = [
    // Face A - index 0-3
    -0.25, -0.4, zFront,     
    -0.1,  -0.4, zFront,    
    -0.1,   0.4, zFront,     
    -0.25,  0.4, zFront,      
    // Face B - index 4-7
    -0.1, -0.1, zFront,      
    0.1,  -0.1, zFront,     
    0.1,   0.1, zFront,    
    -0.1,  0.1, zFront,
    // Face C - index 8-11
    0.1,  -0.4, zFront,    
    0.25, -0.4, zFront,     
    0.25,  0.4, zFront,
    0.1,   0.4, zFront,     
    // Face D - index 12-15
    -0.25, -0.4, zBack,     
    -0.1,  -0.4, zBack,    
    -0.1,   0.4, zBack,     
    -0.25,  0.4, zBack,      
    // Face E - index 16-19
    -0.1, -0.1, zBack,      
    0.1,  -0.1, zBack,     
    0.1,   0.1, zBack,    
    -0.1,  0.1, zBack,
    // Face F - index 20-23
    0.1,  -0.4, zBack,    
    0.25, -0.4, zBack,     
    0.25,  0.4, zBack,
    0.1,   0.4, zBack,     
    // Face G - index 24-27
    -0.25, -0.4, zBack,    
    -0.25, -0.4, zFront,     
    -0.25,  0.4, zFront,
    -0.25,  0.4, zBack,     
    // Face H - index 28-31
    -0.1, -0.4, zBack,    
    -0.1, -0.4, zFront,     
    -0.1,  0.4, zFront,
    -0.1,  0.4, zBack,     
    // Face I - index 32-35
    0.1, -0.4, zBack,    
    0.1, -0.4, zFront,     
    0.1,  0.4, zFront,
    0.1,  0.4, zBack,     
    // Face J - index 36-39
    0.25, -0.4, zBack,    
    0.25, -0.4, zFront,     
    0.25,  0.4, zFront,
    0.25,  0.4, zBack,     
    // Face K - index 40-43
    -0.1, 0.1, zFront,    
    0.1,  0.1, zFront,     
    0.1,  0.1, zBack,     
    -0.1, 0.1, zBack,    
    // Face L - index 44-47
    -0.1, -0.1, zFront,    
    0.1,  -0.1, zFront,     
    0.1,  -0.1, zBack,     
    -0.1, -0.1, zBack,    
    // Face M - index 48-51
    -0.25, 0.4, zFront,    
    -0.1,  0.4, zFront,        
    -0.1,  0.4, zBack,        
    -0.25, 0.4, zBack,    
    // Face N - index 52-55
    0.1,  0.4, zFront,    
    0.25, 0.4, zFront,        
    0.25, 0.4, zBack,        
    0.1,  0.4, zBack,    
    // Face O - index 56-59
    -0.25, -0.4, zFront,    
    -0.1,  -0.4, zFront,        
    -0.1,  -0.4, zBack,        
    -0.25, -0.4, zBack,    
    // Face P - index 60-63
    0.1,  -0.4, zFront,    
    0.25, -0.4, zFront,        
    0.25, -0.4, zBack,        
    0.1,  -0.4, zBack,    
];

// prettier-ignore
var normal_vertices_h = [
    0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,
    0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,
    0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0,
    0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0,
    0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0,
    0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0,

    -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, 
    1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 
    1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 
    -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, 

    0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 
    0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 
    0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 
    0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 
    0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 
    0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 0.0, -1.0, 0.0, 
];

// prettier-ignore
var color_vertices_h = [
     // Face A - index 0-3
     1.0, 0.65, 0.0, 
     1.0, 0.65, 0.0,
     1.0, 0.65, 0.0,
     1.0, 0.65, 0.0,
     // Face B - index 4-7
     1.0, 0.65, 0.0,
     1.0, 0.65, 0.0,
     1.0, 0.65, 0.0,
     1.0, 0.65, 0.0,
     // Face C - index 8-11
     1.0, 0.65, 0.0,
     1.0, 0.65, 0.0,
     1.0, 0.65, 0.0,
     1.0, 0.65, 0.0,
     // Face D - index 12-15
     1.0, 0.65, 0.0,
     1.0, 0.65, 0.0,
     1.0, 0.65, 0.0,
     1.0, 0.65, 0.0,
     // Face E - index 16-19
     1.0, 0.65, 0.0,
     1.0, 0.65, 0.0,
     1.0, 0.65, 0.0,
     1.0, 0.65, 0.0,
     // Face F - index 20-23
     1.0, 0.65, 0.0,
     1.0, 0.65, 0.0,
     1.0, 0.65, 0.0,
     1.0, 0.65, 0.0,
     // Face G - index 24-27
     0.706, 0.051, 0.102,
     0.706, 0.051, 0.102,
     0.706, 0.051, 0.102,
     0.706, 0.051, 0.102,
     // Face H - index 28-31
     0.706, 0.051, 0.102,
     0.706, 0.051, 0.102,
     0.706, 0.051, 0.102,
     0.706, 0.051, 0.102,
     // Face I - index 32-35
     0.706, 0.051, 0.102,
     0.706, 0.051, 0.102,
     0.706, 0.051, 0.102,
     0.706, 0.051, 0.102,
     // Face J - index 36-39
     0.706, 0.051, 0.102,
     0.706, 0.051, 0.102,
     0.706, 0.051, 0.102,
     0.706, 0.051, 0.102,
     // Face K - index 40-43
     0.706, 0.051, 0.102,
     0.706, 0.051, 0.102,
     0.706, 0.051, 0.102,
     0.706, 0.051, 0.102,
     // Face L - index 44-47
     0.706, 0.051, 0.102,
     0.706, 0.051, 0.102,
     0.706, 0.051, 0.102,
     0.706, 0.051, 0.102,
     // Face M - index 48-51
     0.706, 0.051, 0.102,
     0.706, 0.051, 0.102,
     0.706, 0.051, 0.102,
     0.706, 0.051, 0.102,
     // Face N - index 52-55
     0.706, 0.051, 0.102,
     0.706, 0.051, 0.102,
     0.706, 0.051, 0.102,
     0.706, 0.051, 0.102,
     // Face O - index 56-59
     0.706, 0.051, 0.102,
     0.706, 0.051, 0.102,
     0.706, 0.051, 0.102,
     0.706, 0.051, 0.102,
     // Face P - index 60-63
     0.706, 0.051, 0.102,
     0.706, 0.051, 0.102,
     0.706, 0.051, 0.102,
     0.706, 0.051, 0.102,
];

// prettier-ignore
var indices_h = [
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
    60,61,62,   60,62,63
];

export { position_vertices_h, normal_vertices_h, color_vertices_h, indices_h };
