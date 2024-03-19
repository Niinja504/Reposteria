function validarUsuario() {
    var usuario = document.querySelector('input[name="email"]').value;
    var contraseña = document.querySelector('input[name="pass"]').value;

    if ((usuario === 'luis' && contraseña === '1234') || (usuario === 'fabiola' && contraseña === '1234') || (usuario === 'fernando' && contraseña === '1234') || (usuario === 'mirna' && contraseña === '1234') || (usuario === 'emerson' && contraseña === '1234')) {
        window.location.href = 'dashboard.html';
    } else {
        alert('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
    }
}

document.querySelector('.login100-form-btn').addEventListener('click', function(event) {
    event.preventDefault();
    validarUsuario();
});