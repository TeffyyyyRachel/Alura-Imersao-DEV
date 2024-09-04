var imagem = document.querySelector('#imagem-capa')
var titulo = document.querySelector('#titulo')
var descricao = document.querySelector('#descricao')
var escritor = document.querySelector('#escritor')
var desenhista = document.querySelector('#desenhista')
var link = document.querySelector('#kimetsu-link')

var indice = 1

imagem.setAttribute("src",mangas[indice].capa)
imagem.setAttribute("alt",mangas[indice].alt)
titulo.innerHTML = mangas[indice].titulo
descricao.innerHTML = mangas[indice].descricao
escritor.innerHTML += mangas[indice].escritor
desenhista.innerHTML += mangas[indice].desenhista
link.setAttribute("href",mangas[indice].link)

//console.log(mangas[0].capa)