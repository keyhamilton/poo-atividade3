/*
 * 4. Crie uma função que retorne os números de um array passados por parâmetro separados
 *  por traço (-) no formato string. Para isso, use o método forEach dos arrays.
 */
var r = '';
function numToString(num: number, index: number, array: number[]): void {
    if (index == 0 || index == array.length) {
        r += num.toString();
        
    } else {
        r += '-' + num.toString();
    }
    
}

const numeros: number[] = [1,2,3,4,0];
numeros.forEach(numToString)
console.log(r);





