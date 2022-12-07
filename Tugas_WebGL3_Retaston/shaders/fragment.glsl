precision mediump float;

varying vec4 vColor;
varying vec3 vNormal;
varying vec3 vPosition;             // titik fragmenz

uniform float uShininessConstant;
uniform float uAmbientIntensity;    // merepresentasikan intensitas cahaya sekitar
uniform vec3 uLightConstant;      // merepresentasikan warna sumber cahaya
uniform vec3 uLightPosition;        // titik lokasi sumber cahaya
uniform vec3 uViewerPosition;       // titik lokasi mata atau kamera pengamat
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
  vec3 normalizedReflector = normalize(reflect(lightRay, normalizedNormal));
  vec3 normalizedViewer = normalize(uViewerPosition - vPosition);
  float cosPhi = dot(normalizedReflector, normalizedViewer);
  vec3 specular = vec3(0.0, 0.0, 0.0);
  if (cosPhi > 0.0) {
    float shininessConstant = uShininessConstant;    // batas minimum spesifikasi spekular untuk materi logam
    float specularIntensity = pow(cosPhi, shininessConstant);
    specular = uLightConstant * specularIntensity;
  }
  vec3 phong = ambient + diffuse + specular;
  
  gl_FragColor = vec4(phong * vColor.xyz, vColor.w);
}
