import React, { useEffect, useState } from 'react'

export default function Questions() {
    const [count, setCount] = useState(60)
    useEffect(() => {
        if (count == 0) return

        let timer = setInterval(() => {
            setCount(prev => prev - 1)
        }, 1000);

        return () => clearInterval(timer)
    }, [count])
    return (
        <>
            <div className='questionMain'>
                <div className={"timer" && count == 0 ? "timeUp" : "timer"}>
                    {count}
                </div>
                <div className="questions">
                    <div className="question">
                        What is Your Name?
                    </div>
                    <div className="options"    >
                        <div className="optionItem">Sibghat</div>
                        <div className="optionItem">Sibghat</div>
                        <div className="optionItem">Sibghat</div>
                        <div className="optionItem">Sibghat</div>
                    </div>
                </div>
            </div>
        </>
    )
}
