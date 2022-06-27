let higiene = ["Sabonete", "Papel Higiênico", "Escova", "Esponja"]
let alimentacao = ["Carne", "Pão", "Salada", "Temperos"]
let cuidadosMedicos = ["Bandaid", "Ataduras", "Remédios"]
let lazer = ["Rede", "Tênis", "Bola", "Internet", "Notebook"]

let indice = ["Higiene", "Alimentacao", "Cuidados Médicos", "Lazer"]

let caixaSuprimentos = [
    higiene, 
    alimentacao, 
    cuidadosMedicos, 
    lazer
]

for(let i = 0; i < caixaSuprimentos.length; i++) {
    if(caixaSuprimentos[i].length < 4) {
        let quantidade = 4 - caixaSuprimentos[i].length
        console.log(`Falta adicionar ${quantidade} item de ${indice[i]}`)
    } else if(caixaSuprimentos[i].length > 4) {
        let quantidade = caixaSuprimentos[i].length - 4
        console.log(`Devolva ${quantidade} item de ${indice[i]}`)
    }
}
console.table(caixaSuprimentos)