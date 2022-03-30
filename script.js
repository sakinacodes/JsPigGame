var scores, roundScore, activePlayer, dice;

scores = [0, 0];
roundScore = 0;
activePlayer = 1;

// dice = Math.floor(Math.random() * 6) + 1;
// document.querySelector('#current--' + activePlayer).textContent = dice;

var x = document.querySelector('#score--0').textContent;
console.log(x);

document.getElementById('current--0').textContent = '0';
document.getElementById('score--0').textContent = '0';
document.getElementById('current--1').textContent = '0';
document.getElementById('score--1').textContent = '0';

document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn--roll').addEventListener('click', function () {
  dice = Math.floor(Math.random() * 6) + 1;
  document.querySelector('.dice').style.display = 'block';
  document.querySelector('.dice').src = 'dice-' + dice + '.png';
  if (dice !== 1) {
    roundScore += dice;
    document.getElementById('current--' + activePlayer).textContent =
      roundScore;
  } else {
    roundScore = 0;
    document.getElementById('current--' + activePlayer).textContent =
      roundScore;
    activePlayer === 0 ? activePlayer === 1 : activePlayer === 0;

    document.querySelector('.player--0').classList.remove('active');
    document.querySelector('.player--1').classList.add('active');
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  document.getElementById('score--' + activePlayer).textContent = roundScore;
  activePlayer === 0 ? activePlayer === 1 : activePlayer === 0;
});
