function calcular() {
    var id = document.Registro.id.value;
    var nombre = document.Registro.nombre.value;
    var horasTrabajadas = parseFloat(document.Registro.horasTrabajadas.value) || 0;
    var costoHora = parseFloat(document.Registro.costoPorHora.value) || 0;
    var horasNormales = parseFloat(document.Registro.horasNormales.value) || 0;
    var horasExtras = parseFloat(document.Registro.horasExtras.value) || 0;

    var subtotal = (horasNormales * costoHora) + (horasExtras * costoHora * 2);

    var ispt = subtotal * 0.10;

    var monto = subtotal - ispt;

    document.Registro.subtotal.value = subtotal.toFixed(2);
    document.Registro.ispt.value = ispt.toFixed(2);
    document.Registro.montoAPagar.value = monto.toFixed(2);
}

function borrar() {
    document.Registro.id.value = "";
    document.Registro.nombre.value = "";
    document.Registro.horasTrabajadas.value = "";
    document.Registro.costoPorHora.value = "";
    document.Registro.horasNormales.value = "";
    document.Registro.horasExtras.value = "";
    document.Registro.subtotal.value = "";
    document.Registro.ispt.value = "";
    document.Registro.montoAPagar.value = "";


}