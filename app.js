//Variables
let deck = []
let playerHand = []
let dealerHand = []
let burnpile = []
let cardToRemove, cardPicked

//Constants
const statusEL = document.getElementById('status')
const bet1Btn = document.getElementById('bet-1')
const bet5Btn = document.getElementById('bet-5')
const bet25Btn = document.getElementById('bet-25')
const bet100Btn = document.getElementById('bet-100')
const dealBtn = document.getElementById('deal')
const resetBtn = document.getElementById('reset')
const hitBtn = document.getElementById('hit')
const standBtn = document.getElementById('stand')
const playerHandEl = document.getElementById('deal')
const bank = document.getElementById('playerBank')
const playerTotalEl = document.getElementById('playerhandvalue')
const dealerTotalEl = document.getElementById('dealerhandvalue')
const playerDeckEl = document.getElementById('player-cards')
const dealerDeckEl = document.getElementById('dealer-cards')

//Event Handlers
bet1Btn.addEventListener('click', () => {
	bet.innerText = "Bet $1"
  bank.innerText = `$${parseInt(bank.textContent) - parseInt(bet1Btn.value)}`
	statusEL.innerHTML = "Player Bet is $1, Press Deal"
	bet1Btn.remove(),bet5Btn.remove(),bet25Btn.remove(),bet100Btn.remove()
}) 

bet5Btn.addEventListener('click', () => {
	bet.innerText = "Bet $5"
	bank.innerText = `$${parseInt(bank.textContent) - parseInt(bet5Btn.value)}`
	statusEL.innerHTML = "Player Bet is $5, Press Deal"
	bet1Btn.remove(),bet5Btn.remove(),bet25Btn.remove(),bet100Btn.remove()
}) 

bet25Btn.addEventListener('click', () => {
	bet.innerText = "Bet $25"
  bank.innerText = `$${parseInt(bank.textContent) - parseInt(bet25Btn.value)}`
	statusEL.innerHTML = "Player Bet is $25, Press Deal"
	bet1Btn.remove(),bet5Btn.remove(),bet25Btn.remove(),bet100Btn.remove()
}) 

bet100Btn.addEventListener('click', () => {
	bet.innerText = "Bet $100"
	bank.innerText = `$${parseInt(bank.textContent) - parseInt(bet100Btn.value)}`
	statusEL.innerHTML = "Player Bet is $100, Press Deal"
	bet1Btn.remove(),bet5Btn.remove(),bet25Btn.remove(),bet100Btn.remove()
}) 

dealBtn.addEventListener('click', () => {
	dealBtn.remove();
}) 

document.getElementById('hit').addEventListener('click', hit)
document.getElementById('stand').addEventListener('click', stand)
document.getElementById('deal').addEventListener('click', initialDeal)

//Functions
init()
//Initializes Deck
function init() {
  deck = ["dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02","dA","dQ","dK","dJ","d10","d09","d08","d07","d06","d05","d04","d03","d02","hA","hQ","hK","hJ","h10","h09","h08","h07","h06","h05","h04","h03","h02","cA","cQ","cK","cJ","c10","c09","c08","c07","c06","c05","c04","c03","c02","sA","sQ","sK","sJ","s10","s09","s08","s07","s06","s05","s04","s03","s02"]
}

// render card class names to divs
function renderCards() {
	dealerDeckEl.innerHTML = ''
	playerDeckEl.innerHTML = ''
	playerHand.forEach(card => {
		let newCardDiv = document.createElement('div')
		newCardDiv.className = `card large ${card}`
		playerDeckEl.appendChild(newCardDiv)
	})
	dealerHand.forEach((card, idx) => {
		if (idx > 0) {
			let newCardDiv = document.createElement('div')
			newCardDiv.className = `card large back-red`
		dealerDeckEl.appendChild(newCardDiv)			
		} else {			
			let newCardDiv = document.createElement('div')
			newCardDiv.className = `card large ${card}`
			dealerDeckEl.appendChild(newCardDiv)
		}
	})
}

function displayDealerCards(){
	dealerDeckEl.innerHTML = ''
	dealerHand.forEach((card, idx) => {
		let newCardDiv = document.createElement('div')
		newCardDiv.className = `card large ${card}`
		dealerDeckEl.appendChild(newCardDiv)
	})
}

//Sort function
deck.sort(() => Math.random() - .5)

function handleClick() {
	if (deck.length > 0) {
    let randIdx = Math.floor(Math.random() * deck.length)
    let cardPicked = deck[randIdx]
    playerHand.push(cardPicked)
		render(cardPicked)
	}
}	

function selectCard() {
	if (deck.length > 0) {
			let randIdx = Math.floor(Math.random() * deck.length)
			let cardPicked = deck[randIdx]
			deck.splice(randIdx, 1)			
			return cardPicked
		} else {
			return 
		}
	}
	
function dealToPlayer() {
	let playerCard = selectCard()
	playerHand.push(playerCard)
}
	
function dealToDealer(){
	let dealerCard = selectCard()
	dealerHand.push(dealerCard)
}