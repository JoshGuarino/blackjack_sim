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

var player1 = {name: 'huey', money: 200, active:true, handCount: 0, hand: []}
var player2 = {name: 'Dewey', money: 200, active: true, handCount: 0, hand: []}
var player3 = {name: 'Lewey', money: 200, active: true, handCount: 0, hand: []}
var player4 = {name: 'Scrooge', money: 200, active: true, handCount: 0, hand: []}
var dealer = {name: 'The House', money: 0, active: true, handCount: 0, hand: []}

//var players = [player1, player2, player3, player4, dealer];

const _numberOfDecks = 1; // 1-8 max  Math.floor(Math.random()*8)
const _rounds = 20;
var suits = ['hearts', 'diamonds','spades','clubs'];
var card = ["ace",'2','3','4','5','6','7','8','9','10',"jack","queen","king"];
var deck = [];


//initialize and shuffle deck
function shuffleDeck(Array)
{
    for(let j=1; j<=_numberOfDecks; j++)
    {
        for(let i=0; i<=suits.length-1; i++)
        {
            for(let n=0; n<=card.length-1; n++)
            {
                if(card[n]==="2" || card[n]==="3" || card[n]==="4" || card[n]==="5" || card[n]==="6" || card[n]==="7" || card[n]==="8" || card[n]==="9")
                {
                    Array.push({suit: suits[i], cardValue: card[n], numValue: n+1});
                }
                else if(card[n]==="jack" || card[n]==="queen" || card[n]==="king" || card[n]==="10")
                {
                    Array.push({suit: suits[i], cardValue: card[n], numValue: 10});
                }
                else
                {
                    Array.push({suit: suits[i], cardValue: card[n], numValue: 11});
                }
            }
        }
    }
    function shuffleCard(Array)
    {
        let i = 0, j = 0, temp = null;

        for (i = Array.length - 1; i > 0; i--)
        {
            j = Math.floor(Math.random() * (Array.length));
            temp = Array[i];
            Array[i] = Array[j];
            Array[j] = temp;
        }
    }
    shuffleCard(Array);
    return Array;   
} 


//inital deal
function initalDeal(Object)
{
    if(Object.active===true)
    {
        Object.hand.push(deck.pop());  Object.hand.push(deck.pop());     
        Object.handCount = Object.hand[0].numValue + Object.hand[1].numValue;      
    }
    return Object;
}    

//players place there bets
function placeBets(Object)
{
    if(Object.active===true)
    {
        Object.money = Object.money-15;
        dealer.money = dealer.money+15;
    }
    return Object;
}
   

//player turn
function playerTurn(Object)
{
    if(Object.active===true)
    {
        let countNum = 2;
        while(Object.handCount <= 16)
        {
            Object.hand.push(deck.pop());
            Object.handCount = Object.handCount + Object.hand[countNum].numValue;
            if(Object.handCount > 21)
            {
                let handCount = Object.hand.length;
                for(let i=0; i < handCount; i++)
                {
                    if(Object.hand[i].cardValue==="ace")
                    {
                        Object.hand[i].numValue = 1;
                    }
                }
            }
            countNum++;
        }
    }
    return Object;
}

// determine outcomes
function determineOutcome(Object)
{
    if(Object.active===true)
    {
        if(Object.handCount <= 21 && dealer.handCount < Object.handCount)
        {
            Object.money = Object.money+30;
            dealer.money = dealer.money-30;
        }
        else
        {
            if(Object.money < 15)
            {
                Object.active = false;
            }
        }
    }
    return Object;
}


//clear player hands
function clearHand(Object)
{
    Object.handCount = 0;
    let handLength = Object.hand.length;
    for(let i=0; i < handLength; i++)
    {
        Object.hand.pop();
    }
    return Object;
}

//clear deck
function clearDeck(Array)
{
    var deckLength = Array.length;
    for(let i=0; i < deckLength; i++)
    {
        Array.pop();
    }
    return Array;
}



//shuffleDeck(deck);
//console.log(deck);


//main game structure
for(let n=0; n < _rounds; n++)
{
     shuffleDeck(deck);

    //place bets
    placeBets(player1);
    placeBets(player2);
    placeBets(player3);
    placeBets(player4);

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
    clearDeck(deck);
}


//output results
var p1Money=player1.money-200, p2Money=player2.money-200, p3Money=player3.money-200, p4Money=player4.money-200;
console.log(player1.name + " has made $" + p1Money +".");
console.log(player2.name + " has made $" + p2Money +".");
console.log(player3.name + " has made $" + p3Money +".");
console.log(player4.name + " has made $" + p4Money +".");
console.log(dealer.name + " has made $" + dealer.money +".");

// console.log(player1);
// console.log(player2);
// console.log(player3);
// console.log(player4);
// console.log(dealer);   

//console.log(deck);