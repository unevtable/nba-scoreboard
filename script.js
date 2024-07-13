const homeScoreEl = document.getElementById('home-score');

let homeScore = homeScoreEl.innerText;

function plusHomeOne() {
  homeScore++;
  homeScoreEl.innerText = homeScore;
}

function plusHomeTwo() {
  homeScore++;
  homeScore++;
  homeScoreEl.innerText = homeScore;
}

function plusHomeThree() {
  homeScore++;
  homeScore++;
  homeScore++;
  homeScoreEl.innerText = homeScore;
}

const guestScoreEl = document.getElementById('guest-score');

let guestScore = guestScoreEl.innerText;

function plusGuestOne() {
  guestScore++;
  guestScoreEl.innerText = guestScore;
}

function plusGuestTwo() {
  guestScore++;
  guestScore++;
  guestScoreEl.innerText = guestScore;
}

function plusGuestThree() {
  guestScore++;
  guestScore++;
  guestScore++;
  guestScoreEl.innerText = guestScore;
}

function newGame() {
  homeScore = 0;
  guestScore = 0;
  guestScoreEl.innerText = guestScore;
  homeScoreEl.innerText = homeScore;
}
