fetch("../json/photos.json")
  .then(response => response.json())
  .then(data => {
    const gallery = document.getElementById("gallery");

    data.forEach(photo => {
      const div = document.createElement("div");
      if (photo.class) div.classList.add(photo.class);

      const img = document.createElement("img");
      img.src = photo.url;
      img.alt = "Foto";

      div.appendChild(img);
      gallery.appendChild(div);
    });
  })
  .catch(err => console.error("Error cargando JSON:", err));
