var valorHoraInput = document.getElementById('valor-hora');
var horasVirtualesInput = document.getElementById('horas-virtuales');
var horasPresencialesInput = document.getElementById('horas-presenciales');
var resultadoDiv = document.getElementById('resultado');
var resetBtn = document.getElementById('refresh-button');
// Load data from localStorage
var data = JSON.parse(localStorage.getItem('data')) || {};

if (data.valorHora) {
  valorHoraInput.value = data.valorHora;
}

if (data.horasVirtuales) {
  horasVirtualesInput.value = data.horasVirtuales;
}

if (data.horasPresenciales) {
  horasPresencialesInput.value = data.horasPresenciales;
}
calcularSueldo();
resetBtn.style.display = 'none';
valorHoraInput.addEventListener('keyup', calcularSueldo);
horasVirtualesInput.addEventListener('keyup', calcularSueldo);
horasPresencialesInput.addEventListener('keyup', calcularSueldo);
resetBtn.addEventListener('click', resetCalculadora);
function calcularSueldo() {
  var valorHora = parseFloat(valorHoraInput.value);
  var horasVirtuales = parseFloat(horasVirtualesInput.value);
  var horasPresenciales = parseFloat(horasPresencialesInput.value);

  if (isNaN(valorHora) || isNaN(horasVirtuales) || isNaN(horasPresenciales)) {
    resultadoDiv.textContent = "";
    return;
  }

  var sueldo =
    valorHora * horasVirtuales + (valorHora + 400) * horasPresenciales;

  resultadoDiv.textContent =
    "Sueldo: $" +
    sueldo.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  // Save data to localStorage
  saveData(valorHora, horasVirtuales, horasPresenciales);
  resetBtn.style.display = '';
}

function saveData(valorHora, horasVirtuales, horasPresenciales) {
    localStorage.setItem(
        'data',
        JSON.stringify({
            valorHora: valorHora,
            horasVirtuales: horasVirtuales,
            horasPresenciales: horasPresenciales,
        })
    );
}

function resetCalculadora() {
    saveData(0,0,0)
    valorHoraInput.value = null;
    horasVirtualesInput.value = null;
    horasPresencialesInput.value = null;
    resultadoDiv.textContent = "";
    resetBtn.style.display = 'none';
}
