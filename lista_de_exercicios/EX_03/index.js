function acao() {
    // document.getElementById("demo").innerHTML = "Paragraph changed.";
    var nota_1 = window.prompt('informe a primeira nota:')
    var nota_2 = window.prompt('informe a segunda nota:')
    var nota_3 = window.prompt('informe a terceira nota:')
    var media = (nota_1*2 + nota_2*3 + nota_3*5)/10
    window.alert('a media é de '+ media)
}