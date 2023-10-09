import React, { useState } from 'react';

function GoldCalculator() {
  const [goldRate, setGoldRate] = useState('');
  const [weight, setWeight] = useState('');
  const [wastage, setWastage] = useState('');
  const [total, setTotal] = useState(0);

  const calculateTotal = () => {
    const rate = parseFloat(goldRate);
    const goldWeight = parseFloat(weight);
    const wastagePercentage = parseFloat(wastage);
    const gstPercentage = 3; // GST percentage

    const actualRate = rate * goldWeight;
    const wastageAmount = (actualRate * wastagePercentage) / 100;
    const gstAmount = (actualRate + wastageAmount) * (gstPercentage / 100);
    const finalTotal = actualRate + wastageAmount + gstAmount;

    setTotal(finalTotal.toFixed(2));
  };

  return (
    <div>
      <h2>Gold Calculator</h2>
      <div>
        <label>Gold Rate (₹)</label>
        <input
          type="number"
          value={goldRate}
          onChange={(e) => setGoldRate(e.target.value)}
        />
      </div>
      <div>
        <label>Gold Weight (grams)</label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <div>
        <label>Wastage (%)</label>
        <input
          type="number"
          value={wastage}
          onChange={(e) => setWastage(e.target.value)}
        />
      </div>
      <button onClick={calculateTotal}>Calculate</button>
      <div>
        <h3>Description</h3>
        <div>Actual Gold Rate: ₹{goldRate * weight}</div>
        <div>Wastage in amount (%): ₹{(goldRate * weight * wastage) / 100}</div>
        <div>GST (3%): ₹{(goldRate * weight * wastage) / 100 * 3 / 100}</div>
        <div>Total: ₹{total}</div>
      </div>
    </div>
  );
}

export default GoldCalculator;
