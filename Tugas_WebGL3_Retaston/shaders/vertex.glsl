attribute vec4 aPosition;   // Sebelumnya vec2, makanya tidak tergambar kubus :D
attribute vec4 aColor;

uniform mat4 uModel;
uniform mat4 uView;
uniform mat4 uProjection;

varying vec4 vColor;

void main() {
  gl_Position = uProjection * uView * uModel * aPosition;
  vColor = aColor;
}
