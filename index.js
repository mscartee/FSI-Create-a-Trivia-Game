// Your Code Here
let userName=window.prompt('Please enter your name:')
let userScore=0
for(let i=0;i<questions.length; i++){
    let question = questions[i]
    let userAnswer = window.prompt(question.text)
    if(userAnswer === question.correctAnswer){
        window.alert("Correct!")
        userScore=userScore+10

    }
}
console.log('Your Score is ' + userScore + '!')