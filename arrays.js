/*
const alunos = ['João', 'Vitor', 'Marina', 'Renan'];

alunos.push('Jesus', 'Carla');
alunos[6] = 'Marco';

alunos.push('fernanda');
console.log(alunos);
console.log(alunos.pop());
console.log(alunos.shift());
console.log(alunos);
*/

const notas = [];

notas.push(Math.random() * 10);
notas.push(Math.random() * 10);
notas.push(Math.random() * 10);

let soma = 0;
console.log(`Quantidade de Notas: ${notas.length}`);
for (let i = 0; i < notas.length; i++){
    if (notas[i] <= 4){
        notas[i] += 5;
    }
    soma += notas[i];
    console.log('Nota', [i], `: ${notas[i]}`);
    console.log(soma);
}
let media = soma / notas.length;

console.log(media.toFixed(2));

