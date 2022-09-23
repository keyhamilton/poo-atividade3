/**
 * 
 * @param palavras 
 */
function rest(...palavras: string[]) {
    console.log(palavras.join(', '));
    
}

rest('minha');
rest('vaca', 'cabrito');
rest('fazendda', 'casa', 'palacete');
rest('fi', 'fai', 'fou', 'porcos');