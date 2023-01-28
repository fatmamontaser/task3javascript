let inputNumber=document.querySelector('#numberR')
let btn =document.querySelector('.btn')
let done=document.querySelector('.done')
let tryAgin =document.querySelector('.tryAgin')
let gameOver=document.querySelector('.GameOver')
let countOfTry=document.querySelector('#countOfTry')

let randNum =  Math.floor(Math.random() * 10) + 1;
console.log(randNum)
let count=3;
btn.addEventListener('click',()=>{
let vlueOfnum= Number(inputNumber.value)
if(vlueOfnum !== randNum){
    tryAgin.innerHTML ='Try agin :]'
    count-=1;
    if(count==0){
        gameOver.innerHTML='GAME OVER';
        btn.disabled = true
        tryAgin.remove()
    
    }
   
}else{
    tryAgin.remove()
    done.innerHTML ='Well Done :)'

}
countOfTry.setAttribute('value',count)
})



