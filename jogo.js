
var altura = 0
var largura = 0
var vidas = 1

function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(altura, largura)
}

ajustaTamanhoPalcoJogo()

function posicaoRandomica() {

	remover()
	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90
	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY
	console.log(posicaoX,posicaoY)



	//criar o elemento html

	var mosquito = document.createElement('img')

	mosquito.src = 'imagens/mosca.png'
	mosquito.className = mosquitoClasse() + ' ' + mosquitoSidee()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function() {
		this.remove()
	}
	document.body.appendChild(mosquito)

	console.log(mosquito.className)

	if (vidas > 3) {
		gameOver()
	}
	
}

function remover() {
	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()

		document.getElementById('v' + vidas).src = 'imagens/coracao_vazio.png'
		vidas++
	}
}

function gameOver() {
		window.location.assign('fim_de_jogo.html')
}

function clicked() {
	remover()
}

function mosquitoClasse() {
	var mosquitoClass = Math.floor(Math.random() * 3)

	switch (mosquitoClass) {
		case 0:
			return 'mosquito1'
		case 1:
			return 'mosquito2'
		case 2:
			return 'mosquito3'
	}

}

function mosquitoSidee() {
	var mosquitoSide = Math.floor(Math.random() * 2)
	switch (mosquitoSide) {
		case 0:
			return ' ladoA'
		case 1:
			return ' ladoB'
	}
}

