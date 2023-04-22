import * as THREE from "https://unpkg.com/three/build/three.module.js";

let scene = new THREE.Scene();

let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(1, 3, 5);
let cameraTarget = new THREE.Vector3(0, 2, 0);

let renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight);
document.body.appendChild( renderer.domElement);
renderer.shadowMap.enabled = true;

//plane
const plane = new THREE.Mesh(
new THREE.PlaneGeometry(8, 8),
new THREE.MeshPhongMaterial({ color: 0x97c7ff, dithering: true })
);
plane.receiveShadow  = true;
plane.rotation.x = - Math.PI / 2;
plane.receiveShadow = true;
scene.add(plane);

//cube
var gr=document.getElementById("r1");
var red=document.getElementById("r2");
var blue=document.getElementById("r3");
var ch=document.getElementById("one");


const geometry1 = new THREE.BoxGeometry( 1, 1, 1 );

let material1 = new THREE.MeshPhongMaterial( {color: 0xa3ffc0} );


const cube = new THREE.Mesh( geometry1, material1 );
cube.castShadow = true;
cube.position.set(-2, 0.5, 0);

scene.add( cube );


//pyramid
const material = new THREE.MeshPhongMaterial()
let geometry = new THREE.BufferGeometry()
const points = [
    new THREE.Vector3(-1, 1, -1), //c
    new THREE.Vector3(-1, -1, 1), //b
    new THREE.Vector3(1, 1, 1), //a

    new THREE.Vector3(1, 1, 1), //a
    new THREE.Vector3(1, -1, -1), //d
    new THREE.Vector3(-1, 1, -1), //c

    new THREE.Vector3(-1, -1, 1), //b
    new THREE.Vector3(1, -1, -1), //d
    new THREE.Vector3(1, 1, 1), //a

    new THREE.Vector3(-1, 1, -1), //c
    new THREE.Vector3(1, -1, -1), //d
    new THREE.Vector3(-1, -1, 1), //b
]

geometry.setFromPoints(points)
geometry.computeVertexNormals()

const mesh = new THREE.Mesh(geometry, material)
mesh.castShadow = true;

scene.add(mesh)

gr.addEventListener('focus', change);
function change(){
  material1.color.setRGB(0,1,0);
  material.color.setRGB(0,1,0);
  }

red.addEventListener('focus', change1);
function change1(){
    material1.color.setRGB(1,0,0);
    material.color.setRGB(1,0,0);
    }
blue.addEventListener('focus', change2);
function change2(){
    material1.color.setRGB(0,0,1);
    material.color.setRGB(0,0,1);
    }
  
  
//plane buff
const material2 = new THREE.MeshPhongMaterial()
let geometry2 = new THREE.BufferGeometry()
const points2 = [
    new THREE.Vector4(-3, -3, 3), //c
    new THREE.Vector4(3, -3, 3), //b
    new THREE.Vector4(3, 3, 3), //a
    
    new THREE.Vector4(3,3, 3), //c
    new THREE.Vector4(-3, 3, 3), //d
    new THREE.Vector4(-3, -3, 3), //b
    /* new THREE.Vector3(1, 1, 1), //a
    new THREE.Vector3(-1, 1, 1), //d
    new THREE.Vector3(-1, -1, 1), //c */

   /*  new THREE.Vector3(-1, -1, 1), //b
    new THREE.Vector3(1, -1, -1), //d
    new THREE.Vector3(1, 1, 1), //a

    new THREE.Vector3(-1, 1, -1), //c
    new THREE.Vector3(1, -1, -1), //d
    new THREE.Vector3(-1, -1, 1), //b */
]

geometry2.setFromPoints(points2)
geometry2.computeVertexNormals()

const mesh2 = new THREE.Mesh(geometry2, material2)
mesh2.position.set(-1, 2, -6);

scene.add(mesh2)


//light
var spotLight = new THREE.DirectionalLight( 0xffffff );
spotLight.position.set( 0, 5, 0 );
spotLight.castShadow = true;
scene.add( spotLight );

var spotLight1 = new THREE.SpotLight( 0xffffff );
spotLight1.position.set( 3, 5, 3 );
spotLight1.castShadow = true;
scene.add( spotLight1 );

var element = document.querySelector('input[type=checkbox]');    



ch.addEventListener('change', change5);
function change5(){
  if (element.checked) {
    
    spotLight.intensity = 1;
    spotLight1.intensity = 1;
  }
  else{
    
    spotLight.intensity = 0;
    spotLight1.intensity = 0;
  }
  }


function render() {
requestAnimationFrame(render);

camera.lookAt(cameraTarget);

renderer.render(scene, camera);
}
render();