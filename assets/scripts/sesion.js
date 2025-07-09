document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formSesion");
  const lista = document.getElementById("listaSesiones");

  const sesionesGuardadas = JSON.parse(localStorage.getItem("sesionesConPerfil")) || [];
  sesionesGuardadas.forEach(sesion => agregarsesionConPerfil(sesion));

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombre = document.getElementById("nombrePaciente").value.trim();
    const descripcion = document.getElementById("descSesion").value.trim();

    if (!nombre || !descripcion) {
      alert("Por favor, complete todos los campos antes de enviar.");
      return;
    }

    const fecha = new Date().toLocaleDateString("es-PE", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    const nuevaSesion = {
      nombre,
      descripcion,
      fecha,
      imagen: "perfil.png" // Imagen por defecto
    };

    sesionesGuardadas.unshift(nuevaSesion);
    localStorage.setItem("sesionesConPerfil", JSON.stringify(sesionesGuardadas));

    agregarSesionConPerfil(nuevaSesion);
    form.reset();
  });

  function agregarSesionConPerfil({ nombre, descripcion, fecha, imagen }) {
    const li = document.createElement("li");
    li.className = "sesion-item";
    li.innerHTML = `
      <div class="sesion-content" style="display: flex; align-items: flex-start; gap: 12px;">
        <img src="${imagen}" alt="Perfil" style="width: 50px; height: 50px; border-radius: 50%; object-fit: cover;">
        <div class="sesion-text">
          <strong>${nombre}</strong><br>
          <p>${descripcion}</p>
          <small>Fecha: ${fecha}</small>
        </div>
      </div>
    `;
    lista.prepend(li);
  }
});

function mostrarBibliografia() {
    // Obtener el elemento de la lista de bibliografía
    var bibliografia = document.getElementById("bibliografia");
    
    // Cambiar la propiedad display para mostrar o esconder la lista
    if (bibliografia.style.display === "none" || bibliografia.style.display === "") {
        bibliografia.style.display = "block";
    } else {
        bibliografia.style.display = "none";
    }
}
