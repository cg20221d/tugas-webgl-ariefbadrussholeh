precision mediump float;

varying vec4 vColor;

uniform vec3 uAmbientConstant;      // merepresentasikan warna sumber cahaya
uniform float uAmbientIntensity;    // merepresentasikan intensitas cahaya sekitar

void main() {
  vec3 ambient = uAmbientConstant * uAmbientIntensity;
  vec3 phong = ambient;
  
  gl_FragColor = vec4(phong * vColor.xyz, vColor.w);
}
