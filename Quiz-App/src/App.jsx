import React, { useState } from 'react';
import ProgressBar from './components/ProgressBar';
import QuestionCard from './components/QuestionCard';
import Navigation from './components/Navigation';
import Results from './components/Results';

const sampleQuestions = [
  {
    id: 1,
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Madrid"],
    correctAnswer: 2
  },
  {
    id: 2,
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "Who painted the Mona Lisa?",
    options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Michelangelo"],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    correctAnswer: 3
  }
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion]: answerIndex
    });
  };

  const goToNextQuestion = () => {
    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    sampleQuestions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
  };

  const score = calculateScore();

  if (showResults) {
    return (
      <Results
        score={score}
        total={sampleQuestions.length}
        questions={sampleQuestions}
        answers={selectedAnswers}
        onReset={resetQuiz}
      />
    );
  }

  const currentQ = sampleQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full">
        <ProgressBar current={currentQuestion} total={sampleQuestions.length} />
        <QuestionCard
          question={currentQ.question}
          options={currentQ.options}
          selected={selectedAnswers[currentQuestion]}
          onSelect={handleAnswerSelect}
        />
        <Navigation
          onPrev={goToPreviousQuestion}
          onNext={goToNextQuestion}
          canPrev={currentQuestion > 0}
          canNext={selectedAnswers[currentQuestion] !== undefined}
          isLast={currentQuestion === sampleQuestions.length - 1}
          answered={selectedAnswers[currentQuestion] !== undefined}
        />
      </div>
    </div>
  );
}

export default App;
