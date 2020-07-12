
var altura = 0
var largura = 0

function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

function posicaoRandomica() {

	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()
	}


	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY
	console.log(posicaoX,posicaoY)



	//criar o elemento html

	var mosquito = document.createElement('img')

	mosquito.src = 'imagens/mosca.png'
	mosquito.className = 'mosquito1'
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	document.body.appendChild(mosquito)

	var mosquitoClass = Math.random()

	var classe1

	if(mosquitoClass < 1/3) {
		mosquito.className = 'mosquito1'
	} else if (mosquitoClass < 2/3) {
		mosquito.className = 'mosquito2'
	} else {
		mosquito.className = 'mosquito3'
	}

	classe1 = mosquito.className

	console.log(classe1)
	var mosquitoSide = Math.floor(Math.random() * 2)
	switch (mosquitoSide) {
		case 0:
			mosquito.className = classe1 + ' ladoA'
			break
		case 1:
			mosquito.className = classe1 + ' ladoB'
			break
	}
}