const questions = [
  ["Which language was used to create Facebook?", "Python", "French", "JavaScript", "PHP", 4],
  ["The Indian song that won an Oscar is in _________ language", 'Tamil', 'Hindi', 'Malayalam', 'Telugu', 1],
  ["In which year did India win its first cricket World Cup trophy?", '1982', '1983', '1984', '1985', 2],
  ["Paryushana Parva festival is related to________", 'Islam', 'Hinduism', 'Buddhism', 'Jainism', 4],
  ["On which day did Queen Elizabeth die?", 'Sep 8', 'Oct 14', 'May 2', 'Dec 18', 1],
];

const quizForm = document.getElementById('quiz-form');
const questionsContainer = document.getElementById('questions-container');
const resultContainer = document.getElementById('result-container');
const resultElement = document.getElementById('result');
const marksElement = document.getElementById('marks');

function renderQuestions() {
  questions.forEach((question, index) => {
      const questionElement = document.createElement('div');
      questionElement.classList.add('question');
      
      const questionTitle = document.createElement('h2');
      questionTitle.textContent = `${index + 1}. ${question[0]}`;
      questionElement.appendChild(questionTitle);
      
      const optionsContainer = document.createElement('div');
      optionsContainer.classList.add('options');
      
      for (let i = 1; i <= 4; i++) {
          const optionLabel = document.createElement('label');
          optionLabel.classList.add('option');
          
          const optionInput = document.createElement('input');
          optionInput.setAttribute('type', 'radio');
          optionInput.setAttribute('name', `question${index}`);
          optionInput.setAttribute('value', i);
          
          optionLabel.appendChild(optionInput);
          optionLabel.appendChild(document.createTextNode(` ${String.fromCharCode(96 + i)}. ${question[i]}`));
          optionsContainer.appendChild(optionLabel);
      }
      
      questionElement.appendChild(optionsContainer);
      questionsContainer.appendChild(questionElement);
  });
}

function calculateResult(event) {
  event.preventDefault();
  
  let correctAnswers = 0;
  
  questions.forEach((question, index) => {
      const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
      const correctOptionValue = question[5];
      
      // Reset previous styles
      const options = document.querySelectorAll(`input[name="question${index}"]`);
      options.forEach(option => {
          option.parentElement.classList.remove('correct', 'incorrect');
      });
      
      if (selectedOption) {
          const selectedValue = parseInt(selectedOption.value);
          
          // Apply styles to options
          options.forEach(option => {
              const label = option.parentElement;
              if (parseInt(option.value) === correctOptionValue) {
                  label.classList.add('correct');
              } else if (parseInt(option.value) === selectedValue) {
                  label.classList.add('incorrect');
              }
          });
          
          if (selectedValue === correctOptionValue) {
              correctAnswers++;
          }
      }
  });
  
  resultContainer.style.display = 'block';
  resultElement.textContent = `You got ${correctAnswers} out of ${questions.length} `;
  marksElement.textContent = `Your score: ${correctAnswers}`;
}

quizForm.addEventListener('submit', calculateResult);

renderQuestions();
