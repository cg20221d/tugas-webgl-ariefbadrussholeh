import { position_vertices_e, color_vertices_e, indices_e } from "./libs/vertices/vertices_e.js";
import { position_vertices_h, color_vertices_h, indices_h } from "./libs/vertices/vertices_h.js";
import { position_vertices_2, color_vertices_2, indices_2 } from "./libs/vertices/vertices_2.js";
import { position_vertices_8, color_vertices_8, indices_8 } from "./libs/vertices/vertices_8.js";

(function (global) {
  /*
   * Constants and Main
   */
  var state = {
    gl: null,
    program: "render",
    ui: {
      pressedKeys: {},
    },
    animation: {},
    app: {
      doAnimate: true,
      eye: {
        x: 0.0,
        y: 0.0,
        z: 7.5,
      },
      objects: [],
    },
  };

  // Create a cube
  function LetterE() {
    this.attributes = {
      aColor: {
        size: 3,
        offset: 0,
        bufferData: new Float32Array(color_vertices_e),
      },
      aPosition: {
        size: 3,
        offset: 0,
        bufferData: new Float32Array(position_vertices_e),
      },
    };
    this.indices = new Uint8Array(indices_e);
    this.state = {
      mm: mat4.create(),
      nm: null,
    };
    this.stride = 0;

    this.draw = function () {
      var uMVPMatrix = state.gl.getUniformLocation(state.programs[state.program], "uMVPMatrix");
      var uModelMatrix = state.gl.getUniformLocation(state.programs[state.program], "uModelMatrix");
      var mvp = state.mvp;

      state.programs[state.program].renderBuffers(this);

      var n = this.indices.length;
      var mm = mat4.create();

      var scale = 3.0;
      mat4.scale(mm, mm, [scale, scale, scale]);
      mat4.translate(mm, mm, [-1.0, -1.0, 0.0]);
      mat4.rotateY(mm, mm, yTheta);
      state.gl.uniformMatrix4fv(uModelMatrix, false, mm);

      mat4.copy(mvp, state.pm);
      mat4.multiply(mvp, mvp, state.vm);
      mat4.multiply(mvp, mvp, mm);
      state.gl.uniformMatrix4fv(uMVPMatrix, false, mvp);

      state.gl.drawElements(state.gl.TRIANGLES, n, state.gl.UNSIGNED_BYTE, 0);
    };
  }

  function LetterH() {
    this.attributes = {
      aColor: {
        size: 3,
        offset: 0,
        bufferData: new Float32Array(color_vertices_h),
      },
      aPosition: {
        size: 3,
        offset: 0,
        bufferData: new Float32Array(position_vertices_h),
      },
    };
    this.indices = new Uint8Array(indices_h);
    this.state = {
      mm: mat4.create(),
      nm: null,
    };
    this.stride = 0;

    this.draw = function () {
      var uMVPMatrix = state.gl.getUniformLocation(state.programs[state.program], "uMVPMatrix");
      var uModelMatrix = state.gl.getUniformLocation(state.programs[state.program], "uModelMatrix");
      var mvp = state.mvp;

      state.programs[state.program].renderBuffers(this);

      var n = this.indices.length;
      var mm = mat4.create();

      var scale = 3.0;
      mat4.scale(mm, mm, [scale, scale, scale]);
      mat4.translate(mm, mm, [1.0, -1.0, 0.0]);
      mat4.rotateX(mm, mm, xTheta);
      state.gl.uniformMatrix4fv(uModelMatrix, false, mm);

      mat4.copy(mvp, state.pm);
      mat4.multiply(mvp, mvp, state.vm);
      mat4.multiply(mvp, mvp, mm);
      state.gl.uniformMatrix4fv(uMVPMatrix, false, mvp);

      state.gl.drawElements(state.gl.TRIANGLES, n, state.gl.UNSIGNED_BYTE, 0);
    };
  }

  function Number2() {
    this.attributes = {
      aColor: {
        size: 3,
        offset: 0,
        bufferData: new Float32Array(color_vertices_2),
      },
      aPosition: {
        size: 3,
        offset: 0,
        bufferData: new Float32Array(position_vertices_2),
      },
    };
    this.indices = new Uint8Array(indices_2);
    this.state = {
      mm: mat4.create(),
      nm: null,
    };
    this.stride = 0;

    this.draw = function () {
      var uMVPMatrix = state.gl.getUniformLocation(state.programs[state.program], "uMVPMatrix");
      var uModelMatrix = state.gl.getUniformLocation(state.programs[state.program], "uModelMatrix");
      var mvp = state.mvp;

      state.programs[state.program].renderBuffers(this);

      var n = this.indices.length;
      var mm = mat4.create();

      var scale = 3.0;
      mat4.scale(mm, mm, [scale, scale, scale]);
      if (!freeze) {
        if (horizontalDelta >= 1.6) horizontalSpeed *= -1;
        if (horizontalDelta <= -1.6) horizontalSpeed *= -1;

        horizontalDelta += horizontalSpeed;
      }
      mat4.translate(mm, mm, [horizontalDelta, 1.0, 0.0]);
      mat4.rotateY(mm, mm, y2Theta);
      mat4.rotateX(mm, mm, x2Theta);
      state.gl.uniformMatrix4fv(uModelMatrix, false, mm);

      mat4.copy(mvp, state.pm);
      mat4.multiply(mvp, mvp, state.vm);
      mat4.multiply(mvp, mvp, mm);
      state.gl.uniformMatrix4fv(uMVPMatrix, false, mvp);

      state.gl.drawElements(state.gl.TRIANGLES, n, state.gl.UNSIGNED_BYTE, 0);
    };
  }

  function Number8() {
    this.attributes = {
      aColor: {
        size: 3,
        offset: 0,
        bufferData: new Float32Array(color_vertices_8),
      },
      aPosition: {
        size: 3,
        offset: 0,
        bufferData: new Float32Array(position_vertices_8),
      },
    };
    this.indices = new Uint8Array(indices_8);
    this.state = {
      mm: mat4.create(),
      nm: null,
    };
    this.stride = 0;

    this.draw = function () {
      var uMVPMatrix = state.gl.getUniformLocation(state.programs[state.program], "uMVPMatrix");
      var uModelMatrix = state.gl.getUniformLocation(state.programs[state.program], "uModelMatrix");
      var mvp = state.mvp;

      state.programs[state.program].renderBuffers(this);

      var n = this.indices.length;
      var mm = mat4.create();

      if (!freeze) {
        if (scaleDelta >= 2.0) scaleSpeed *= -1;
        if (scaleDelta < 0.0) scaleSpeed *= -1;
        console.log(scaleDelta);
        scaleDelta += scaleSpeed;
      }
      mat4.scale(mm, mm, [scaleDelta, scaleDelta, scaleDelta]);
      mat4.rotateY(mm, mm, y2Theta);
      mat4.rotateX(mm, mm, x2Theta);
      state.gl.uniformMatrix4fv(uModelMatrix, false, mm);

      mat4.copy(mvp, state.pm);
      mat4.multiply(mvp, mvp, state.vm);
      mat4.multiply(mvp, mvp, mm);
      state.gl.uniformMatrix4fv(uMVPMatrix, false, mvp);

      state.gl.drawElements(state.gl.TRIANGLES, n, state.gl.UNSIGNED_BYTE, 0);
    };
  }

  glUtils.SL.init({
    callback: function () {
      main();
    },
  });

  function main() {
    state.canvas = document.getElementById("glcanvas");
    state.gl = glUtils.checkWebGL(state.canvas, { preserveDrawingBuffer: true });
    initCallbacks();
    initShaders();
    initGL();
    initState();
    draw();
    if (state.app.doAnimate) {
      animate();
    }
  }

  /*
   * Initialization
   */
  function initCallbacks() {
    document.onkeydown = keydown;
    document.onkeyup = keyup;
  }

  function initShaders() {
    var vertexShader = glUtils.getShader(state.gl, state.gl.VERTEX_SHADER, glUtils.SL.Shaders.v1.vertex),
      fragmentShader = glUtils.getShader(state.gl, state.gl.FRAGMENT_SHADER, glUtils.SL.Shaders.v1.fragment);
    state.programs = {
      render: glUtils.createProgram(state.gl, vertexShader, fragmentShader),
    };
  }

  function initGL() {
    state.gl.clearColor(0.0, 0.0, 0.0, 1);
    state.gl.enable(state.gl.DEPTH_TEST);
    state.gl.useProgram(state.programs[state.program]);
  }

  function initState() {
    state.vm = mat4.create();
    state.pm = mat4.create();
    state.mvp = mat4.create();
    state.app.objects = [new LetterE(), new LetterH(), new Number2(), new Number8()];
  }

  /*
   * Rendering / Drawing / Animation
   */
  function animate() {
    state.animation.tick = function () {
      updateState();
      draw();
      requestAnimationFrame(state.animation.tick);
    };
    state.animation.tick();
  }

  // Variabel Lokal
  var yTheta = 0.0;
  var xTheta = 0.0;
  var y2Theta = 0.0;
  var x2Theta = 0.0;
  var horizontalSpeed = 0.0228;
  var horizontalDelta = 0.0;
  var freeze = false;
  var scaleSpeed = 0.0228;
  var scaleDelta = 0.0;

  function updateState() {
    if (state.ui.pressedKeys[37]) {
      // left
      yTheta -= 0.05;
    } else if (state.ui.pressedKeys[39]) {
      // right
      yTheta += 0.05;
    }
    if (state.ui.pressedKeys[40]) {
      // down
      xTheta += 0.05;
    } else if (state.ui.pressedKeys[38]) {
      // up
      xTheta -= 0.05;
    }
    if (state.ui.pressedKeys[65]) {
      // a
      y2Theta -= 0.05;
    } else if (state.ui.pressedKeys[68]) {
      // d
      y2Theta += 0.05;
    }
    if (state.ui.pressedKeys[87]) {
      // w
      x2Theta += 0.05;
    } else if (state.ui.pressedKeys[83]) {
      // s
      x2Theta -= 0.05;
    }
    if (state.ui.pressedKeys[32]) {
      // space
      freeze = !freeze;
    }
  }

  function draw(args) {
    state.gl.clear(state.gl.COLOR_BUFFER_BIT | state.gl.DEPTH_BUFFER_BIT);
    mat4.perspective(state.pm, (5 * Math.PI) / 12, 1.0, 0.5, 50.0);
    mat4.lookAt(state.vm, vec3.fromValues(state.app.eye.x, state.app.eye.y, state.app.eye.z), vec3.fromValues(0, 0, 0), vec3.fromValues(0, 1, 0));

    // Loop through each object and draw!
    state.app.objects.forEach(function (obj) {
      obj.draw();
    });
  }

  /*
   * UI Events
   */
  function keydown(event) {
    state.ui.pressedKeys[event.keyCode] = true;
  }

  function keyup(event) {
    state.ui.pressedKeys[event.keyCode] = false;
  }
})(window || this);
