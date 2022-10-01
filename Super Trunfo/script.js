var card1 = {
  nome: 'Chuck Norris',
  imagem:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsvIABA3qYPBHYCONKskD28BRJx5WoYNJ6eGGoJ5ZU2lJ_FF1gXS7RcB8HXQS-pC4HcYk&usqp=CAU',
  atributos: {
    ataque: 1000,
    defesa: 1000,
    agilidade: 900,
    resiliência: 500
  }
}

var card2 = {
  nome: 'Steven Seagal',
  imagem:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSyb1ru0QanYjpNgcru4AYoXCZvIbLzJk06LKrtDWPC7F63oX7PPRI9ol8pt8_otORu7k&usqp=CAU',
  atributos: {
    ataque: 700,
    defesa: 500,
    agilidade: 700,
    resiliência: 600
  }
}

var card3 = {
  nome: 'Rock Balboa',
  imagem:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTT8XI8XGlxt1kAP5tYmpPGVFHPaqcnLtIb_w&usqp=CAU',
  atributos: {
    ataque: 800,
    defesa: 400,
    agilidade: 800,
    resiliência: 800
  }
}

var card4 = {
  nome: 'Bruce Lee',
  imagem:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIdl5VmOttUR4HBt-E4uLqotvJHXtjXPExpg&usqp=CAU',
  atributos: {
    ataque: 900,
    defesa: 800,
    agilidade: 900,
    resiliência: 800
  }
}

var card5 = {
  nome: 'Riddick',
  imagem:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzkvpmLdO4oTI_nOUa_IQyLOxAvnkeCR0LGWA67E_gmkRN75uwkWF6qFANur2w8cc_WGA&usqp=CAU',
  atributos: {
    ataque: 900,
    defesa: 800,
    agilidade: 900,
    resiliência: 900
  }
}

var card6 = {
  nome: 'Exterminador do futuro',
  imagem:
    'http://3.bp.blogspot.com/-mAd1HmEtWgY/Va-nMCzGXQI/AAAAAAAABg4/3SQmQYQH2Hg/s1600/terminator%2Bgenisys.jpg',
  atributos: {
    ataque: 950,
    defesa: 850,
    agilidade: 500,
    resiliência: 600
  }
}

var card7 = {
  nome: 'Hitman',
  imagem:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6bmqDWna88RUemSG5_x8I0bPb465nhzAr5w&usqp=CAU',
  atributos: {
    ataque: 800,
    defesa: 800,
    agilidade: 800,
    resiliência: 900
  }
}

var cardPc
var cardPlayer
var cards = [card1, card2, card3, card4, card5, card6, card7]
var scoreBoard = [0, 0]
showScoreBoard()
// 0          1           2

function rafleCard() {
  resetCard("card-player")
  resetCard("card-pc")
  result.innerHTML=""


  var numberCardPc = parseInt(Math.random() * 7)
  cardPc = cards[numberCardPc]

  var numberCardPlayer = parseInt(Math.random() * 7)
  while (numberCardPlayer == numberCardPc) {
    numberCardPlayer = parseInt(Math.random() * 7)
  }
  cardPlayer = cards[numberCardPlayer]
  console.log(cardPlayer)

  document.getElementById('btnRafle').disabled = true
  document.getElementById('btnPlay').disabled = false
  showPlayerCard()
}

function getSelectAttribute() {
  var itemAttribute = document.getElementsByName('attribute')
  for (var i = 0; i < itemAttribute.length; i++) {
    if (itemAttribute[i].checked) {
      return itemAttribute[i].value
    }
  }
}

function play() {
  console.log('chamou')
  var selectedAttribute = getSelectAttribute()
  var divResult = document.getElementById('result')

  while (isNaN(selectedAttribute)) {
  if (
    cardPlayer.atributos[selectedAttribute] >
    cardPc.atributos[selectedAttribute]
  ) {
    scoreBoard[0]++
    htmlResult = "<p class='result-final'>Você Venceu 🥊</p>"
    break
  } else if (
    cardPlayer.atributos[selectedAttribute] <
    cardPc.atributos[selectedAttribute]
  ) {
    scoreBoard[1]++
    htmlResult = "<p class='result-final'>Você Perdeu 💀</p>"
    break
  } else if (
    isNaN(cardPlayer.atributos[selectedAttribute]) ||
    isNaN(cardPc.atributos[selectedAttribute])
  ) {
    htmlResult = "<p class='result-final'> Selecione um atributo! 🎯</p>"
    divResult.innerHTML = htmlResult
    return
  } else {
    htmlResult = "<p class='result-final'> Você Empatou 🧟‍♂️</p>"
    break
  }
}
  divResult.innerHTML = htmlResult

  document.getElementById('btnPlay').disabled = true
  showPcCard()

  document.getElementById("btnRafle").disabled = false
   showPcCard()
   showScoreBoard()
}

function showPlayerCard() {
  var divCardPlayer = document.getElementById('card-player')
  divCardPlayer.style.backgroundImage = `url(${cardPlayer.imagem})`
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var frame =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
  var tagHTML = "<div id='options' class='card-status'>"

  var optionsText = ''
  for (var attribute in cardPlayer.atributos) {
    optionsText +=
      "<input type='radio' name='attribute' value='" +
      attribute +
      "'>" +
      attribute +
      ' ' +
      cardPlayer.atributos[attribute] +
      '<br>'
  }
  var nome = `<p class="card-subtitle">${cardPlayer.nome}</p>`

  divCardPlayer.innerHTML = frame + nome + tagHTML + optionsText + '</div>'
}

function showPcCard() {
  var divCardPc = document.getElementById('card-pc')
  divCardPc.style.backgroundImage = `url(${cardPc.imagem})`
  // divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
  var frame =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
  var tagHtml = "<div id='options' class='card-status'>"

  var optionsText = ''
  for (var attribute in cardPc.atributos) {
    optionsText +=
      "<p id='pc' type='text' name='attribute' value='" +
      attribute +
      "'>" +
      attribute +
      ' ' +
      cardPc.atributos[attribute] +
      '</p>'
  }
  var nome = `<p class="card-subtitle">${cardPc.nome}</p>`

  divCardPc.innerHTML = frame + nome + tagHtml + optionsText + '</div>'
}

function showScoreBoard() {
  var scorePlayer = document.getElementById("sPlayer")
  var scorePc = document.getElementById("sPc")
  scorePlayer.innerHTML = `Player:${scoreBoard[0]} 🤓`
  scorePc.innerHTML = `Computador:${scoreBoard[1]} 🤖 `
}

function resetCard(id) {
  var idCard = document.getElementById(id)
  var idCardText =  '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">'
  idCard.innerHTML = idCardText
}
