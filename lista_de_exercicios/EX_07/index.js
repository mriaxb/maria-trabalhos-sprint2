function acao() {
    // document.getElementById("demo").innerHTML = "Paragraph changed.";
    var n1 = window.prompt('informe o numero de maçãs compradas:')
    var v1
    if(n1 < 12){
        v1 = n1*1.30
    }else{
        v1 = n1*1
    }
    window.alert('o valor a ser pago é de: '+ v1)
}