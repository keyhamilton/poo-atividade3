/**
 * 
 * @param numero 
 * @returns true se numero é primo, do contrário, false.
 */
function ehPrimo(numero: number):boolean {
    for(let i = 2; i <numero; i++)
      if(numero % i === 0) {
          return false
      };
    return numero > 1;
  }
console.log(ehPrimo(12));
console.log(ehPrimo(13));
console.log(ehPrimo(11));

