//guessing game

const number = prompt('enter your guessing range');
const genNum = Math.floor(Math.random() * number) + 1;


let guess = prompt('enter the guess no');

while(true){
    if(guess == "quit"){
        console.log('you quit the game');
        break;
    }

    if(guess == genNum){
        console.log("congrats!! you win the game");
        break;
    }
     else if(guess < genNum){
        console.log('your guess value is too small');
        let guess= prompt('try again');
    }
     else if(guess > genNum){
        console.log('your guess value is too big');
        let guess= prompt('try again');

    }else{
        console.log('wrong choice');
        break;
    }

}