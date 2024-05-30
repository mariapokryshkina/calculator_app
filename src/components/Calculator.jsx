import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);

  const handleInput = (e) => {
    setInput(input + e.target.value);
  };

  const handleClear = () => {
    setInput('');
    setResult(null);
  };

  const handleCalculate = () => {
    try {
      setResult(eval(input));
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <input type="text" value={input} readOnly />
        <div className="result">{result !== null ? `= ${result}` : ''}</div>
      </div>
      <div className="buttons">
        <button onClick={handleClear}>C</button>
        <button onClick={handleInput} value="1">1</button>
        <button onClick={handleInput} value="2">2</button>
        <button onClick={handleInput} value="3">3</button>
        <button onClick={handleInput} value="+">+</button>
        <button onClick={handleInput} value="4">4</button>
        <button onClick={handleInput} value="5">5</button>
        <button onClick={handleInput} value="6">6</button>
        <button onClick={handleInput} value="-">-</button>
        <button onClick={handleInput} value="7">7</button>
        <button onClick={handleInput} value="8">8</button>
        <button onClick={handleInput} value="9">9</button>
        <button onClick={handleInput} value="*">*</button>
        <button onClick={handleInput} value="0">0</button>
        <button onClick={handleInput} value=".">.</button>
        <button onClick={handleInput} value="/">/</button>
        <button onClick={handleCalculate}>=</button>
      </div>
    </div>
  );
};

export default Calculator;
