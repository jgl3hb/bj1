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

//Function