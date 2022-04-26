function acao() {
    var nome = window.prompt('qual seu nome:')
    var nasc = window.prompt('ano de nascimento:')
    var ano = window.prompt('ano de ingresso:')

    var idade = 2022-nasc
    window.alert('sua idade é de ' + idade)
    var ano_trab = 2022-ano
    window.alert('seus anos de trabalho são: '+ ano_trab)
    if(idade >= 65){
        window.alert('Requerer Aposentadoria')
    }
    else if( ano_trab >= 30){
        window.alert('Requerer Aposentadoria')
    }
    else if(idade >= 60 && ano_trab >= 25){
        window.alert('Requerer Aposentadoria')
    }
    else{
        window.alert('Não Requerer Aposentadoria')
    }
}