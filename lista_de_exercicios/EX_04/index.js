function acao() {
    // document.getElementById("demo").innerHTML = "Paragraph changed.";
    var custo_fabric = window.prompt('custo de fabrica:')
    var valor_distri = (custo_fabric*28)/100
    var valor_impost = (custo_fabric*45)/100
    var custo_final = (custo_fabric)+(valor_distri)+(valor_impost)
    window.alert('o custo final é de '+ custo_final)
}