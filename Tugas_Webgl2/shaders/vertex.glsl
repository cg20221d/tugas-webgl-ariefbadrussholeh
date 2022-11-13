attribute vec4 aColor;
attribute vec4 aPosition;

uniform mat4 uMVPMatrix;

varying vec4 vColor;

void main() {
  gl_Position = uMVPMatrix * aPosition;

  vColor = aColor;
}
