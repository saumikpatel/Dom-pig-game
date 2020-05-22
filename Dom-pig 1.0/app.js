
var scores,activePlayer,roundScore,gameplaying;
init();


document.querySelector('.btn-roll').addEventListener('click',function(){
    if(gameplaying){

    
    var dice= Math.floor(Math.random()*6)+1;

    var diceDOM=document.querySelector('.dice');
    diceDOM.style.display='block';
    diceDOM.src='dice-'+dice+'.png';

    if(dice!==1){
        //add score
        roundScore += dice;
        document.querySelector('#current-'+ activePlayer).textContent=roundScore;

    }else{
       
        nextplayer();
    }

    }
});
document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gameplaying){
    scores[activePlayer]=scores[activePlayer]+roundScore;
    document.getElementById('score-'+activePlayer).textContent=scores[activePlayer];
    if(scores[activePlayer]>=50){
        document.querySelector('#name-'+activePlayer).textContent='winner!';
        document.querySelector('.dice').style.display='none'; 
       
        document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
        document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
        gameplaying=false;
   }else{
    nextplayer();
   }
    }
});

function nextplayer(){
    activePlayer===0?activePlayer=1:activePlayer=0;
    roundScore=0;

    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';
}

document.querySelector('.btn-new').addEventListener('click',init);

function init(){
     scores=[0,0];
     roundScore=0;
     activePlayer=0;
     gameplaying=true;
document.getElementById('score-0').textContent='0';
document.getElementById('current-0').textContent='0';
document.getElementById('score-1').textContent='0';
document.getElementById('current-1').textContent='0';
    
//document.querySelector('#current-'+ activePlayer).textContent=dice;
document.querySelector('.dice').style.display='none';
document.querySelector('#name-0').textContent='Player1';
document.querySelector('#name-1').textContent='Player2';
document.querySelector('.player-0-panel').classList.remove('winner');
document.querySelector('.player-1-panel').classList.remove('winner');
document.querySelector('.player-0-panel').classList.remove('active');
document.querySelector('.player-0-panel').classList.add('active');
document.querySelector('.player-1-panel').classList.remove('active');


    
}