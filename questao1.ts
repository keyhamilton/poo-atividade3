/**
 * 
 * @param numero 
 * @returns true se numero é par, senão, false.
 */

function ehPar(numero: number): boolean {
    if(numero % 2===0){
        return true; 
    }
    return false;
}

console.log(ehPar(3));
console.log(ehPar(2));
console.log(ehPar(0));



