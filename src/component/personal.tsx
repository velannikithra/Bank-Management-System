import React from 'react';
import personal from '../images/personal.jpg';
import './personal.css';

const Personal: React.FC = () => {
  return (
    <>
      <div>
        <img className='personal' src={personal} alt="Personal Banking" />
      </div>
      <div>
        <p className='paragraph'>
          Whether you're opening your first savings account, saving for an important purchase, or just want a safe place for your money, Our Banking Company can help. With our Savings Account, your money can grow while keeping it easily accessible for any unexpected needs.
        </p>
        <h3 className='features'>Features</h3>
        <ul className='benifits'>
          <li>$100 minimum deposit to open</li>
          <li>FREE Online Banking</li>
          <li>One free withdrawal a month, $3 each thereafter</li>
          <li>Quarterly Statement</li>
        </ul>
        <h3 className='features'>Benefits</h3>
        <ul className='benifits'>
          <li>Interest earned on any balance</li>
          <li>Interest is compounded every quarter</li>
          <li>ATM Card</li>
          <li>Easy to transfer money to and from your Robertson Banking Company checking account using online banking or by visiting any Robertson Banking Company location</li>
        </ul>
        <h1 className='features'>Money Market</h1>
        <p className='paragraph'>
          Enjoy the flexibility of using your funds when you need them while maintaining a higher interest rate than our regular savings account.
        </p>
        <ul className='benifits'>
          <li>$2,500 to open</li>
          <li>Interest paid on balances</li>
          <li>6 free withdrawals per month - Unlimited withdrawals/transfers in person, by ATM card and loan payment transfers</li>
          <li>$2,500 minimum balance required or $7 minimum balance fee</li>
        </ul>
      </div>
    </>
  );
};

export default Personal;
