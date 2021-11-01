document.addEventListener("DOMContentLoaded", function(){

    document.getElementById("form").addEventListener('submit', validarFormulario);

});

function validarFormulario(evento){

    evento.preventDefault();
    var name = document.getElementById('name').value;
    var mail = document.getElementById('mail').value;
    var tel = document.getElementById('tel').value;
    var msg = document.getElementById('msg').value;
    if((name.length == 0) || (mail.length == 0) || (tel.length == 0) || (msg.length == 0)){

        alert('Hay campos vacios');
        return;
    }

    document.getElementById("form").reset();

}
