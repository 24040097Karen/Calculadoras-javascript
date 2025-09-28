 function calcular(operacion) {
      let n1 = parseFloat(document.getElementById("numero1").value) || 0;
      let n2 = parseFloat(document.getElementById("numero2").value) || 0;
      let resultado = 0;

      document.getElementById("operador").textContent = operacion === "*" ? "×" : (operacion === "/" ? "÷" : operacion);

      switch (operacion) {
        case '+': resultado = n1 + n2; break;
        case '-': resultado = n1 - n2; break;
        case '*': resultado = n1 * n2; break;
        case '/': 
          resultado = n2 !== 0 ? (n1 / n2) : "Error";
          break;
      }

      document.getElementById("resultado").value = resultado;
    }

    function borrar() {
      document.getElementById("numero1").value = "";
      document.getElementById("numero2").value = "";
      document.getElementById("resultado").value = "";
      document.getElementById("operador").textContent = "";
    }