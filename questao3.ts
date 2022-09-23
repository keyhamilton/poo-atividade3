/**
 * 
 * @param nome 
 * @param pronome 
 * @returns `Saudação ${pronome}. ${nome}`
 */
function saudacao(nome: string, pronome: string = 'Sr'): string {
    return `Olá ${pronome}. ${nome}`;
    
}