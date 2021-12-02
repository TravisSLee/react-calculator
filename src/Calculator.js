import React from 'react'
import { useState } from 'react'

export default function Calculator() {

    const [calc, SetCalc] = useState('')
    const [result, SetResult] = useState('')

    const ops = ['/', 'x', '+', '-', '.'] 

    const updateCalc = value =>{
        setCalc(calc + value)
    }
    
    const createDigits = () =>{
        const digits = []

        for (let i=1; i< 10; i++){
            digits.push(
                <button key={i} onClick={() => updateCalc(i.toString())}>
                    {i}
                </button>
            )
        }
        return digits
    }
    
    
    return (
        <div className="calculator">
            <div className="display"> 
                {result ? <span>(0)</span> : ''} 
                { calc || "0"}
            </div>
            
            <div className="operators">
                <button className="divide" onClick={() => updateCalc('/')}>/</button>
                <button className="mult" onClick={() => updateCalc('*')}>x</button>
                <button className="plus" onClick={() => updateCalc('+')}>+</button>
                <button className="min" onClick={() => updateCalc('-')}>-</button>
                <button className="delete">DEL</button>
            </div>
            <div className="digits">
                { createDigits() }
                <button onClick={() => updateCalc('0')}>0</button>
                <button onClick={() => updateCalc('.')}>.</button>
                <button>= </button>
            </div>

        </div>
    )
}
