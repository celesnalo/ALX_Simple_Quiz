function checkAnswer(){
    const correctAnswer = 4;
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    
    if(selectedOption){
        const userAnswer = selectedOption.value;
        if(correctAnswer == userAnswer){
            document.getElementById('feedback').innerText = "Nazoke, Correct! Well done.";
        }else{
            document.getElementById('feedback').innerText = "Kushuthi ugula ngempela wena, That's incorrect. Try again!";
        }
    }

    //Event Listener to the Submit Button
    document.getElementById('submit-answer').addEventListener('click', checkAnswer); 
}
checkAnswer();