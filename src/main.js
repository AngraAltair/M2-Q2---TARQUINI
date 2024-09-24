import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.150.0/build/three.module.js';
 
// Scene setup

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
 
const cubegeometry = new THREE.BoxGeometry(2, 2, 2); 
const cubematerial = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
const cube = new THREE.Mesh( cubegeometry, cubematerial ); 
scene.add( cube );
cube.position.set(-5, 5, 5);

const conegeometry = new THREE.ConeGeometry( 2, 2, 32 ); 
const conematerial = new THREE.MeshBasicMaterial( {color: 0xffff00} );
const cone = new THREE.Mesh(conegeometry, conematerial ); 
scene.add( cone );
cone.position.set(5, 5, 5);

const cylindergeometry = new THREE.CylinderGeometry( 2, 2, 2); 
const cylindermaterial = new THREE.MeshBasicMaterial( {color: 0xf308ff} ); 
const cylinder = new THREE.Mesh( cylindergeometry, cylindermaterial ); 
scene.add( cylinder );
cylinder.position.set(5, -5, 5);

const spheregeometry = new THREE.SphereGeometry( 2, 25, 25 ); 
const spherematerial = new THREE.MeshBasicMaterial( { color: 0x001aff } ); 
const sphere = new THREE.Mesh( spheregeometry, spherematerial ); 
scene.add( sphere );
sphere.position.set(-5, -5, 5);

const torusgeometry = new THREE.TorusGeometry( 2, 0.5, 15); 
const torusmaterial = new THREE.MeshBasicMaterial( { color: 0xff0008 } ); 
const torus = new THREE.Mesh( torusgeometry, torusmaterial ); 
scene.add( torus );


camera.position.z = 25;
 
// Animation loop
function animate() {
  requestAnimationFrame(animate);
  cube.position.x -= 0.01;
  cube.position.y += 0.01;

  cone.position.x += 0.01;
  cone.position.y += 0.01;

  cylinder.position.x += 0.01;
  cylinder.position.y -= 0.01;

  sphere.position.x -= 0.01;
  sphere.position.y -= 0.01;


  cube.rotation.x += 0.01;
  cube.rotation.y += 0.04;

  cone.rotation.x += 0.01;
  cone.rotation.y += 0.04; 

  cylinder.rotation.x += 0.01;
  cylinder.rotation.y += 0.04; 

  sphere.rotation.x += 0.01;
  sphere.rotation.y += 0.04; 

  torus.rotation.x += 0.01;
  torus.rotation.y += 0.04; 


  renderer.render(scene, camera);
}
animate();