/* 
    Color
    Red     : 0.780, 0.078, 0.102
    Darkred : 0.706, 0.051, 0.102
    Grey    : 0.949, 0.925, 0.914
    White   : 1.0, 1.0, 1.0
*/

function main() {
  var kanvas = document.getElementById("kanvas");
  var gl = kanvas.getContext("webgl");

  var zFront = 0.1;
  var zBack = -0.1;

  // prettier-ignore
  var vertices = [
    // Face A - index 0-3
    -0.1, 0.4, zFront,     0.949, 0.925, 0.914,
    0.25, 0.4, zFront,    0.949, 0.925, 0.914,
    0.25, 0.25, zFront,     0.949, 0.925, 0.914,
    -0.1, 0.25, zFront,      0.949, 0.925, 0.914,
    // Face B - index 4-7
    -0.1, -0.1, zFront,      0.949, 0.925, 0.914,
    0.25, -0.1, zFront,     0.949, 0.925, 0.914,
    0.25, 0.1, zFront,    0.949, 0.925, 0.914,
    -0.1, 0.1, zFront,     0.949, 0.925, 0.914,
    // Face C - index 8-11
    -0.1, -0.4, zFront,      0.949, 0.925, 0.914,
    0.25, -0.4, zFront,     0.949, 0.925, 0.914,
    0.25, -0.25, zFront,    0.949, 0.925, 0.914,
    -0.1, -0.25, zFront,     0.949, 0.925, 0.914,
    // Face D - index 12-15
    -0.25, 0.4, zFront,    0.949, 0.925, 0.914,
    -0.1, 0.4, zFront,     0.949, 0.925, 0.914,
    -0.1, -0.4, zFront,      0.949, 0.925, 0.914,
    -0.25, -0.4, zFront,     0.949, 0.925, 0.914,
    // Face E - index 16-19
    -0.1, 0.4, zBack,     0.949, 0.925, 0.914,
    0.25, 0.4, zBack,    0.949, 0.925, 0.914,
    0.25, 0.25, zBack,     0.949, 0.925, 0.914,
    -0.1, 0.25, zBack,      0.949, 0.925, 0.914,
    // Face F - index 20-23
    -0.1, -0.1, zBack,      0.949, 0.925, 0.914,
    0.25, -0.1, zBack,     0.949, 0.925, 0.914,
    0.25, 0.1, zBack,    0.949, 0.925, 0.914,
    -0.1, 0.1, zBack,     0.949, 0.925, 0.914,
    // Face G - index 24-27
    -0.1, -0.4, zBack,      0.949, 0.925, 0.914,
    0.25, -0.4, zBack,     0.949, 0.925, 0.914,
    0.25, -0.25, zBack,    0.949, 0.925, 0.914,
    -0.1, -0.25, zBack,     0.949, 0.925, 0.914,
    // Face H - index 28-31
    -0.25, 0.4, zBack,    0.949, 0.925, 0.914,
    -0.1, 0.4, zBack,     0.949, 0.925, 0.914,
    -0.1, -0.4, zBack,      0.949, 0.925, 0.914,
    -0.25, -0.4, zBack,     0.949, 0.925, 0.914,
    // Face I - index 32-35
    -0.25, 0.4, zFront,   0.706, 0.051, 0.102,
    0.25, 0.4, zFront,   0.706, 0.051, 0.102,
    0.25, 0.4, zBack,    0.706, 0.051, 0.102,
    -0.25, 0.4, zBack,    0.706, 0.051, 0.102,
    // Face J - index 36-39
    -0.25, -0.4, zBack,     0.706, 0.051, 0.102,
    -0.25, -0.4, zFront,    0.706, 0.051, 0.102,
    -0.25, 0.4, zFront,   0.706, 0.051, 0.102,
    -0.25, 0.4, zBack,    0.706, 0.051, 0.102,
    // Face K - index 40-43
    -0.25, -0.4, zFront,   0.706, 0.051, 0.102,
    0.25, -0.4, zFront,   0.706, 0.051, 0.102,
    0.25, -0.4, zBack,    0.706, 0.051, 0.102,
    -0.25, -0.4, zBack,    0.706, 0.051, 0.102,
    // Face L - index 44-47
    0.25, -0.4, zFront,    0.706, 0.051, 0.102,
    0.25, -0.4, zBack,     0.706, 0.051, 0.102,
    0.25, -0.25, zBack,    0.706, 0.051, 0.102,
    0.25, -0.25, zFront,   0.706, 0.051, 0.102,
    // Face M - index 48-51
    0.25, -0.1, zFront,    0.706, 0.051, 0.102,
    0.25, -0.1, zBack,     0.706, 0.051, 0.102,
    0.25, 0.1, zBack,    0.706, 0.051, 0.102,
    0.25, 0.1, zFront,   0.706, 0.051, 0.102,
    // Face N - index 52-55
    0.25, 0.25, zFront,    0.706, 0.051, 0.102,
    0.25, 0.25, zBack,     0.706, 0.051, 0.102,
    0.25, 0.4, zBack,    0.706, 0.051, 0.102,
    0.25, 0.4, zFront,   0.706, 0.051, 0.102,
    // Face M - index 56-59
    -0.1, -0.25, zFront,   0.706, 0.051, 0.102,
    -0.1, -0.25, zBack,    0.706, 0.051, 0.102,
    -0.1, -0.1, zBack,     0.706, 0.051, 0.102,
    -0.1, -0.1, zFront,    0.706, 0.051, 0.102,
    // Face N - index 60-63
    -0.1, 0.1, zFront,   0.706, 0.051, 0.102,
    -0.1, 0.1, zBack,   0.706, 0.051, 0.102,
    -0.1, 0.25, zBack,    0.706, 0.051, 0.102,
    -0.1, 0.25, zFront,    0.706, 0.051, 0.102,
    // Face O - index 64-67
    -0.1, -0.25, zFront,   0.706, 0.051, 0.102,
    0.25, -0.25, zFront,   0.706, 0.051, 0.102,
    0.25, -0.25, zBack,    0.706, 0.051, 0.102,
    -0.1, -0.25, zBack,    0.706, 0.051, 0.102,
    // Face P - index 68-71
    -0.1, -0.1, zFront,   0.706, 0.051, 0.102,
    0.25, -0.1, zFront,   0.706, 0.051, 0.102,
    0.25, -0.1, zBack,    0.706, 0.051, 0.102,
    -0.1, -0.1, zBack,    0.706, 0.051, 0.102,
    // Face Q - index 72-75
    -0.1, 0.1, zFront,   0.706, 0.051, 0.102,
    0.25, 0.1, zFront,   0.706, 0.051, 0.102,
    0.25, 0.1, zBack,    0.706, 0.051, 0.102,
    -0.1, 0.1, zBack,    0.706, 0.051, 0.102,
    // Face R - index 76-79
    -0.1, 0.25, zFront,   0.706, 0.051, 0.102,
    0.25, 0.25, zFront,   0.706, 0.051, 0.102,
    0.25, 0.25, zBack,    0.706, 0.051, 0.102,
    -0.1, 0.25, zBack,    0.706, 0.051, 0.102,
  ];

  // prettier-ignore
  var indices = [
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
    76,77,78,   76,78,79
  ];

  var buffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

  var indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(indices), gl.STATIC_DRAW);

  // Vertex shader
  var vertexShaderCode = `
  attribute vec3 aPosition;   // Sebelumnya vec2, makanya tidak tergambar kubus :D
  attribute vec3 aColor;
  uniform mat4 uModel;
  uniform mat4 uView;
  uniform mat4 uProjection;
  varying vec3 vColor;
  void main() {
      gl_Position = uProjection * uView * uModel * vec4(aPosition, 1.0);
      vColor = aColor;
  }
  `;
  var vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShaderObject, vertexShaderCode);
  gl.compileShader(vertexShaderObject); // sampai sini sudah jadi .o

  // Fragment shader
  var fragmentShaderCode = `
  precision mediump float;
  varying vec3 vColor;
  void main() {
      gl_FragColor = vec4(vColor, 1.0);
  }
  `;
  var fragmentShaderObject = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShaderObject, fragmentShaderCode);
  gl.compileShader(fragmentShaderObject); // sampai sini sudah jadi .o

  var shaderProgram = gl.createProgram(); // wadah dari executable (.exe)
  gl.attachShader(shaderProgram, vertexShaderObject);
  gl.attachShader(shaderProgram, fragmentShaderObject);
  gl.linkProgram(shaderProgram);
  gl.useProgram(shaderProgram);

  // Variabel lokal
  var theta = 0.0;
  var freeze = false;
  var horizontalSpeed = 0.0;
  var verticalSpeed = 0.0;
  var horizontalDelta = 0.0;
  var verticalDelta = 0.0;

  // Variabel pointer ke GLSL
  var uModel = gl.getUniformLocation(shaderProgram, "uModel");
  // View
  var cameraX = 0.0;
  var cameraZ = 7.5;
  var uView = gl.getUniformLocation(shaderProgram, "uView");
  var view = glMatrix.mat4.create();
  glMatrix.mat4.lookAt(
    view,
    [cameraX, 0.0, cameraZ], // the location of the eye or the camera
    [cameraX, 0.0, 0.0], // the point where the camera look at
    [0.0, 1.0, 0.0]
  );
  // Projection
  var uProjection = gl.getUniformLocation(shaderProgram, "uProjection");
  var perspective = glMatrix.mat4.create();
  glMatrix.mat4.perspective(perspective, (5 * Math.PI) / 12, 1.0, 0.5, 50.0);

  // Kita mengajari GPU bagaimana caranya mengoleksi
  //  nilai posisi dari ARRAY_BUFFER
  //  untuk setiap verteks yang sedang diproses
  var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
  gl.vertexAttribPointer(aPosition, 3, gl.FLOAT, false, 6 * Float32Array.BYTES_PER_ELEMENT, 0);
  gl.enableVertexAttribArray(aPosition);
  var aColor = gl.getAttribLocation(shaderProgram, "aColor");
  gl.vertexAttribPointer(aColor, 3, gl.FLOAT, false, 6 * Float32Array.BYTES_PER_ELEMENT, 3 * Float32Array.BYTES_PER_ELEMENT);
  gl.enableVertexAttribArray(aColor);

  // Grafika interaktif
  // Tetikus
  function onMouseClick(event) {
    freeze = !freeze;
  }
  document.addEventListener("click", onMouseClick);
  // Papan ketuk
  function onKeydown(event) {
    if (event.keyCode == 32) freeze = !freeze; // spasi
    // Gerakan horizontal: a ke kiri, d ke kanan
    if (event.keyCode == 37) {
      // arrow-kiri
      theta += -0.05;
    } else if (event.keyCode == 39) {
      // arrow-kanan
      theta += 0.05;
    }
    // Gerakan vertikal: w ke atas, s ke bawah
    if (event.keyCode == 87) {
      // w
      verticalSpeed = -0.01;
    } else if (event.keyCode == 83) {
      // s
      verticalSpeed = 0.01;
    }
  }
  function onKeyup(event) {
    if (event.keyCode == 32) freeze = !freeze;
    if (event.keyCode == 65 || event.keyCode == 68) horizontalSpeed = 0.0;
    if (event.keyCode == 87 || event.keyCode == 83) verticalSpeed = 0.0;
  }
  document.addEventListener("keydown", onKeydown);
  document.addEventListener("keyup", onKeyup);

  function render() {
    gl.enable(gl.DEPTH_TEST);
    gl.clearColor(1.0, 0.65, 0.0, 1.0); // Oranye
    //            Merah     Hijau   Biru    Transparansi
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    if (!freeze) {
      // theta += 0.01;
    }
    horizontalDelta += horizontalSpeed;
    verticalDelta -= verticalSpeed;
    var model = glMatrix.mat4.create(); // Membuat matriks identitas
    glMatrix.mat4.translate(model, model, [-0.5, -0.5, 0.0]);
    glMatrix.mat4.rotateY(model, model, theta);
    gl.uniformMatrix4fv(uModel, false, model);
    gl.uniformMatrix4fv(uView, false, view);
    gl.uniformMatrix4fv(uProjection, false, perspective);
    gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);
    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
}
