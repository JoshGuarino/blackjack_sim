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

var player1 = ['Heuy', 200, true];
var player2 = ['Dewey', 200, true];
var player3 = ['Lewey', 200, true];
var player4 = ['Scrooge', 200, true];
var dealer = ['The House', 0, true];

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

//shuffleDeck(deck);
//console.log(deck);

for(let i=0; i < 20; i++)
{
    shuffleDeck(deck);
    //var p1Total = 0, p2Total = 0, p3Total = 0, p4Total = 0, dealerTotal = 0;

    //inital deal
    if(player1[2]===true)
    {
        player1.push(deck.pop()); player1.push(deck.pop()); player1[1] = player1[1]-15;
        var p1Total = player1[3].numValue + player1[4].numValue;
    }
    if(player2[2]===true)
    {
        player2.push(deck.pop()); player2.push(deck.pop()); player2[1] = player2[1]-15;
         var p2Total = player2[3].numValue + player2[4].numValue;
    }
    if(player3[2]===true)
    {
        player3.push(deck.pop()); player3.push(deck.pop()); player3[1] = player3[1]-15;
         var p3Total = player3[3].numValue + player3[4].numValue;
    }
    if(player4[2]===true)
    {
        player4.push(deck.pop()); player4.push(deck.pop()); player4[1] = player4[1]-15;
        var p4Total = player4[3].numValue + player4[4].numValue;
    }
    if(dealer[2]===true)
    {
        dealer.push(deck.pop());  dealer.push(deck.pop());
        var dealerTotal = dealer[3].numValue + dealer[4].numValue;
    }


    //each player takes their turn
    if(player1[2]===true)
    {
        while(p1Total <= 16)
        {
            let arrNum1 = 5;
            player1.push(deck.pop());
            p1Total = p1Total + player1[arrNum1].numValue;
            arrNum1++;
        }
    }
    if(player2[2]===true)
    {
        while(p2Total <= 16)
        {
            let arrNum2 = 5;
            player2.push(deck.pop());
            p2Total = p2Total + player2[arrNum2].numValue;
            arrNum2++;
        }
    }
    if(player3[2]===true)
    {
        while(p3Total <= 16)
        {
            let arrNum3 = 5;
            player3.push(deck.pop());
            p3Total = p3Total + player3[arrNum3].numValue;
            arrNum3++;
        }
    }
    if(player4[2]===true)
    {
        while(p4Total <= 16)
        {
            let arrNum4 = 5;
            player4.push(deck.pop());
            p4Total = p4Total + player4[arrNum4].numValue;
            arrNum4++;
        }
    }
    if(dealer[2]===true)
    {
        while(dealerTotal <= 16)
        {
            let arrNum5 = 5;
            dealer.push(deck.pop());
            dealerTotal = dealerTotal + dealer[arrNum5].numValue;
            arrNum5++;   
        } 
    }


    //determine outcomes
    if(player1[2]===true)
    {
        if(p1Total <= 21 && dealerTotal < p1Total)
        {
            player1[1] = player1[1]+30;
            dealer[1] = dealer[1]-15;
        }
        else
        {
            dealer[1] = dealer[1]+15;
            if(player1[1] < 15)
            {
                player1[2] = false;
            }
        }
    }
    if(player2[2]===true)
    {
        if(p2Total <= 21 && dealerTotal < p2Total)
        {
            player2[1] = player2[1]+30;
            dealer[1] = dealer[1]-15;
        }
        else
        {
            dealer[1] = dealer[1]+15;
            if(player2[1] < 15)
            {
                player2[2] = false;
            }
        }
    }
    if(player3[2]===true)
    {
        if(p3Total <= 21 && dealerTotal < p3Total)
        {
            player3[1] = player3[1]+30;
            dealer[1] = dealer[1]-15;
        }
        else
        {
            dealer[1] = dealer[1]+15;
            if(player3[1] < 15)
            {
                player3[2] = false;
            }
        }
    }
    if(player4[2]===true)
    {
        if(p4Total <= 21 && dealerTotal < p4Total)
        {
            player4[1] = player4[1]+30;
            dealer[1] = dealer[1]-15;
        }
        else
        {
            dealer[1] = dealer[1]+15;
            if(player4[1] < 15)
            {
                player4[2] = false;
            }
        }
    }
    

    //take back the cards
    var p1Length=player1.length, p2Length=player2.length, p3Length=player3.length, p4Length=player4.length, dealerLength=dealer.length, deckLength=deck.length;
    for(let i=3; i < p1Length; i++)
    {
        player1.pop();
    }
    for(let i=3; i < p2Length; i++)
    {
       player2.pop();
    }
    for(let i=3; i < p3Length; i++)
    {
        player3.pop();
    }
    for(let i=3; i < p4Length; i++)
    {
        player4.pop();
    }
    for(let i=3; i < dealerLength; i++)
    {
        dealer.pop();
    }
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

// console.log(player1);
// console.log(player2);
// console.log(player3);
// console.log(player4);
// console.log(dealer);   

// console.log(p1Total);
// console.log(p2Total);
// console.log(p3Total);
// console.log(p4Total);
// console.log(dealerTotal);

//console.log(deck);