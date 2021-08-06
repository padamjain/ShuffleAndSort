window.onload=function(){
var list = document.getElementById("shuffleAndSort"),
button = document.getElementById("shuffle");
function shuffle(items)
{
    var cached = items.slice(0), temp, i, rand;
    i = cached.length;
    console.log(cached);
    while(--i)
    {
        rand = Math.floor(i * Math.random());
        temp = cached[rand];
        cached[rand] = cached[i];
        cached[i] = temp;
    }
    return cached;
}
function shuffleCards()
{
    var cards = list.children, i = 0;
    cards = Array.prototype.slice.call(cards);
    cards = shuffle(cards);
    while(i < cards.length)
    {
        list.appendChild(cards[i]);
        ++i;
    }
} 

function Sort(items)
{
    var cached = items.slice(0), temp;
    console.log(cached.length);  
    for(var i = 0; i < cached.length; i++){
        //Inner pass
        for(var j = 0; j < cached.length - i - 1; j++){
            //Value comparison for ascending order            
            if(cached[j].innerHTML > cached[j+1].innerHTML){
                //Swapping                
                temp = cached[j];
                cached[j] = cached[j+1];
                cached[j+1] = temp;
            }
        }
    };
    return cached;
}

function SortCards() {

    var cards = list.children, i = 0;
    cards = Array.prototype.slice.call(cards);
    cards = Sort(cards);
    while(i < cards.length)
    {
        list.appendChild(cards[i]);
        ++i;
    }
}

document.getElementById("shuffle").onclick = shuffleCards;
document.getElementById("sort").onclick = SortCards;

} 