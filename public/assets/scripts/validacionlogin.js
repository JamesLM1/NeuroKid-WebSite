let form = document.getElementById('form'),
    email = document.getElementById('email'),
    password = document.getElementById('password');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    //Verificacion de campos
    if(email.value.length == 0 || password.value.length == 0){
        alert("⚠️Error: Debes rellenar todos los campos")
        return;
    }

    //Verificar el formato del correo
    if(!validarCorreo(correo.value)){
        alert("❌Error: Formato inválido")
        return;
    }
})

function validarCorreo(correo){
    let re = /^[a-zA-Z0-9._]+@[a-zA-Z]+\.[a-zA-Z]/;
    return re.test(String(correo).toLowerCase());
}