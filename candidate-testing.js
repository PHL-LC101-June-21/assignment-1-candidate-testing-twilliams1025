const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
candidateName = "Tiffany";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space?";
let correctAnswer = "True";
let candidateAnswer = "";
let questions = ["1) Who was the first American woman in space?\n" ,"2) True or false:5 kilometer==5 meters?\n","3)(5 + 3/2 * 10 = ?\n", "4) Given the array[8, 'Orbit','Trajectory' 45] what is the entry index at 2?\n", "5) What is the minimum crew size for the ISS?\n"];
let correctAnswers = ["Sally Ride\n", "True\n", "40\n","Tracjectory\n", "3\n"];
let candidateAnswers = [];


function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Enter your Name:");

}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
 
    askTestQuestion = input.question;
  for (let i = 0; i < questions.length; i++){
   candidateAnswer = input.question(questions[i]);
    candidateAnswers.push("sally ride","false","45","tracjectory", "10");
     input.question(correctAnswers[i]);
     
     }


    
     

     

    
    
  }
  

function gradeQuiz(candidateAnswers) {
  let numOfCorrectAnswers = 0

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 

  
   
   
  
  
  



  let grade;
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Candidate Name:" + candidateName);
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};