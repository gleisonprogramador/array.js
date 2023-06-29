var div = document.queryselector('#area')
div.style.height = 100px 

function clicar() {
     div.innerHTML = 'clicou'
     div.style.background = 'blue'
}

function entrar () {
    div.innerHTML = 'entrou'
    div.style.background  ='green'
}
function sair () {
    div.innerHTML = 'saiu'
    div.style.background = 'pink'
}