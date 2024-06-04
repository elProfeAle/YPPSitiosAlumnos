    const botonPalindromo = document.querySelector('.boton'); 
    const palabraInput = document.querySelector('.palabra'); 
    const resultado = document.querySelector('.resultado'); 
    botonPalindromo.addEventListener('click', (e) => {
    e.preventDefault();
    const palabra = palabraInput.value.toLowerCase();
    const palabraAlRevez = palabra.split('').reverse().join('');
    if (palabra === palabraAlRevez) {
        resultado.textContent = `¡Sí! La palabra "${palabra}" es un palíndromo.`;
    } else {
        resultado.textContent = `No, la palabra "${palabra}" no es un palíndromo.`;
    }
});
