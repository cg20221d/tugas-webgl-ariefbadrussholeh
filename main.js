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

  var vertices = new Float32Array([
    0.5,
    0.5, // A: kanan atas
    0.0,
    0.0, // B: bawah tengah
    -0.5,
    0.5, // C: kiri atas
    0.0,
    1.0,
  ]);

  gl.clearColor(0.78, 0.078, 0.102, 1.0);

  gl.clear(gl.COLOR_BUFFER_BIT);

  drawA(gl.POINTS, vertices);
}
