import React from 'react';

const QuestionCard = ({ question, options, selected, onSelect }) => (
    <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{question}</h2>
        <div className="space-y-3">
            {options.map((option, idx) => (
                <button
                    key={idx}
                    onClick={() => onSelect(idx)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${selected === idx
                            ? 'border-indigo-500 bg-indigo-50 text-indigo-800'
                            : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        }`}
                >
                    <div className="flex items-center">
                        <div className={`w-6 h-6 rounded-full border-2 mr-3 flex items-center justify-center ${selected === idx
                                ? 'border-indigo-500 bg-indigo-500'
                                : 'border-gray-300'
                            }`}>
                            {selected === idx && (
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                            )}
                        </div>
                        <span className="text-lg">{option}</span>
                    </div>
                </button>
            ))}
        </div>
    </div>
);

export default QuestionCard;
