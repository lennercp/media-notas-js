function addRow() {
    let table = document.querySelector('table')
    console.dir(table)
    var numeroLinhas = table.rows.length;
    var linha = table.insertRow(numeroLinhas);
    var celula1 = linha.insertCell(0);
    var celula2 = linha.insertCell(1);
    var celula3 = linha.insertCell(2);
    var celula4 = linha.insertCell(3);
    var celula5 = linha.insertCell(4);
    var celula6 = linha.insertCell(5);

    celula1.innerHTML = 'lenner';
    celula2.innerHTML = 50;
    celula3.innerHTML = "a";
    celula4.innerHTML = "a";
    celula5.innerHTML = "a";
    celula6.innerHTML = "a";
}