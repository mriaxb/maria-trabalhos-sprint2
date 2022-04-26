function acao() {
    let i = 0
    var cont = 0
    var n = [10]

    for(i=0; i <= 10 ; i++){
        n[i] = window.prompt('insira 10 valores:')
    }
    for(i = 0; i <=10; i++){
        if(n[i] < 0){
            cont++
        }
    }
    document.write('quantidade de numeros negativos: '+cont)
}