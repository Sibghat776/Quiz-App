import React, { use, useEffect, useState } from 'react'


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
    const [count, setCount] = useState(60)
    useEffect(() => {
        if (count == 0) return

        let timer = setInterval(() => {
            setCount(prev => prev - 1)
        }, 1000);

        return () => clearInterval(timer)
    }, [count])



    let [questionNumber, setQuestionNumber] = useState(1)
    let [question, setQuestion] = useState(null)
    useEffect(() => {
        setQuestion(islamicQuiz[questionNumber - 1])
    }, [islamicQuiz, questionNumber])

    return (
        <>
            <div className='questionMain'>
                <div className={"timer" && count == 0 ? "timeUp" : "timer"}>
                    {count}
                </div>
                <div className="questions">
                    <div>
                        <div className="question">
                            {question?.question}
                        </div>
                        <div className="options">
                            {
                                question?.options?.map((option) => (
                                    <div className="optionItem">{option?.text}</div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
