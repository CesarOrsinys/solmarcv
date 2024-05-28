// Definir datos de las entradas (ejemplo)
const entries = [
    {
        title: "Entrada 1",
        modelUrl: "Render Week_mayo22_01otroG.dae",
        photos: ["foto1.jpg", "foto2.jpg", "foto3.jpg"]
    },
    {
        title: "Entrada 2",
        modelUrl: "Render Week_mayo22_01otroG.dae",
        photos: ["foto4.jpg", "foto5.jpg", "foto6.jpg"]
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
    
