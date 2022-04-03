var scores, roundScore, activePlayer, dice, score;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;
score = 0;

// dice = Math.floor(Math.random() * 6) + 1;
// document.querySelector('#current--' + activePlayer).textContent = dice;



document.getElementById('current--0').textContent = 0;
document.getElementById('score--0').textContent = 0;
document.getElementById('current--1').textContent =0;
document.getElementById('score--1').textContent = 0;

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
    document.getElementById('current--0').textContent =
      0;
      document.getElementById('current--1').textContent = 0;
      scores[activePlayer] = 0;
    document.getElementById('score--' + activePlayer).textContent = 0;
   
    if(activePlayer === 0) {
      activePlayer = 1;
      document.querySelector('.player--0').classList.remove('player--active');
      document.querySelector('.player--1').classList.add('player--active');
      
    }
    else {
  activePlayer = 0
  document.querySelector('.player--1').classList.remove('player--active');
  document.querySelector('.player--0').classList.add('player--active');
    }
    document.querySelector('.dice').style.display = 'none';
   
  }
});

document.querySelector('.btn--hold').addEventListener('click', function () {
  scores[activePlayer] += roundScore;
  document.getElementById('score--' + activePlayer).textContent = scores[activePlayer];
  if(scores[activePlayer] >= 100){

    
  }
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0
  roundScore = 0;
  if(activePlayer === 0) {
    activePlayer = 1;
    document.querySelector('.player--0').classList.remove('player--active');
    document.querySelector('.player--1').classList.add('player--active');
  
  }
  else {
activePlayer = 0
document.querySelector('.player--1').classList.remove('player--active');
    document.querySelector('.player--0').classList.add('player--active');
  }
  
});
function Nextplayer(){
  
}