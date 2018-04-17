// The Duck Tales guys are going to the casino and 
// they want to simulate 20 games of black jack.  Each
// players starts with 200 dollars.  Each game is $15.  If
// they lose all their money they can no longer play.  Simulate
// the outcome.  At the end output the player and how much
// they each won / lost.

// RULES
// Number of Decks between 1-8
// Dealer Hits on 16 and Below
// 

//var shuffleDeck = require('./deck.js');
//var Cards = require('./cards.js');

var player1 = ['Heuy', 200, true, 0];
var player2 = ['Dewey', 200, true, 0];
var player3 = ['Lewey', 200, true, 0];
var player4 = ['Scrooge', 200, true, 0];
var dealer = ['The House', 0, true, 0];

var players = [player1, player2, player3, player4, dealer];

const _numberOfDecks = 1; // 1-8 max  Math.floor(Math.random()*8)
const _rounds = 20;
const numerOfCards = _numberOfDecks*52
var suits = ['hearts', 'diamonds','spades','clubs'];
var card = ["ace",'2','3','4','5','6','7','8','9','10',"jack","queen","king"];
var deck = [];
//module.exports._numberOfDecks = _numberOfDecks;

//initialize and shuffle deck
function shuffleDeck(array)
{
    for(let j=1; j<=_numberOfDecks; j++)
    {
        for(let i=0; i<=suits.length-1; i++)
        {
            for(let n=0; n<=card.length-1; n++)
            {
                if(card[n]==="2" || card[n]==="3" || card[n]==="4" || card[n]==="5" || card[n]==="6" || card[n]==="7" || card[n]==="8" || card[n]==="9")
                {
                    array.push({suit: suits[i], cardValue: card[n], numValue: n+1});
                }
                else if(card[n]==="jack" || card[n]==="queen" || card[n]==="king" || card[n]==="10")
                {
                    array.push({suit: suits[i], cardValue: card[n], numValue: 10});
                }
                else
                {
                    array.push({suit: suits[i], cardValue: card[n], numValue: 11});
                }
            }
        }
    }
    function shuffleCard(array)
    {
        let i = 0, j = 0, temp = null;

        for (i = array.length - 1; i > 0; i--)
        {
            j = Math.floor(Math.random() * (array.length));
            temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
    shuffleCard(array);
    return array;   
} 

//change aces in player hand from 11 to 1
function changeAces(array)
{
    var pLength = array.length;
    for (let i=4; i < pLength; i++)
    {
        if(array[i].suits === "ace")
        {
            array[i].numValue = 1;
        }
    }
    return array;
}


//inital deal
function initalDeal(array)
{
    if(array[2]===true)
    {
        array.push(deck.pop()); array.push(deck.pop()); array[1] = array[1]-15;
        array[3] = array[4].numValue + array[5].numValue;        
    }
    return array;
}    


//player turn
function playerTurn(array)
{
    if(array[2]===true)
    {
        let arrNum = 6;
        while(array[3] <= 16)
        {
            array.push(deck.pop());
            if(array[3]>21)
            {
                changeAces(array);
            }
            array[3] = array[3] + array[arrNum].numValue;
            arrNum++;
        }
    }
    return array;
}


//determine outcomes
function determineOutcome(array)
{
    if(array[2]===true)
    {
        if(array[3] <= 21 && dealer[3] < array[3])
        {
            array[1] = array[1]+30;
            dealer[1] = dealer[1]-15;
        }
        else
        {
            dealer[1] = dealer[1]+15;
            if(array[1] < 15)
            {
                array[2] = false;
            }
        }
    }
}


//clear players hands
function clearHand(array)
{
    var arrLength = array.length;
    for(let i=4; i < arrLength; i++)
    {
        array.pop();
    }
}



//shuffleDeck(deck);
//console.log(deck);

for(let i=0; i < _rounds; i++)
{
    shuffleDeck(deck);

    //deal the cards
    initalDeal(player1);
    initalDeal(player2);
    initalDeal(player3);
    initalDeal(player4);
    initalDeal(dealer);

    //each player takes their turn
    playerTurn(player1);
    playerTurn(player2);
    playerTurn(player3);
    playerTurn(player4);
    playerTurn(dealer);
   
    //dtermine the outcome of the hand
    determineOutcome(player1);
    determineOutcome(player2);
    determineOutcome(player3);
    determineOutcome(player4);


    //take back the cards
    clearHand(player1);
    clearHand(player2);
    clearHand(player3);
    clearHand(player4);
    clearHand(dealer);

    //clear deck
    var deckLength = deck.length;
    for(let i=0; i < deckLength; i++)
    {
        deck.pop();
    }
}     

var p1Money=player1[1]-200, p2Money=player2[1]-200, p3Money=player3[1]-200, p4Money=player4[1]-200;
console.log(player1[0] + " has made $" + p1Money +".");
console.log(player2[0] + " has made $" + p2Money +".");
console.log(player3[0] + " has made $" + p3Money +".");
console.log(player4[0] + " has made $" + p4Money +".");
console.log(dealer[0] + " has made $" + dealer[1] +".");

console.log(player1);
console.log(player2);
console.log(player3);
console.log(player4);
console.log(dealer);   


console.log(player1[3]);
console.log(player2[3]);
console.log(player3[3]);
console.log(player4[3]);
console.log(dealer[3]);

// console.log(deck);