let home_score=document.getElementById("homescore");
let guest_score=document.getElementById("guestscore");
let counthome=0
let countguest=0
//homescore.innerText=count1
//guestscore.innerText=count2
function increment1g(){
    countguest+=1
    guest_score.innerText=countguest
}
function increment2g(){
    countguest+=2
    guest_score.innerText=countguest
    
}
function increment3g(){
    countguest+=3
    guest_score.innerText=countguest
    
}
function increment1h(){
    counthome+=1
    home_score.innerText=counthome

}
function increment2h(){
    counthome+=2
    home_score.innerText=counthome
    
}
function increment3h(){
    
    counthome+=3
    home_score.innerText=counthome
}
