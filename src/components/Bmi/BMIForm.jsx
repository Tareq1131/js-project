// BMIForm.js
import { useState } from 'react';
import './style.css';

function BMIForm() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmiResult, setBmiResult] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (height === '' || height < 0 || isNaN(height)) {
      setError('Please provide a valid height');
      return;
    }

    if (weight === '' || weight < 0 || isNaN(weight)) {
      setError('Please provide a valid weight');
      return;
    }

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    setBmiResult(bmi);
    setError('');
    setHeight('');
    setWeight('');
    
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <p>
          <label>Height in CM: </label>
          <input
            type="text"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </p>
        <p>
          <label>Weight in KG: </label>
          <input
            type="text"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </p>
        <button type="submit">Calculate</button>
      </form>
      {error && <div id="error-message">{error}</div>}
      {bmiResult && <div id="bmi-result">Your BMI is: {bmiResult}
      </div>
      }
    </div>
  );
}

export default BMIForm;
