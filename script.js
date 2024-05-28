// Definir datos de las entradas (ejemplo)
const entries = [
    {
        title: "Entrada 1",
        modelUrl: "Render Week_mayo22_01otroG.dae",
        photos: ["foto1.jpg", "foto2.jpg", "foto3.jpg"]
    }
];

// Inicializar variables
let currentEntry = 0; // Índice de la entrada actual
const scene = new THREE.Scene();

// Función para cargar y renderizar el modelo 3D
function loadModel(entry) {
    const loader = new THREE.ColladaLoader();
    loader.load(entry.modelUrl, (collada) => {
        const model = collada.scene;
        // Ajustar la escala según sea necesario
        model.scale.set(0.01, 0.01, 0.01);
        // Agregar el modelo a tu escena
        scene.add(model);
    });
}

// Load models for all entries using a forEach loop
entries.forEach(entry => {
    loadModel(entry);
});

 // Configurar la escena WebGL
    const renderer = new THREE.WebGLRenderer({
      canvas: document.getElementById('my-canvas'),
    });

    // Agregar una cámara
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    scene.add(camera);

    // Agregar iluminación
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 10);
    scene.add(directionalLight);

    // Renderizar el modelo
    function animate() {
      requestAnimationFrame(animate);

      controls.update();
      renderer.render(scene, camera);
    }

    // Controles de cámara (opcional)
    const controls = new OrbitControls(camera, renderer.domElement);
    animate();
    
