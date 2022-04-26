function acao() {
    // document.getElementById("demo").innerHTML = "Paragraph changed.";
    var salario = window.prompt('Informe o salário mensal atual:')//janela onde se pode inserir alguma coisa
    window.alert('seu salario é d '+ salario + 'reais')
    var per_reajust = window.prompt('Informe o percentual de reajuste salarial')
    var reajuste = (per_reajust*salario)/100
    var novo_salario = salario-reajuste
    window.alert('o novo salario é: '+ novo_salario)
}