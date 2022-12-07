attribute vec4 aPosition;   // Sebelumnya vec2, makanya tidak tergambar kubus :D
attribute vec4 aColor;
attribute vec4 aNormal;

uniform mat4 uModel;
uniform mat4 uView;
uniform mat4 uProjection;

varying vec3 vPosition;
varying vec4 vColor;
varying vec3 vNormal;

void main() {
  gl_Position = uProjection * uView * uModel * aPosition;
  vColor = aColor;
  vNormal = aNormal.xyz;
  vPosition = (uModel * aPosition).xyz;
}
