const cadena = prompt("Introduce una cadena:").toLowerCase().replace(/[^a-z0-9]/g, "");

let esPalindromo = true;

for (let i = 0; i < cadena.length / 2; i++) {
  if (cadena[i] !== cadena[cadena.length - 1 - i]) {
    esPalindromo = false;
    break;
  }
}

if (esPalindromo) {
  console.log("La cadena es un palíndromo.");
} else {
  console.log("La cadena no es un palíndromo.");
}
