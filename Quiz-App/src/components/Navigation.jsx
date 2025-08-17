import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Navigation = ({
    onPrev,
    onNext,
    canPrev,
    canNext,
    isLast,
    answered
}) => (
    <div className="flex justify-between items-center">
        <button
            onClick={onPrev}
            disabled={!canPrev}
            className="flex items-center px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Previous
        </button>
        <div className="text-sm text-gray-500">
            {answered ? '✓ Answered' : 'Select an answer'}
        </div>
        <button
            onClick={onNext}
            disabled={!answered}
            className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
            {isLast ? 'Finish Quiz' : 'Next'}
            <ChevronRight className="w-5 h-5 ml-2" />
        </button>
    </div>
);

export default Navigation;
