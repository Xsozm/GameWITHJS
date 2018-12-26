/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

let score1 = 0;
let score2 = 0 ;
let current =0 ;
let player =0 ;
let end =false;
document.querySelector('.dice').style.display='none';



document.querySelector('.btn-roll').addEventListener('click',function () {
    if (end)return;
    let dice = (Math.random() * 6+1);

    dice=Math.floor(dice);
    document.querySelector('.dice').src= 'dice-'+dice+'.png';
    document.querySelector('.dice').style.display='inline';


    current+=dice;
    if(dice==1) {
        current = 0;

    }

    document.querySelector('#current-'+player).textContent=current;
    if (dice==1){

        player^=1;
        document.querySelector('.player-'+player+'-panel').classList.add('active');
        document.querySelector('.player-'+(1-player)+'-panel').classList.remove('active');



    }
    });


document.querySelector('.btn-hold').addEventListener('click',function () {
    if (end)return;
    if(player==0)score1+=current;
    if(player==1)score2+=current;
    current=0;
    document.querySelector('#current-'+player).textContent=0;

    if(player==0){
        document.querySelector('#score-0').textContent=score1;
        if(score1>=100){
            document.getElementById('name-0').textContent='Winner';
            end=true;
        }

    }

    if(player==1){
        document.querySelector('#score-1').textContent=score2;
        if(score2>=100){
            document.getElementById('name-1').textContent='Winner';
            end=true;
        }


    }



    player^=1;
    document.querySelector('.player-'+player+'-panel').classList.add('active');
    document.querySelector('.player-'+(1-player)+'-panel').classList.remove('active');
    document.querySelector('.dice').style.display='none';

});

document.querySelector('.btn-new').addEventListener('click',function () {
    current=0;
    score2=0;
    score1=0;
    player=0;
    end=false;
    document.getElementById('name-1').textContent='PLAYER 2';
    document.getElementById('name-0').textContent='PLAYER 1';
    document.querySelector('#score-1').textContent='0';
    document.querySelector('#score-0').textContent='0';
    player=0;
    document.querySelector('.player-'+player+'-panel').classList.add('active');
    document.querySelector('.player-'+(1-player)+'-panel').classList.remove('active');
    document.querySelector('#current-'+player).textContent=0;
    document.querySelector('#current-'+(1-player)).textContent=0;
    document.querySelector('.dice').style.display='none';





})
