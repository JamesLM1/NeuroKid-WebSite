document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formSesion");
  const lista = document.getElementById("listaSesiones");

  // Obtener las sesiones guardadas en localStorage (si existen)
  const sesionesGuardadas = JSON.parse(localStorage.getItem("sesionesConPerfil")) || [];
  
  // Mostrar las sesiones guardadas en la lista
  sesionesGuardadas.forEach(sesion => agregarSesionConPerfil(sesion));

  // Manejo del envío del formulario
  form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar la recarga de la página

    // Obtener los valores del formulario
    const nombre = document.getElementById("nombrePaciente").value.trim();
    const descripcion = document.getElementById("descSesion").value.trim();
    const fecha = document.getElementById("fecha").value; // Obtener la fecha seleccionada

    // Verificar que los campos no estén vacíos
    if (!nombre || !descripcion || !fecha) {
      alert("Por favor, complete todos los campos antes de enviar.");
      return;
    }

    // Crear un objeto para la nueva sesión
    const nuevaSesion = {
      nombre,
      descripcion,
      fecha,
      imagen: "perfil.png", // Imagen por defecto
    };

    // Agregar la nueva sesión al principio del arreglo
    sesionesGuardadas.unshift(nuevaSesion);

    // Guardar las sesiones en localStorage
    localStorage.setItem("sesionesConPerfil", JSON.stringify(sesionesGuardadas));

    // Agregar la sesión a la lista visualmente
    agregarSesionConPerfil(nuevaSesion);

    // Limpiar el formulario
    form.reset();
  });

  // Función para agregar la sesión a la lista en la página
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
    lista.prepend(li); // Insertar la nueva sesión al inicio de la lista
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




// Validar formulario de chat en vivo
document.getElementById("chat-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevenir el comportamiento por defecto (recargar la página)

  const chatName = document.getElementById('chat-name').value;
  const chatMessage = document.getElementById('chat-message').value;

  // Verificar si los campos del chat están completos
  if (chatName && chatMessage) {
    alert('En breves nos comunicaremos contigo. ¡Gracias por tu paciencia!');
  } else {
    alert('Por favor, completa todos los campos antes de enviar el chat.');
  }
});





