//Solución de ejercicio de funciones
var numero = 565;
//Ejercicio 1: Deerminar si el número es capicúa
function esCapicúa (numero){
  var numArr = numero.toString().split("").reverse().toString().replace(/,/g,"");
  var numComparar = numero.toString();
  var respuesta = "";
    if(numArr == numComparar){
      respuesta += "El número es capicúa";
    } else {
      respuesta += "El número no es capicúa";
    }
    return respuesta;
  }
esCapicúa(numero);
//Ejercicio 2: Calcular la potencia de dos números
var n = 2;
var m = 3;
function calcularPotencia (n, m){
  var respuesta = Math.pow(n,m);
  return respuesta;
}
//Ejercicio 3: Cuántas veces se repite las letras del string
var arr = ["murcielago", "pato", "caballo", "zebra"];
var letra = "a";
function contarLetras (arr, letra){
  var arrCompleto = arr.toString().split("");
  var contar = 0;
  for(var i = 0; i < arrCompleto.length; i++){
    if(arrCompleto[i] == letra){
      contar += 1;
    }
  }
  return contar;
}
//Ejercicio 4: Contar cuantas palabras hay en una cadena de texto
var frase = "El mundo es tan cruel";
function contarPalabras (frase){
  var arrFrase = frase.split(" ");
  return arrFrase.length;
}
contarPalabras(frase);
//Ejercicio 5: Calcular el tamaño máximo de letras en un array
var arr = ["gato", "perro", "cocodrilo", "leon"];
function calcularTamañoMáximo(arr){
  var tamaños = [];
  for(var i = 0; i < arr.length; i++){
    tamaños.push(arr[i].length);
  }
  var máximo = Math.max.apply(null, tamaños);
  return máximo;
}
calcularTamañoMáximo(arr);
//Ejercicio 6: Contar cuantas vocales hay
var arr = ["ojo", "mouse", "lapiz"];
function contarVocales(arr){
  var arrString = arr.toString();
  var contar = 0;
  for(var i = 0; i < arrString.length; i++){
    if((arrString[i] == "a") || (arrString[i] == "e") || (arrString[i] == "i") || (arrString[i] == "o") || (arrString[i] == "u")){
      contar += 1;
    }
  }
  return contar;
}
contarVocales(arr);
//Ejercicio 7: Sumatoria de los números impares comprendidos en un rango
var n = 1;
var m = 7;
function sumatoriaImpares (n,m){
  var arr = [];
  var sumatoria = 0;
  for (var i = n; i <= m; i++){
      arr.push(i);
    }
  for (var j = 0; j < arr.length; j++){
    if(arr[j]%2 !== 0){
      sumatoria = sumatoria + arr[j];
    }
  }
  return sumatoria;
  }
sumatoriaImpares (n, m);
//Ejercicio 8: Devolver la palabra mas larga
var arr = ["jirafa", "leon", "gato", "murcielago", "rata"];
function stringLargo (arr){
  var tamaños = [];
  for(var i = 0; i < arr.length; i++){
    tamaños.push(arr[i].length);
  }
  var máximo = Math.max.apply(null, tamaños);
  for (var j = 0; j < tamaños.length; j++){
    if(tamaños[j] == máximo){
      var respuesta = arr[j];
    }
  }
  return respuesta;
}
stringLargo(arr);
//Ejercicio 9: Función que devuelve el reverso de la función
var palabra = "roma";
function stringReverso (palabra){
    var reverso = palabra.split("").reverse().toString().replace(/,/g,"");
    return reverso;
}
stringReverso(palabra);
//Ejercicio 10: Dibujo
function dibujar (n){
  var dibujo = "";
  for(var i = n; i > 0; i--){
    dibujo += líneas(i)+"/";
    dibujo += comas(i) + "\\";
  }
  return dibujo;
}
function líneas (n){
  var línea = "";
  for(var i = n; i > 0; i--){
    línea += "_";
  }
return línea;
}
function comas (n){
  var coma = "";
  for(var i = n; i > 0; i--){
    coma += "'";
  }
return coma;
}
dibujar(4);
