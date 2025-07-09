let form = document.getElementById('form'),
    nombre = document.getElementById('nombre'),
    correo = document.getElementById('correo'),
    mensaje = document.getElementById('mensaje');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    //Verificacion de campos
    if(nombre.value.length == 0 || correo.value.length == 0 || mensaje.value.length == 0){
        alert("⚠️Error: Debes rellenar todos los campos")
        return;
    }

    //Verificar el formato del correo
    if(!validarCorreo(correo.value)){
        alert("❌Error: Formato inválido")
        return;
    }

    alert("✅ ¡Mensaje enviado correctamente!");
})

function validarCorreo(correo){
    let re = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]/;
    return re.test(String(correo).toLowerCase());
}


