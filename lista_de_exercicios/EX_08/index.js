function acao() {
    // document.getElementById("demo").innerHTML = "Paragraph changed.";
    var v1 = window.prompt('insira o primeiro valor')
    var v2 = window.prompt('insira o segundo valor')
    if(v1 > v2){
        window.alert('o valor '+ v1 +' é maior que o valor '+ v2)
    }else{
        window.alert('o valor ' + v2 + 'é maior q o valor '+ v1)
    }
}