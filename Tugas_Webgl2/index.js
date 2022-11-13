import { position_vertices_e, color_vertices_e, indices_e } from "./libs/vertices_e.js";

(function (global) {
  /*
   * Constants and Main
   * www.programmingtil.com
   * www.codenameparkerllc.com
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
      mat4.rotateY(mm, mm, theta);
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
    state.app.objects = [new LetterE()];
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

  var theta = 0.0;
  function updateState() {
    if (state.ui.pressedKeys[37]) {
      // left
      theta -= 0.05;
    } else if (state.ui.pressedKeys[39]) {
      // right
      theta += 0.05;
    } else if (state.ui.pressedKeys[40]) {
      // down
      // state.app.eye.y += speed;
    } else if (state.ui.pressedKeys[38]) {
      // up
      // state.app.eye.y -= speed;
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
