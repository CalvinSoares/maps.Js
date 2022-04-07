const lista = [
    {
        name: 'sabao em po',
        preco: 30,
    },
    {
        name: 'toalha',
        preco: 30,
    },
    {
        name: 'cereal',
        preco: 12,
    },

];

const saldoDisponivel = 100;

function calculasaldo(saldoDisponivel, lista) {
    return lista.reduce(function (prev, current, index) {
       console.log("rodada", index + 1);
        console.log({prev});
        console.log({current});
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculasaldo(saldoDisponivel, lista));