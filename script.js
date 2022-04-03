var scores, roundScore, activePlayer, gamePlaying;
Innit();

// dice = Math.floor(Math.random() * 6) + 1;
// document.querySelector('#current--' + activePlayer).textContent = dice;




document.querySelector('.dice').style.display = 'none';

document.querySelector('.btn--roll').addEventListener('click', function () {
  if(gamePlaying) {
    
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
   
    Nextplayer();
  }
}});

document.querySelector('.btn--hold').addEventListener('click', function () {
 if(gamePlaying){
  scores[activePlayer] += roundScore;
  document.getElementById('score--' + activePlayer).textContent = scores[activePlayer];

  if(scores[activePlayer] >= 50){
document.querySelector('#name--' + activePlayer).textContent =  "Winner!";
document.querySelector('.player--'+ activePlayer).classList.add('player--winner');
document.querySelector('.player--' + activePlayer).classList.remove('player--active');
gamePlaying = false;



  }
else {
  Nextplayer();
}
 }
  
  
  
});

function Nextplayer(){
  
  roundScore = 0;
    if(activePlayer === 0) {
      activePlayer = 1;
    }
    else { activePlayer = 0    }
    
    document.getElementById('current--0').textContent = 0;
    document.getElementById('current--1').textContent = 0;
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player--0').classList.toggle('player--active');
    document.querySelector('.player--1').classList.toggle('player--active');
 
}

document.querySelector('.btn--new').addEventListener('click', function(){

  
document.querySelector('.player--1').classList.remove('player--winner');

document.querySelector('.player--0').classList.remove('player--winner');
document.querySelector('.player--1').classList.remove('player--active');
document.querySelector('.player--0').classList.add('player--active');
Innit();

  document.querySelector('#name--0').textContent =  "player 1" ;
 
  document.querySelector('#name--1').textContent =  "player 2" ;
 
});


function Innit(){
  gamePlaying = true;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;
document.querySelector('.dice').style.display = 'none';

document.getElementById('current--0').textContent = 0;
document.getElementById('score--0').textContent = 0;
scores[1] = 0;
scores[0] = 0;
document.getElementById('current--1').textContent =0;
document.getElementById('score--1').textContent = 0;


}