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

  // Vertex shader
  var vertexShaderCode = `
    attribute vec2 aPosition;
    void main() {
      float x = aPosition.x;
      float y = aPosition.y;
      gl_PointSize = 10.0;
      gl_Position = vec4(x, y, 0.0, 1.0);    
    }
    `;

  var vertexShaderObject = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShaderObject, vertexShaderCode);
  gl.compileShader(vertexShaderObject); // sampai sini sudah jadi .o

  // Fragment shader
  var fragmentShaderCode = `
    precision mediump float;
    void main() {
      float r = 1.0;
      float g = 1.0;
      float b = 1.0;
      gl_FragColor = vec4(r, g, b, 1.0);
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

  /* 
    Providing multiple shapes
    https://github.com/davidwparker/programmingtil-webgl/tree/master/0028-multiple-shapes
    https://www.youtube.com/watch?v=y2nWmdSHlkU

  */
  function drawA(type, vertices) {
    var n = initBuffers(vertices);
    if (n < 0) {
      console.log("Failed to set the positions of the vertices");
      return;
    }

    gl.drawArrays(type, 0, n);
  }

  function initBuffers(vertices) {
    var n = vertices.length / 2;

    var vertexBuffer = gl.createBuffer();
    if (!vertexBuffer) {
      console.log("Failed to create the buffer object");
      return -1;
    }

    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    if (aPosition < 0) {
      console.log("Failed to get the storage location of aPosition");
      return -1;
    }

    gl.vertexAttribPointer(aPosition, 2, gl.FLOAT, false, 0, 0);
    gl.enableVertexAttribArray(aPosition);

    return n;
  }

  // Inisialisasi vertices
  var xAxisVertices = new Float32Array([1.0, 0.0, -1.0, 0.0]);
  var yAxisVertices = new Float32Array([0.0, 0.0, 0.0, -1.0]);
  // Angka 2
  var twoVertices = new Float32Array([
    -0.25, 0.15, -0.7, 0.15, -0.7, 0.2, -0.75, 0.2, -0.75, 0.45, -0.7, 0.45, -0.7, 0.5, -0.65, 0.5, -0.65, 0.55, -0.4, 0.55, -0.4, 0.7, -0.6, 0.7, -0.6, 0.65, -0.75, 0.65, -0.75, 0.8, -0.7, 0.8, -0.7, 0.85, -0.3, 0.85, -0.3, 0.8, -0.25,
    0.8, -0.25, 0.45, -0.3, 0.45, -0.3, 0.4, -0.55, 0.4, -0.55, 0.35, -0.6, 0.35, -0.6, 0.3, -0.25, 0.3,
  ]);
  // Angka 8
  var eightVertices = new Float32Array([
    0.5, 0.15, 0.3, 0.15, 0.3, 0.2, 0.25, 0.2, 0.25, 0.45, 0.3, 0.45, 0.3, 0.55, 0.25, 0.55, 0.25, 0.8, 0.3, 0.8, 0.3, 0.85, 0.7, 0.85, 0.7, 0.8, 0.75, 0.8, 0.75, 0.55, 0.7, 0.55, 0.7, 0.45, 0.75, 0.45, 0.75, 0.2, 0.7, 0.2, 0.7, 0.15, 0.5,
    0.15, 0.5, 0.25, 0.45, 0.25, 0.45, 0.3, 0.4, 0.3, 0.4, 0.4, 0.45, 0.4, 0.45, 0.45, 0.5, 0.45, 0.5, 0.55, 0.45, 0.55, 0.45, 0.6, 0.4, 0.6, 0.4, 0.7, 0.45, 0.7, 0.45, 0.75, 0.5, 0.75, 0.5, 0.85, 0.5, 0.75, 0.55, 0.75, 0.55, 0.7, 0.6, 0.7,
    0.6, 0.6, 0.55, 0.6, 0.55, 0.55, 0.5, 0.55, 0.5, 0.45, 0.55, 0.45, 0.55, 0.4, 0.6, 0.4, 0.6, 0.3, 0.55, 0.3, 0.55, 0.25, 0.5, 0.25,
  ]);
  // Huruf E
  var eBottomVertices = new Float32Array([-0.25, -0.75, -0.25, -0.9, -0.75, -0.9, -0.75, -0.75]);
  var eTopVertices = new Float32Array([-0.25, -0.15, -0.25, -0.3, -0.75, -0.3, -0.75, -0.15]);
  var eMiddleVertices = new Float32Array([-0.25, -0.45, -0.25, -0.6, -0.75, -0.6, -0.75, -0.45]);
  var eSideVertices = new Float32Array([-0.75, -0.15, -0.6, -0.15, -0.6, -0.9, -0.75, -0.9]);
  // Huruf H
  var hLeftVertices = new Float32Array([0.25, -0.15, 0.4, -0.15, 0.4, -0.9, 0.25, -0.9]);
  var hRightVertices = new Float32Array([0.6, -0.15, 0.75, -0.15, 0.75, -0.9, 0.6, -0.9]);
  var hMiddleVertices = new Float32Array([0.25, -0.45, 0.25, -0.6, 0.75, -0.6, 0.75, -0.45]);

  gl.clearColor(0.78, 0.078, 0.102, 1.0);

  gl.clear(gl.COLOR_BUFFER_BIT);

  drawA(gl.LINES, xAxisVertices);
  drawA(gl.LINES, yAxisVertices);
  drawA(gl.LINE_LOOP, twoVertices);
  drawA(gl.LINE_STRIP, eightVertices);
  drawA(gl.TRIANGLE_FAN, eBottomVertices);
  drawA(gl.TRIANGLE_FAN, eTopVertices);
  drawA(gl.TRIANGLE_FAN, eMiddleVertices);
  drawA(gl.TRIANGLE_FAN, eSideVertices);
  drawA(gl.TRIANGLE_FAN, hLeftVertices);
  drawA(gl.TRIANGLE_FAN, hRightVertices);
  drawA(gl.TRIANGLE_FAN, hMiddleVertices);
}
