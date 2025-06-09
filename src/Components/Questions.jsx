import React, { useEffect, useState } from 'react';

const islamicQuiz = [
    {
        question: "Qur'an kis zaban mein nazil hua?",
        options: [
            { text: "Farsi", correct: false },
            { text: "Arabic", correct: true },
            { text: "Urdu", correct: false },
            { text: "Hebrew", correct: false }
        ]
    },
    {
        question: "Hazrat Muhammad (PBUH) par pehli wahi kaun si ghari mein nazil hui?",
        options: [
            { text: "Zohar", correct: false },
            { text: "Isha", correct: false },
            { text: "Tahajjud", correct: false },
            { text: "Lail (Raat)", correct: true }
        ]
    },
    {
        question: "Islam ke kitne buniyadi rukun hain?",
        options: [
            { text: "3", correct: false },
            { text: "4", correct: false },
            { text: "5", correct: true },
            { text: "6", correct: false }
        ]
    },
    {
        question: "Hazrat Muhammad (PBUH) ka walid ka naam kya tha?",
        options: [
            { text: "Abu Talib", correct: false },
            { text: "Abdullah", correct: true },
            { text: "Abdul Muttalib", correct: false },
            { text: "Abu Bakr", correct: false }
        ]
    },
    {
        question: "Pehla Nabi kaun tha?",
        options: [
            { text: "Hazrat Ibrahim (A.S)", correct: false },
            { text: "Hazrat Nuh (A.S)", correct: false },
            { text: "Hazrat Adam (A.S)", correct: true },
            { text: "Hazrat Musa (A.S)", correct: false }
        ]
    },
    {
        question: "Namaz Qur’an mein kitni martaba aayi hai?",
        options: [
            { text: "500", correct: false },
            { text: "700", correct: false },
            { text: "600", correct: false },
            { text: "700 se zyada", correct: true }
        ]
    },
    {
        question: "Islam ka doosra rukun kya hai?",
        options: [
            { text: "Roza", correct: false },
            { text: "Zakat", correct: false },
            { text: "Namaz", correct: true },
            { text: "Hajj", correct: false }
        ]
    },
    {
        question: "Hazrat Jibrael (A.S) ka kaam kya tha?",
        options: [
            { text: "Wahi pohchana", correct: true },
            { text: "Jang ladna", correct: false },
            { text: "Duniya banana", correct: false },
            { text: "Zakat lena", correct: false }
        ]
    },
    {
        question: "Hazrat Musa (A.S) par kaunsi kitaab nazil hui?",
        options: [
            { text: "Injeel", correct: false },
            { text: "Taurat", correct: true },
            { text: "Zaboor", correct: false },
            { text: "Qur'an", correct: false }
        ]
    },
    {
        question: "Hazrat Isa (A.S) ko kaunsi kitaab mili?",
        options: [
            { text: "Taurat", correct: false },
            { text: "Zaboor", correct: false },
            { text: "Injeel", correct: true },
            { text: "Qur'an", correct: false }
        ]
    },
    {
        question: "Roza kis mahine mein farz hai?",
        options: [
            { text: "Zilhajj", correct: false },
            { text: "Rajab", correct: false },
            { text: "Ramzan", correct: true },
            { text: "Rabi-ul-Awal", correct: false }
        ]
    },
    {
        question: "Hajj karna kis sheher mein hota hai?",
        options: [
            { text: "Madina", correct: false },
            { text: "Jerusalem", correct: false },
            { text: "Makkah", correct: true },
            { text: "Taif", correct: false }
        ]
    },
    {
        question: "Hazrat Abu Bakr (R.A) kaun thay?",
        options: [
            { text: "Dusre Khalifa", correct: false },
            { text: "Teeesre Khalifa", correct: false },
            { text: "Pehle Khalifa", correct: true },
            { text: "Chauthe Khalifa", correct: false }
        ]
    },
    {
        question: "Zakat kis cheez ka naam hai?",
        options: [
            { text: "Namaz", correct: false },
            { text: "Sadaqa", correct: false },
            { text: "Maal ki safai", correct: true },
            { text: "Hajj ka ek hissa", correct: false }
        ]
    }
];

