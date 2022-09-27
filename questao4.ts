/*
 * 4. Crie uma função que retorne os números de um array passados por parâmetro separados
 *  por traço (-) no formato string. Para isso, use o método forEach dos arrays.
 */
function conv(numbers: number[]): string {
    var s = '';
    numbers.forEach(num => {return s+= num.toString().concat('-')});
    return s.slice(0, s.length-1);
}

const test = [1,2,3];
const str = conv(test);
console.log(str);





