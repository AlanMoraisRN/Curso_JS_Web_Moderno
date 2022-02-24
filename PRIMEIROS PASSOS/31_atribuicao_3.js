const [a] = [10];
console.log(a);

const [n1, , n3, , n5, n6 = 0] = [10, 7, 9, 8];

/*
 * n1 = 10;
 * 7 = IGNORADO, NÃO HÁ VARIÁVEL DEFINIDA;
 * n3 = 9;
 * 8 = IGNORADO, NÃO HÁ VARIÁVEL DEFINIDA;
 * n5 = UNDEFINED, NÃO EXISTE VALOR ATRIBUÍDO;
 * n6 = 0 SETADO DENTRO DO VETOR.
 */

console.log(n1, n3, n5, n6);

const [c1, , c2, [a1, a2, ,], [, b1, , b2, b3]] = [3, 4, 5, [, 8, 8, 7], [9, 6, 8, 12]];

/*
 * c1 = 3;
 * 4 = IGNORADO, NÃO HÁ VARIÁVEL DEFINIDA;
 * c2 = 5;
 * a1 = UNDEFINED, NÃO EXISTE VALOR ATRIBUÍDO;
 * a2 = 8;
 * 7 = IGNORADO, NÃO HÁ VARIÁVEL DEFINIDA
 * 9 = IGNORADO, NÃO HÁ VARIÁVEL DEFINIDA;
 * b1 = 6;
 * 8 = IGNORADO, NÃO HÁ VARIÁVEL DEFINIDA;
 * b2 = 12;
 * b3 = UNDEFINED, NÃO EXISTE VALOR ATRIBUÍDO;
 */

console.log(c1, c2,a1, a2, b1, b2, b3);