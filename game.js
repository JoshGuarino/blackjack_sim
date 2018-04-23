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



var players = [player1 = {name: 'huey', money: 200, active:true, handCount: 0, hand: []},
               player2 = {name: 'Dewey', money: 200, active: true, handCount: 0, hand: []},
               player3 = {name: 'Lewey', money: 200, active: true, handCount: 0, hand: []},
               player4 = {name: 'Scrooge', money: 200, active: true, handCount: 0, hand: []}];

var dealer = {name: 'The House', money: 0, active: true, handCount: 0, hand: []};
const _numberOfDecks = Math.floor(Math.random()*8)+1; // 1-8 max  
const _rounds = 20;
var suits = ['hearts', 'diamonds','spades','clubs'];
var card = ["ace",'2','3','4','5','6','7','8','9','10',"jack","queen","king"];
var deck = [];


//initialize and shuffle deck
function shuffleDeck(decks)
{
    for(let j=1; j<=_numberOfDecks; j++)
    {
        for(let i=0; i<=suits.length-1; i++)
        {
            for(let n=0; n<=card.length-1; n++)
            {
                if(card[n]==="2" || card[n]==="3" || card[n]==="4" || card[n]==="5" || card[n]==="6" || card[n]==="7" || card[n]==="8" || card[n]==="9")
                {
                    decks.push({suit: suits[i], cardValue: card[n], numValue: n+1});
                }
                else if(card[n]==="jack" || card[n]==="queen" || card[n]==="king" || card[n]==="10")
                {
                    decks.push({suit: suits[i], cardValue: card[n], numValue: 10});
                }
                else
                {
                    decks.push({suit: suits[i], cardValue: card[n], numValue: 11});
                }
            }
        }
    }
    let arrLength = decks.length;
    for(let i=0; i<arrLength; i++)
    {
        if(decks[i].suit === 'hearts' || decks.suit === 'diamonds')
        {
            decks[i].color = "red";
        }
        else
        {
            decks[i].color = "black";
        }
    }
    function shuffleCard(decks)
    {
        let i = 0, j = 0, temp = null;

        for (i = decks.length - 1; i > 0; i--)
        {
            j = Math.floor(Math.random() * (decks.length));
            temp = decks[i];
            decks[i] = decks[j];
            decks[j] = temp;
        }
    }
    shuffleCard(decks);
    return decks;   
} 


//inital deal
function initalDeal(player)
{
    if(player.active===true)
    {
        player.hand.push(deck.pop());  player.hand.push(deck.pop());     
        player.handCount = player.hand[0].numValue + player.hand[1].numValue;      
    }
    return player;
}    

//players place there bets
function placeBets(player)
{
    if(player.active===true)
    {
        player.money = player.money-15;
        dealer.money = dealer.money+15;
    }
    return player;
}
   

//player turn
function playerTurn(player)
{
    if(player.active===true)
    {
        while(player.handCount <= 16)
        {
            let countNum = 2;
            player.hand.push(deck.pop());
            player.handCount = player.handCount + player.hand[countNum].numValue;
            if(player.handCount > 21)
            {
                let handCount = player.hand.length;
                for(let i=0; i < handCount; i++)
                {
                    if(player.hand[i].cardValue==="ace")
                    {
                        player.hand[i].numValue = 1;
                    }
                }
            }
            countNum++;
        }
    }
    return player;
}

//dealer turn
function dealerTurn(dealer)
{
    if(dealer.active===true)
    {
        let countNum = 2;
        while(dealer.handCount <= 16)
        {
            dealer.hand.push(deck.pop());
            dealer.handCount = dealer.handCount + dealer.hand[countNum].numValue;
            if(dealer.handCount > 21)
            {
                let handCount = dealer.hand.length;
                for(let i=0; i < handCount; i++)
                {
                    if(dealer.hand[i].cardValue==="ace")
                    {
                        dealer.hand[i].numValue = 1;
                    }
                }
            }
            countNum++;
        }
    }
    return dealer;
}


// determine outcomes
function determineOutcome(player)
{
    if(player.active===true)
    {
        if(player.handCount <= 21 && dealer.handCount < player.handCount)
        {
            player.money = player.money+30;
            dealer.money = dealer.money-30;
        }
        else
        {
            if(player.money < 15)
            {
                player.active = false;
            }
        }
    }
    return player;
}


//clear player hands
function clearHand(player)
{
    player.handCount = 0;
    let handLength = player.hand.length;
    for(let i=0; i < handLength; i++)
    {
        player.hand.pop();
    }
    return player;
}

//clear deck
function clearDeck(decks)
{
    var deckLength = decks.length;
    for(let i=0; i < deckLength; i++)
    {
        decks.pop();
    }
    return decks;
}



// shuffleDeck(deck);
// console.log(deck);


//main game structure
for(let n=0; n < _rounds; n++)
{
     shuffleDeck(deck);
    var playersLength = players.length;
    //place bets
    for(let i=0; i<playersLength; i++)
    {
        placeBets(players[i]);
    }
    //players.forEach( Object => { placeBets(Object) });
 

    // //deal the cards
    for(let i=0; i<playersLength; i++)
    {
        initalDeal(players[i]);
    }
    initalDeal(dealer);

    //each player takes their turn
    for(let i=0; i<playersLength; i++)
    {
        playerTurn(players[i]);
    }
    dealerTurn(dealer);
   
    //dtermine the outcome of the hand
    for(let i=0; i<playersLength; i++)
    {
        determineOutcome(players[i]);
    }

    //take back the cards
    for(let i=0; i<playersLength; i++)
    {
        clearHand(players[i]);
    }
    clearHand(dealer);

    //clear deck
    clearDeck(deck);

    if(players[0].active===false && players[1].active===false && players[2].active===false && players[3].active===false)
    {
        break;
    }

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

// console.log(deck);

//players.forEach(element => {console.log(element)});