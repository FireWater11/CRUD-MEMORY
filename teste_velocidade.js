// =====================
// TESTE SUPREMO DE PERFORMANCE
// =====================

const tamanho = 100_000_000; // 100 milhões
console.log(`Criando array com ${tamanho} objetos...`);

const arr = Array.from({ length: tamanho }, (_, i) => ({ id: i }));
const alvo = tamanho - 1; // último elemento

// ---------------------
// FOR TRADICIONAL
// ---------------------

console.time('FOR');
let indexFor = -1;
for (let i = 0; i < arr.length; i++) {
    if (arr[i].id === alvo) {
        indexFor = i;
        break;
    }
}
console.timeEnd('FOR');
console.log('Index encontrado com for:', indexFor);

// ---------------------
// FINDINDEX
// ---------------------

console.time('FINDINDEX');
const indexFind = arr.findIndex(item => item.id === alvo);
console.timeEnd('FINDINDEX');
console.log('Index encontrado com findIndex:', indexFind);

// ---------------------
// RESULTADO ESPERADO
// ---------------------
// O "for" puro deve ser mais rápido que o findIndex, possivelmente 2x ou mais.
// findIndex é mais legível, mas tem overhead do callback.
