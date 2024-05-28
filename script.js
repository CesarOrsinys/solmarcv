// Definir datos de las entradas (ejemplo)
const entries = [
    {
        title: "Entrada 1",
        modelUrl: "modelo1.dae",
        photos: ["foto1.jpg", "foto2.jpg", "foto3.jpg"]
    },
    {
        title: "Entrada 2",
        modelUrl: "modelo2.dae",
        photos: ["foto4.jpg", "foto5.jpg", "foto6.jpg"]
    }
];

// Inicializar variables
let currentEntry = 0; // Índice de la entrada actual
let scene, camera, renderer;

// Función para cargar y renderizar el modelo 3D
function loadModel(entry) {
    // Crear escena, cámara y renderer de Three.js
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true });

    // Configurar el renderer
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('modelo-3d').appendChild(renderer.domElement);

    // Cargar modelo 3D
    const loader = new THREE.GLTFLoader();
        loader.load(entry.modelUrl, (collada) => {
        const scene = collada.scene;
        // Agregar la escena a tu escena Three.js
        scene.scale.set(0.01, 0.01, 0.01); // Ajustar la escala según sea necesario
        yourScene.add(scene);
    });
}

// Load models for all entries using a forEach loop
entries.forEach(entry => {
    loadModel(entry);
});
    
