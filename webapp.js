var renderer = Detector.webgl ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer();
		

var width  = window.innerWidth,
    height = window.innerHeight;

renderer.setSize(width, height);

var webglEl = document.getElementById('sphere');
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(100, width / height, 1, 1000);
camera.position.x = 0.1;


/* Creates a sphere and texturemaps the projection onto the sphere */
var sphere = new THREE.Mesh(
    new THREE.SphereGeometry(120, 40, 40),
    new THREE.MeshBasicMaterial({
        map: THREE.ImageUtils.loadTexture("./upload/"+imageFile)
    })
);
sphere.scale.x = -1;
scene.add(sphere);

// New code //
var geometry = new THREE.BoxGeometry(10, 10, 10);
var material = new THREE.MeshBasicMaterial({ color: 0x99FFFF});
var cube = new THREE.Mesh(geometry, material);
cube.position.x = -30;
cube.position.y = 8;
scene.add(cube);

var button = document.getElementById('button');
button.addEventListener('click', function() {
    console.log(button);
   cube.visible = !cube.visible;
});

//        var button = document.createElement("Toggle Cube");
//        button.position.x = -30;
//        button.position.y = -10;
//
function clicked() {
    if (document.getElementById("cube").style.visibility == "hidden") {
        document.getElementById("cube").style.visibility = "visible";
    } else {
        document.getElementById("cube").style.visibility = "hidden";
    }
}
//
//        scene.add(button);

// End of new code //

var controls = new THREE.OrbitControls(camera);
controls.noPan = true;
controls.noZoom = true;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.5;
webglEl.appendChild(renderer.domElement);
render();

function render() {
    controls.update();
    requestAnimationFrame(render);
    renderer.render(scene, camera);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );

}


window.addEventListener( 'resize', onWindowResize, false );