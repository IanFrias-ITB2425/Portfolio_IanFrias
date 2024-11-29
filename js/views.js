// visitCounter.js
let visitCount = localStorage.getItem('visitCount') || 0;  // Obtiene el número de visitas guardado o inicializa en 0
visitCount++;  // Incrementamos el contador

localStorage.setItem('visitCount', visitCount);  // Guardamos el contador actualizado en localStorage

// Mostramos el contador en el elemento con id 'visitCounter'
document.getElementById('visitCounter').innerText = visitCount;