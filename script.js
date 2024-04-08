//alert('Hola desde script.js');

function validar() {
    let validado = true;

    let msgs = document.querySelectorAll('small[id^="msg"]');

    for (let m of msgs) {
        m.innerHTML = "";
    }


    let nombreC = document.getElementById('nombre');
    let edad = document.getElementById('Edad')
    let fecha = document.getElementById('fechaEnt');
    let pin = document.getElementById('pin');
    let experiencia = document.getElementsByName('experiencia');
    let nivelIngles = document.getElementById('nivelIngles');
    let chksLenguajes = document.getElementsByName('lenguaje')
    let sistemasOperativos = document.getElementsByName('sistemaOperativo');

    let disponible = document.getElementsByName('disponibilidad');

    let codigo = document.getElementById('codigo');



    let msgNombre = document.querySelector('#msgNombre');
    let msgEdad = document.querySelector('#msgEdad');
    let msgFecha = document.querySelector('#msgfechaEnt');
    let msgPin = document.querySelector('#msgPin');
    let msgExperiencia = document.querySelector('#msgExperiencia');
    let msgIngles = document.querySelector('#msgNivelIngles')
    let msgLenguajes = document.querySelector('#msgCheckLenguaje')



    let rgxNombre = /^[a-zA-Z]{3,30}$/;
    let rgxEdad = /^(?:\+|-)?\d{2}$/;
    let rgxFecha = /^(?:(?:0?[1-9]|1\d|2[0-8])(\/|-)(?:0?[1-9]|1[0-2]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:31(\/|-)(?:0?[13578]|1[02]))|(?:(?:29|30)(\/|-)(?:0?[1,3-9]|1[0-2])))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(29(\/|-)0?2)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/;
    let rgxPin = /(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,10})$/;




    let cntLenguaje = 0;
    for (let i = 0; i < chksLenguajes.length; i++) {
        if (chksLenguajes[i].checked) {
            ++cntLenguaje;
        }
    }




    let esValidoExperiencia = false;
    for (let i = 0; i < experiencia.length; i++) {
        if (experiencia[i].checked) {
            esValidoExperiencia = true;
            break;
        }
    }


    if (nombreC.value.trim() == '' || nombreC.value.length == 0) {
        msgNombre.innerHTML += 'El nombre es obligatorio <br>';
        validado = false;
    }
    if (!rgxNombre.test(nombreC.value)) {
        msgNombre.innerHTML += 'El nombre no cumple con el formato!! <br>';
        validado = false;
    }
    if (edad.value.trim() == '' || edad.value.length == 0) {
        msgEdad.innerHTML += 'La edad es obligatoria <br>';
        validado = false;
    }
    if (!rgxEdad.test(edad.value) || edad.value < 16 || edad.value > 60) {
        msgEdad.innerHTML += 'La edad no cumple con el formato!! <br>';
        validado = false;
    } if (fecha.value.trim() == '' || fecha.value.length == 0) {
        msgFecha.innerHTML += 'La fecha es obligatoria <br>';
        validado = false;
    }
    if (!rgxFecha.test(fecha.value)) {
        msgFecha.innerHTML += 'La fecha no cumple con el formato!! (dd/MM/aaaa) <br>';
        validado = false;
    }
    if (pin.value.trim() == '' || pin.value.length == 0) {
        msgPin.innerHTML += 'El pin es obligatorio <br>';
        validado = false;
    }
    if (!rgxPin.test(pin.value)) {
        msgPin.innerHTML += 'El pin no cumple con el formato!! <br>';
        validado = false;
    }
    if (esValidoExperiencia == false) {
        msgExperiencia.innerHTML += 'debe seleccionar alguna experiencia <br>';
        validado = false;
    }
    if (nivelIngles.selectedIndex == 0) {
        msgIngles.innerHTML = "Debe seleccionar un nivel de ingles valido!!";
        validado = false;
    }
    if (cntLenguaje == 0) {

        msgLenguajes.innerHTML = "Debe seleccionar al menos 1 opción!!";
        validado = false;
    }

    let eda = parseInt(edad.value);
    let lengua = 0;
    let dispo = 0;

    for (let i = 0; i < chksLenguajes.length; i++) {
        if (chksLenguajes[i].checked) {
            if (chksLenguajes[i].value == 'Java' || chksLenguajes[i].value == 'C++') {
                lengua = 1;

            }
        }

    }
    for (let i = 0; i < disponible.length; i++) {
        if (disponible[i].checked) {
            dispo = 1;
        }
    }



    if (validado != false) {
        if (eda > 17 && eda < 25) {
            if (nivelIngles.value >= 70) {
                if (lengua == 1 && dispo == 1) {


                    alert('El entrevistado es apto para el cargo');

                }
            }
        }
    }

    const identificacion = 1115720104;

    codigo.value = identificacion;

    return validado;
}