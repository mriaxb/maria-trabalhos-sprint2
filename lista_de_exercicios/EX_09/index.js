function acao() {
    // document.getElementById("demo").innerHTML = "Paragraph changed.";
    var time1 = window.prompt('insina o nome do 1º time:')//recebe o nome do 1º time
    var time1_gols = window.prompt('insira a quantidade de gols feitos:')//recebe o n d gols do 1° time
    var time2 = window.prompt('insira o nome do 2° time:')// recebe o nome do 2º
    var time2_gols = window.prompt('insira a quantidade de gols feitos:')// recebe o n d gols do 2º time
    if(time1_gols > time2_gols){
        window.alert('o time '+ time1 + ' é o vencedor')
    }else if(time1_gols < time2_gols){
        window.alert('o time '+ time2 + ' é o vencedor')
    }else{
        window.alert('É EMPATE')
    }
}