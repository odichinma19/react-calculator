import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');

  const handleClick = (value) => setInput(input + value);
  const handleClear = () => setInput('');
  const handleEqual = () => {
    try {
      setInput(eval(input).toString());
    } catch {
      setInput('Error');
    }
  };

  return (
    <div style={{ padding: 20, textAlign: 'center' }}>
      <h2>React Calculator</h2>
      <input value={input} readOnly style={{ width: '100%', height: '40px', fontSize: '20px' }} />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 10, marginTop: 10 }}>
        {[1,2,3,'+',4,5,6,'-',7,8,9,'*','C',0,'=','/'].map((btn) => (
          <button
            key={btn}
            onClick={() => {
              if (btn === 'C') handleClear();
              else if (btn === '=') handleEqual();
              else handleClick(btn.toString());
            }}
            style={{ height: '40px', fontSize: '18px' }}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
