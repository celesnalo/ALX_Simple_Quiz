function checkAnswer() {
    const correctAnswer = "4"; 
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    if (selectedOption) {
        const userAnswer = selectedOption.value;
        if (userAnswer === correctAnswer) {
            document.getElementById('feedback').innerText = "Well done.";
        } else {
            document.getElementById('feedback').innerText = "That's incorrect. Try again!";
        }
    }
}

// Event Listener to the Submit Button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);

// Initial check when the script loads
checkAnswer();
