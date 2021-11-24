import React from 'react'

export default function Calculator() {
    return (
        <div className="calculator">
            <div className="display"> 
                <span className>()</span>
            </div>
            
            <div className="operators">
                <button className="divide">/</button>
                <button className="mult">x</button>
                <button className="plus">+</button>
                <button className="min">-</button>
                <button className="delete">DEL</button>
            </div>
            <div className="digits">
                <button>0</button>
                <button>.</button>
                <button>=</button>
            </div>

        </div>
    )
}
