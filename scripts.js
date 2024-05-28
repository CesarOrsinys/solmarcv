document.addEventListener("DOMContentLoaded", function() {
    // Array de entradas (título, modelo 3D y galería de fotos)
    var entries = [
        {
            title: "Entrada 1",
            modelUrl: "modelo1.dae",
            photos: ["foto1.jpg", "foto2.jpg", "foto3.jpg"]
        },
        {
            title: "Entrada 2",
            modelUrl: "modelo2.dae",
            photos: ["foto4.jpg", "foto5.jpg", "foto6.jpg"]
        },
        // Agrega más entradas según sea necesario
    ];

    var entriesContainer = document.getElementById("entries");

    // Iterar sobre las entradas y agregarlas al DOM
    entries.forEach(function(entry) {
        var entryDiv = document.createElement("div");
        entryDiv.classList.add("entry");

        var title = document.createElement("h2");
        title.classList.add("entry-title");
        title.textContent = entry.title;

        var model = document.createElement("div");
        model.classList.add("entry-model");
        model.innerHTML = '<model-viewer src="' + entry.modelUrl + '" camera-controls autoplay></model-viewer>';

        var photosDiv = document.createElement("div");
        photosDiv.classList.add("entry-photos");
        entry.photos.forEach(function(photo) {
            var img = document.createElement("img");
            img.src = photo;
            photosDiv.appendChild(img);
        });

        entryDiv.appendChild(title);
        entryDiv.appendChild(model);
        entryDiv.appendChild(photosDiv);

        entriesContainer.appendChild(entryDiv);
    });
});
