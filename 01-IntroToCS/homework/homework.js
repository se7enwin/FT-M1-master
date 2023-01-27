'use strict';

function BinarioADecimal(num) {

//  var bin = num.toString();
// let acum = 0;
//  for(let i = 0;i<= bin.length;i++){
//      if(bin[i] == "1"){
//          acum += 2 ** ((bin.length - 1) - i)
//          console.log((bin.length - 1) -i)
//      }
//  }
// return acum}


// En clase

var decimal=0;
for (let i=0; i < num.length; i++) {

    var valorAgregar = num[i]* Math.pow (2,num.length-1-i)
    decimal=decimal+valorAgregar;

}
return decimal;
}

// Fin Clase

 function DecimalABinario(num) {    

//     var entero=num;
//     var resto=[];

//     var i=0;
// while (num>=1) {
//         resto.unshift(num%2);
//         num=Math.floor(num/2);
// }
// return resto.join('');
// }


// En clase

var binario=[];
while (num >=1) {

    binario.unshift(num % 2);
    num=Math.floor(num/2);
   
}
var stringAretomar=binario.join('')
return stringAretomar;


//

}


// let acum = [];
// while(num>1){
//     acum.unshift(num%2)
//     num = Math.floor(num / 2)
//     if(num == 1) {acum.unshift(1)}
// }

// return acum.join('')
// }


module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
