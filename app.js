var comparar = function(arreglo1,arreglo2){
  if (arreglo1.lenght === arreglo2.lenght) {
    return false;
  }else {
    for (var i = 0; i < arreglo1.length; i+=1) {
     if(arreglo1[i] === arreglo2[i]) {
       return false;
     }
    }
    document.write("Todas las condiciones se cumplen");
    return true;
   }

}

var array1 = [1,2,3,4,5,6,7,8,9,10];
var array2 = [1,2,3,4,5,6,7,8,9,10];

comparar(array1,array2);
