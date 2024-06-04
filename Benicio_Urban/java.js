document.addEventListener('DOMContentLoaded', (event) => {
    const botonEnviar = document.getElementById('enviarDatosLogin');

    botonEnviar.addEventListener('click', (e) => {
        e.preventDefault();
        const usuario = document.getElementById('usuario').value;
        const contraseña = document.getElementById('contraseña').value;

        if (usuario === 'TpEvaluativo' && contraseña === 'Evaluacion') {
            window.open('paginaPrincipal.html')
        } else {
            alert('Los Datos Son Incorrectos');
        }
    });
});
