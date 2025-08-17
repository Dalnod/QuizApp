import React from 'react';

const ProgressBar = ({ current, total }) => {
    const progress = ((current + 1) / total) * 100;
    return (
        <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-600">
                    Question {current + 1} of {total}
                </span>
                <span className="text-sm font-medium text-gray-600">
                    {Math.round(progress)}% Complete
                </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                    className="bg-indigo-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
};

export default ProgressBar;
