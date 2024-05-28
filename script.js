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
let scene

// Función para cargar y renderizar el modelo 3D
function loadModel(entry) {
    const loader = new THREE.ColladaLoader();
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
    
