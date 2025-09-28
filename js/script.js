function calcularCuadrado() {
        var num1 = document.form1.num1.value;
        var resultado = num1 * num1;
        document.form1.resultado.value = resultado;
    }

    function borrar() {
        document.form1.num1.value = "";
        document.form1.resultado.value = "";
    }