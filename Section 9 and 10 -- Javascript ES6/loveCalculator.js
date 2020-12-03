
//Most basic implementation possible --> Built as browser snippet
prompt("What is your name?");
prompt("What is their name?");

var loveScore = Math.random() * 100
loveScore = Math.floor(loveScore) + 1
if ( loveScore >= 80 ){
    alert(`${loveScore}% Match! Seems like you two are meant to be!`)
} else if (loveScore > 50) {
    alert(`${loveScore}% Match... It might work out?`)
}
else{
    alert(`${loveScore}% Match.......Run while you can`)

}



