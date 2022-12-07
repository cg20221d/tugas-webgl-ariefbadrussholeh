precision mediump float;

varying vec4 vColor;
varying vec3 vNormal;
varying vec3 vPosition;             // titik fragmenz

uniform float uAmbientIntensity;    // merepresentasikan intensitas cahaya sekitar
uniform vec3 uLightConstant;      // merepresentasikan warna sumber cahaya
uniform vec3 uLightDirection;       // vektor arah datang sumber cahaya
uniform vec3 uLightPosition;        // titik lokasi sumber cahaya
uniform mat3 uNormalModel;

void main() {
  vec3 ambient = uLightConstant * uAmbientIntensity;
  vec3 lightRay = vPosition - uLightPosition;
  vec3 normalizedLight = normalize(-lightRay);
  vec3 normalizedNormal = normalize(uNormalModel * vNormal);
  float cosTheta = dot(normalizedNormal, normalizedLight);
  vec3 diffuse = vec3(0.0, 0.0, 0.0);
  if (cosTheta > 0.0) {
    float diffuseIntensity = cosTheta;
    diffuse = uLightConstant * diffuseIntensity;
  }
  vec3 phong = ambient + diffuse;
  
  gl_FragColor = vec4(phong * vColor.xyz, vColor.w);
}
