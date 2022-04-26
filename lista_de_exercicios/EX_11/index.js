function acao() {
    var litros = window.prompt('litros vendidos:')
        var tipo = window.prompt('tipo vendido:')
        var gasolina = 3.30
        var alcool = 2.90
        var valor_G = litros*3.30
        var valor_A = litros*2.90
        var desc

        if(tipo == 'G' && litros <= 20){
            desc = (valor_G*4)/100 
            valor_G = litros*desc
            window.alert('valor: '+ valor_G + 'reais')
        }
        else if(tipo == 'G' && litros >= 20){
            desc = (valor_G*6)/100 
            valor_G = litros*desc
            window.alert('valor: '+ valor_G + 'reais')
        }
        else if(tipo == 'A' && litros <= 20){
            desc = (valor_G*3)/100 
            valor_A = litros*desc
            window.alert('valor: '+ valor_A + 'reais')
        }
        else if(tipo == 'A' && litros >= 20){
            desc = (valor_G*5)/100 
            valor_A = litros*desc
            window.alert('valor: '+ valor_A + 'reais')
        }
}