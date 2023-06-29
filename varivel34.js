//chamamos as tags que estão em html e guardamos em uma variavel
var h1 = document.queryselector('h1')
var p  = document.querySelector('p')

//pegamos o texto que tem dentro da tag do h1 e guardamos na variavel
var textodoH1 =  h1.innertext


//inserimos o texto do h1 na tag "p"
p.innerHTML.text = textodoH1
