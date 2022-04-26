function acao() {
    var n = window.prompt('informe o numero da tabuada desejada:')
    let i = 0;
    while(i < 11){
        document.write('  '+n+'x  '+i+'=  '+n*i);
        i++;
    }
}