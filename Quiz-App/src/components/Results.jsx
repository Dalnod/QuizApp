import React from 'react';
import { RotateCcw } from 'lucide-react';

const Results = ({ score, total, questions, answers, onReset }) => (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full text-center">
            <div className="mb-6">
                <div className="text-6xl mb-4">🎉</div>
                <h2 className="text-3xl font-bold text-gray-800 mb-2">Quiz Complete!</h2>
                <div className="text-lg text-gray-600">
                    Your Score: <span className="font-bold text-indigo-600">{score}</span> out of {total}
                </div>
                <div className="text-sm text-gray-500 mt-2">
                    {Math.round((score / total) * 100)}% correct
                </div>
            </div>
            <div className="space-y-3 mb-6">
                {questions.map((question, idx) => (
                    <div key={question.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className="text-sm text-gray-700">Question {idx + 1}</span>
                        <span className={`text-sm font-medium ${answers[idx] === question.correctAnswer
                                ? 'text-green-600'
                                : 'text-red-600'
                            }`}>
                            {answers[idx] === question.correctAnswer ? '✓ Correct' : '✗ Incorrect'}
                        </span>
                    </div>
                ))}
            </div>
            <button
                onClick={onReset}
                className="flex items-center justify-center w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors"
            >
                <RotateCcw className="w-5 h-5 mr-2" />
                Take Quiz Again
            </button>
        </div>
    </div>
);

export default Results;
