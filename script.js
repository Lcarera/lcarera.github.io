var valorHoraInput = document.getElementById('valor-hora');
var horasVirtualesInput = document.getElementById('horas-virtuales');
var horasPresencialesInput = document.getElementById('horas-presenciales');
var resultadoDiv = document.getElementById('resultado');

valorHoraInput.addEventListener('keyup', calcularSueldo);
horasVirtualesInput.addEventListener('keyup', calcularSueldo);
horasPresencialesInput.addEventListener('keyup', calcularSueldo);

function calcularSueldo() {
    var valorHora = parseFloat(valorHoraInput.value);
    var horasVirtuales = parseFloat(horasVirtualesInput.value);
    var horasPresenciales = parseFloat(horasPresencialesInput.value);

    if (isNaN(valorHora) || isNaN(horasVirtuales) || isNaN(horasPresenciales)) {
        resultadoDiv.textContent = "";
        return;
    }

    var sueldo = (valorHora * horasVirtuales) + ((valorHora + 400) * horasPresenciales);

    resultadoDiv.textContent = "Sueldo: $" + sueldo.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}
