import React, { useState } from 'react';

function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-gray-300 mb-8">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between w-full min-h-[60px] px-4 py-4 text-left text-gray-800 bg-gray-100 hover:bg-gray-200 font-semibold text-2xl"
            >
                {question}
                <span className="text-xl">
                    {isOpen ? '-' : '+'}
                </span>
            </button>
            {isOpen && (
                <div className="px-4 py-2 text-gray-700 bg-white text-lg">
                    {answer}
                </div>
            )}
        </div>
    );
}

export default FAQItem;
