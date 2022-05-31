function inserirLinha(nome, nota1, nota2, nota3, media, situacao) {
    let table = document.querySelector('table')
    let tbody = document.querySelector('tbody')
    var numeroLinhas = table.rows.length;
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
}

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
        var situacao = 'Prova final'
    } else {
        var situacao = 'Reprovado'
    }
    inserirLinha(nome, nota1, nota2, nota3, media, situacao)
}