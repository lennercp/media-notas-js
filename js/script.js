function receberDados() {
    let nome = novoAluno[0].value
    let nota1 = parseFloat(novoAluno[1].value)
    let nota2 = parseFloat(novoAluno[2].value)
    let nota3 = parseFloat(novoAluno[3].value)
    limparDados()

    processaDados(nome, nota1, nota2, nota3)
}
function limparDados() {
    let inputs = document.querySelectorAll('input:not([type="submit"])')
    inputs.forEach((input) => {
        input.value = ''
    })
}

function processaDados(nome, nota1, nota2, nota3) {
    let media = ((nota1 + nota2 + nota3) / 3).toFixed(1)
    if (media >= 7) {
        var situacao = 'Aprovado'
    } else if (media >= 4) {
        var situacao = 'Prova Final'
    } else {
        var situacao = 'Reprovado'
    }
    inserirLinha('alunos', nome, nota1, nota2, nota3, media, situacao)
}

function inserirLinha(id, nome, nota1, nota2, nota3, media, situacao) {
    let colors = { 'Aprovado': 'green', 'Prova Final': 'yellow', 'Reprovado': 'red' }
    let table = document.querySelector('#' + id)
    console.log(table)
    let tbody = document.querySelector('#' + id + ' tbody')
    var linha = tbody.insertRow(0);
    var nomeLinha = linha.insertCell(0);
    var nota1Linha = linha.insertCell(1);
    var nota2Linha = linha.insertCell(2);
    var nota3Linha = linha.insertCell(3);
    var mediaLinha = linha.insertCell(4);
    var situacaoLinha = linha.insertCell(5);

    nomeLinha.innerHTML = nome;
    nota1Linha.innerHTML = nota1;
    nota2Linha.innerHTML = nota2;
    nota3Linha.innerHTML = nota3;
    mediaLinha.innerHTML = media;
    situacaoLinha.innerHTML = situacao;

    console.log(situacao, colors[situacao])
    situacaoLinha.style.backgroundColor = colors[situacao]
}

function procurarAluno() {
    limparTabela()
    let nomeBusca = buscarAluno[0].value;

    if (nomeBusca) {
        let linhas = document.querySelectorAll('#novoAluno + table tbody tr')
        let elementoNomes = document.querySelectorAll('#novoAluno + table td:first-child')
        let nomes = []

        elementoNomes.forEach((elemento) => {
            nomes.push(elemento.outerText)
        })
        nomes.forEach((nome, index) => {
            if (nome.toLowerCase().includes(nomeBusca.toLowerCase())) {
                let tds = linhas[index].children
                console.log(tds)
                let valoresLinha = []
                Array.from(tds).forEach((td) => {
                    valoresLinha.push(td.outerText)
                })
                inserirLinha('tableBusca', ...valoresLinha)
            } else {
                console.log(nomeBusca, nome)
            }
        })
        console.log(linhas)
        console.log(elementoNomes, ...nomes)
    }
}

function limparTabela() {
    let linhas = document.querySelectorAll('#tableBusca tbody tr')
    linhas.forEach((linha) => {
        linha.remove()
    })
}