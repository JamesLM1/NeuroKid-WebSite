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

// Notas de cada estudiante
const notasEstudiantes = {
    estudiante1: "Este estudiante muestra buen progreso en el área cognitiva, pero necesita más trabajo en habilidades de concentración.",
    estudiante2: "El estudiante tiene un desempeño adecuado, aunque se recomienda mejorar su atención en clase.",
    estudiante3: "Se observan avances importantes, sin embargo, es necesario reforzar algunas áreas de comprensión lectora.",
    estudiante4: "Este estudiante está teniendo dificultades para adaptarse al entorno escolar, se recomienda apoyo adicional.",
    estudiante5: "El estudiante tiene buenos hábitos de estudio, pero se debe trabajar más en la participación activa en clase."
};

// Función para mostrar el comentario correspondiente según el estudiante seleccionado
document.getElementById("estudiantes").addEventListener("change", function () {
    const estudianteSeleccionado = this.value;
    const comentario = notasEstudiantes[estudianteSeleccionado];
    document.getElementById("comentario").value = comentario;  // Prellena el campo de texto con el comentario del estudiante
});

// Función para guardar la nota
function guardarNota() {
    const comentario = document.getElementById("comentario").value;
    const estudianteSeleccionado = document.getElementById("estudiantes").value;
    const estudianteNombre = document.getElementById("estudiantes").options[document.getElementById("estudiantes").selectedIndex].text;

    if (comentario.trim() !== "") {
        const nuevaNota = `${estudianteNombre}: ${comentario}`;
        const listaNotas = document.getElementById("lista-notas");
        const nuevaNotaElemento = document.createElement("li");
        nuevaNotaElemento.textContent = nuevaNota;
        listaNotas.appendChild(nuevaNotaElemento);
        
        // Limpiar campo de comentario después de guardar
        document.getElementById("comentario").value = "";
    } else {
        alert("Por favor, escribe una nota antes de guardar.");
    }
}




// Datos de los pacientes (simulados)
const pacientes = {
    1: {
        edad: 10,
        nivelEscolar: "5to de primaria",
        comentarios: "Paciente presenta buen progreso, se recomienda continuar seguimiento."
    },
    2: {
        edad: 12,
        nivelEscolar: "6to de primaria",
        comentarios: "Paciente necesita reforzar áreas de comprensión lectora."
    },
    3: {
        edad: 8,
        nivelEscolar: "3ro de primaria",
        comentarios: "Paciente está en proceso de adaptación escolar, se recomienda más apoyo."
    },
    4: {
        edad: 9,
        nivelEscolar: "4to de primaria",
        comentarios: "Paciente presenta avances en comportamiento, pero se recomienda continuar evaluaciones."
    }
};

// Función que se ejecuta al seleccionar un paciente
function mostrarPerfil() {
    const pacienteId = document.getElementById('pacienteSelector').value; // Obtener el ID del paciente seleccionado

    // Si no se ha seleccionado un paciente, no mostrar nada
    if (pacienteId === "0") {
        document.getElementById('profileInfo').style.display = 'none';
        return;
    }

    // Obtener los datos del paciente seleccionado
    const paciente = pacientes[pacienteId];

    // Insertar los datos en los elementos correspondientes
    document.getElementById('edad').textContent = paciente.edad;
    document.getElementById('nivelEscolar').textContent = paciente.nivelEscolar;
    document.getElementById('comentarios').textContent = paciente.comentarios;

    // Mostrar la sección con los datos
    document.getElementById('profileInfo').style.display = 'block';
}



