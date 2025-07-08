document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formResena");
  const lista = document.getElementById("listaResenas");

  const reseñasGuardadas = JSON.parse(localStorage.getItem("reseñasConPerfil")) || [];
  reseñasGuardadas.forEach(reseña => agregarResenaConPerfil(reseña));

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombreResena").value.trim();
    const estrellas = parseInt(document.getElementById("calificacionResena").value);
    const comentario = document.getElementById("comentarioResena").value.trim();

    if (!nombre || isNaN(estrellas) || !comentario) {
      alert("Por favor, complete todos los campos antes de enviar.");
      return;
    }

    const fecha = new Date().toLocaleDateString("es-PE", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    const nuevaResena = {
      nombre,
      estrellas,
      comentario,
      fecha,
      imagen: "perfil.png" // Imagen por defecto
    };

    reseñasGuardadas.unshift(nuevaResena);
    localStorage.setItem("reseñasConPerfil", JSON.stringify(reseñasGuardadas));

    agregarResenaConPerfil(nuevaResena);
    form.reset();
  });

  function agregarResenaConPerfil({ nombre, estrellas, comentario, fecha, imagen }) {
    const li = document.createElement("li");
    li.className = "reseña-item";
    li.innerHTML = `
      <div class="reseña-content" style="display: flex; align-items: flex-start; gap: 12px;">
        <img src="${imagen}" alt="Perfil" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover;">
        <div class="reseña-text">
          <strong>${nombre}</strong><br>
          <span>${"★".repeat(estrellas)}${"☆".repeat(5 - estrellas)}</span><br>
          <p>${comentario}</p>
          <small>Fecha: ${fecha}</small>
        </div>
      </div>
    `;
    lista.prepend(li);
  }
});

