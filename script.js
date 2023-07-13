var valorHoraVirtualInput = document.getElementById('valor-hora-virtual');
var valorHoraPresencialInput = document.getElementById('valor-hora-presencial');
var horasVirtualesInput = document.getElementById('horas-virtuales');
var horasPresencialesInput = document.getElementById('horas-presenciales');
var resultadoDiv = document.getElementById('resultado');
var resultadoPresencialDiv = document.getElementById('resultado-presencial');
var resultadoVirualDiv = document.getElementById('resultado-virtual');
var resetBtn = document.getElementById('refresh-button');
// Load data from localStorage
var data = JSON.parse(localStorage.getItem('data')) || {};

if (data.valorHoraVirtual) {
  valorHoraVirtualInput.value = data.valorHoraVirtual;
}

if (data.valorHoraPresencial) {
  valorHoraPresencialInput.value = data.valorHoraPresencial;
}

if (data.horasVirtuales) {
  horasVirtualesInput.value = data.horasVirtuales;
}

if (data.horasPresenciales) {
  horasPresencialesInput.value = data.horasPresenciales;
}
calcularSueldo();
resetBtn.style.display = 'none';
valorHoraVirtualInput.addEventListener('keyup', calcularSueldo);
valorHoraPresencialInput.addEventListener('keyup', calcularSueldo);
horasVirtualesInput.addEventListener('keyup', calcularSueldo);
horasPresencialesInput.addEventListener('keyup', calcularSueldo);
resetBtn.addEventListener('click', resetCalculadora);
function calcularSueldo() {
  var valorHoraPresencial = parseFloat(valorHoraPresencialInput.value);
  var valorHoraVirtual = parseFloat(valorHoraVirtualInput.value);
  var horasVirtuales = parseFloat(horasVirtualesInput.value);
  var horasPresenciales = parseFloat(horasPresencialesInput.value);

  if (isNaN(valorHoraPresencial) || isNaN(valorHoraVirtual) || isNaN(horasVirtuales) || isNaN(horasPresenciales)) {
    resultadoDiv.textContent = "";
    return;
  }
  var sueldoVirtual = valorHoraVirtual * horasVirtuales
  var sueldoPresencial = valorHoraPresencial * horasPresenciales
  var sueldo = sueldoVirtual + sueldoPresencial

  resultadoPresencialDiv.textContent =
  "Sueldo: $" +
  sueldoPresencial.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  resultadoVirualDiv.textContent =
  "Sueldo: $" +
  sueldoVirtual.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  resultadoDiv.textContent =
    "Sueldo: $" +
    sueldo.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  // Save data to localStorage
  saveData(valorHoraPresencial, valorHoraVirtual, horasVirtuales, horasPresenciales);
  resetBtn.style.display = '';
}

function saveData(valorHoraPresencial, valorHoraVirtual, horasVirtuales, horasPresenciales) {
    localStorage.setItem(
        'data',
        JSON.stringify({
            valorHoraPresencial: valorHoraPresencial,
            valorHoraVirtual: valorHoraVirtual,
            horasVirtuales: horasVirtuales,
            horasPresenciales: horasPresenciales,
        })
    );
}

function resetCalculadora() {
    saveData(0,0,0)
    valorHoraVirtualInput.value = null;
    valorHoraPresencialInput.value = null;
    horasVirtualesInput.value = null;
    horasPresencialesInput.value = null;
    resultadoDiv.textContent = "";
    resultadoPresencialDiv.textContent = "";
    resultadoVirualDiv.textContent = "";
    resetBtn.style.display = 'none';
}
