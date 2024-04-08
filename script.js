function prendiTesto(input) {
    var testo=document.getElementById(input).value;
    if(testo=='') {
        alert("IL TESTO E' VUOTO!");
    }
    return testo;
}

function prendiNumero(input) {
    var numero=document.getElementById(input).value;
    if(numero<0||numero>100) {
        alert("L'ETA' E' INESISTENTE");
    }
    return numero;
}

function creaElemento(elemento) {
    var paragrafo=document.createElement('p');
    paragrafo.textContent=elemento;
    paragrafo.style="text-align:center;font-size:150%"
    document.body.appendChild(paragrafo);
}

function stampaTesto() {
    nome=prendiTesto('input1');
    cognome=prendiTesto('input2');
    eta=prendiNumero('input3');
    classe=prendiTesto('input4');
    scuola=prendiTesto('input5');
    citta=prendiTesto('input6');
    paese=prendiTesto('input7');
    if(nome!='' && cognome!='' && eta>0 && eta<100 && classe!='' && scuola!='') {
        creaElemento(nome);
        creaElemento(cognome);
        creaElemento(eta);
        creaElemento(classe);
        creaElemento(scuola);
        creaElemento(citta);
        creaElemento(paese);
        document.getElementById('button').disabled='true'
    }
}