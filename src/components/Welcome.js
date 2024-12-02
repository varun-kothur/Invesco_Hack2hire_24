import React from 'react';

const Welcome = () => {
  return (
    <div>
      <h2>Welcome to the Financial Dashboard!</h2>
      <p>Here is your financial overview:</p>
      <div>
        <p><strong>Total Balance:</strong> $10,000</p>
        <p><strong>Recent Transactions:</strong></p>
        <ul>
          <li>Transaction 1: $100</li>
          <li>Transaction 2: $200</li>
        </ul>
      </div>
    </div>
  );
};

export default Welcome;
