import { useRef, useState } from "react";

const Project1 = () => {
    const [counter, setCounter] = useState(0);
    const [counterArray, setCounterArray] = useState<number[]>([]);
    const counterRef = useRef(0);
    const buttonClass = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";

    const updateCounter = (newValue: number) => {
        const newHistory = counterArray.slice(0, counterRef.current + 1);
        newHistory.push(newValue);
        counterRef.current += 1;
        setCounterArray(newHistory);
        setCounter(newValue);
    }

    const handleIncrement = () => {
        updateCounter(counter + 1);
    }

    const handleDecrement = () => {
        updateCounter(counter - 1);
    }

    const handleUndo = () => {
        if (counterRef.current > 0) {
            counterRef.current -= 1;
            setCounter(counterArray[counterRef.current]);
        }

    }

    const handleRedo = () => {
        if (counterRef.current < counterArray.length - 1)
            counterRef.current += 1;
        setCounter(counterArray[counterRef.current]);
    }

    return (
        <>
            <h2 className="text-lg mb-8">This is the Counter Project</h2>
            <div className="flex items-center space-x-4">
                <button className={buttonClass} onClick={handleDecrement} >-</button>
                <p className="p-8 text-lg">{counter}</p>
                <button className={buttonClass} onClick={handleIncrement}>+</button>
            </div>
            <div className="flex items-center space-x-4">
                <button className={buttonClass} onClick={handleUndo} disabled={counterRef.current === 0}>Undo</button>
                <button className={buttonClass} onClick={handleRedo} disabled={counterRef.current >= counterArray.length - 1}>Redo</button>
            </div>

        </>

    )
}

export default Project1;