export default function Questions() {
    const [count, setCount] = useState(20);
    const [questionNumber, setQuestionNumber] = useState(1);
    const [question, setQuestion] = useState(null);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [reviewMode, setReviewMode] = useState(false);
    const [userAnswers, setUserAnswers] = useState({});

    useEffect(() => {
        if (questionNumber <= islamicQuiz.length) {
            setQuestion(islamicQuiz[questionNumber - 1]);
        }
    }, [questionNumber]);

    useEffect(() => {
        if (count === 0 || showResult) return;

        const timer = setInterval(() => {
            setCount(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [count, showResult]);

    // Skip on timeout
    useEffect(() => {
        if (count === 0 && !showResult) {
            setUserAnswers(prev => ({
                ...prev,
                [questionNumber - 1]: -1
            }));
            if (questionNumber === islamicQuiz.length) {
                setShowResult(true);
            } else {
                setQuestionNumber(prev => prev + 1);
                setCount(20);
            }
        }
    }, [count]);

    const handleOptionClick = (option, index) => {
        setUserAnswers(prev => ({
            ...prev,
            [questionNumber - 1]: index
        }));

        if (option.correct) {
            setScore(prev => prev + 1);
        }

        if (questionNumber === islamicQuiz.length) {
            setShowResult(true);
        } else {
            setQuestionNumber(prev => prev + 1);
            setCount(20);
        }
    };

    const startReview = () => {
        setReviewMode(true);
        setShowResult(false);
    };

    const exitReview = () => {
        setReviewMode(false);
        restartQuiz();
    };

    const restartQuiz = () => {
        setQuestionNumber(1);
        setScore(0);
        setShowResult(false);
        setCount(20);
        setUserAnswers({});
    };

    if (reviewMode) {
        return (
            <div className="reviewScreen">
                <h2>Review Answers</h2>
                {islamicQuiz.map((q, qIdx) => {
                    const userAnswerIndex = userAnswers[qIdx];
                    return (
                        <div key={qIdx} className="reviewQuestion">
                            <h3>{qIdx + 1}. {q.question}</h3>
                            <ul>
                                {q.options.map((opt, idx) => {
                                    const isUserChoice = idx === userAnswerIndex;
                                    const isCorrect = opt.correct;
                                    return (
                                        <li
                                            key={idx}
                                            className={`reviewOption ${isCorrect ? 'correct' : ''} ${isUserChoice && !isCorrect ? 'wrong' : ''} ${isUserChoice ? 'userChoice' : ''}`}
                                        >
                                            {opt.text} {isCorrect && "✔"} {isUserChoice && !isCorrect && "✘"}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    );
                })}
                <button className="btn" onClick={exitReview}>Restart Quiz</button>
            </div>
        );
    }

    return (
        <>
            {!showResult ? (
                <div className='questionMain'>
                    <div className={count === 0 ? "timeUp" : "timer"}>
                        {count}
                    </div>
                    <div className="questions">
                        <div className="question">
                            {question?.question}
                        </div>
                        <div className="options">
                            {
                                question?.options?.map((option, index) => (
                                    <div
                                        className="optionItem"
                                        key={index}
                                        onClick={() => handleOptionClick(option, index)}
                                    >
                                        {option.text}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            ) : (
                <div className="resultScreen">
                    <h2>Quiz Complete</h2>
                    <p>Your Score:</p>
                    <div className="resultScore">{score} / {islamicQuiz.length}</div>

                    <div className="resultButtons">
                        <button onClick={restartQuiz}>Play Again</button>
                        <button onClick={startReview}>Review</button>
                    </div>
                </div>
            )}
        </>
    );
}
