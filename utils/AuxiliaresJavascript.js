/*==================================================================

___________________AUXILIARES DO EXERCÍCIO 01_______________________

==================================================================*/
export function sanitizadorNumero(arr = []) {
  var arraylimpo = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr.length >= i) {
      if (!arraylimpo.find((num) => num == arr[i])) {
        arraylimpo.push(arr[i]);
      }
    }
  }

  return arraylimpo;
}

export function bubbleSort(arr = []) {
  var arrayOrdenado = [...arr];
  var n = arr.length;

  do {
    var trocou = false;
    for (let i = 0; i < n - 1; i++) {
      if (arrayOrdenado[i] > arrayOrdenado[i + 1]) {
        let temp = arrayOrdenado[i];
        arrayOrdenado[i] = arrayOrdenado[i + 1];
        arrayOrdenado[i + 1] = temp;
        trocou = true;
      }
    }

    n--;
  } while (trocou);

  return arrayOrdenado;
}
/*==================================================================

___________________AUXILIARES DO EXERCÍCIO 02_______________________

==================================================================*/

export function letrasCompactadas(textoLimpo = "") {
  let arquivoDeLetras = [];
  let count = 0;

  for (let i = 1; i < textoLimpo.length; i++) {
    let letraAtual = textoLimpo.slice(i - 1, i);
    if (!arquivoDeLetras.find((item) => item.letra == letraAtual)) {
      for (let n = 1; n < textoLimpo.length; n++) {
        if (letraAtual == textoLimpo.slice(n - 1, n)) {
          count++;
        }
      }
      arquivoDeLetras.push({ letra: letraAtual, count: count });
    }
    count = 0;
    letraAtual = "";
  }
  return arquivoDeLetras;
}

export function sanitizadorDeTexto(text = "") {
  let textoLimpo = text.toString();
  textoLimpo = text.trim();
  textoLimpo = text.replace(/\s/g, "");
  return textoLimpo;
}