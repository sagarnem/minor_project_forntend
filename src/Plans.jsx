import React from 'react';
import './Plan.css';

const plans = [
  {
    title: 'Free Plan',
    description: 'Basic storage with limited features',
    storage: 'Up to 5GB storage',
    features: ['Access to essential features']
  },
  {
    title: 'Standard Plan',
    description: 'Enhanced storage and features',
    storage: 'Up to 50GB storage',
    features: ['Advanced security options']
  },
  {
    title: 'Premium Plan',
    description: 'Unlimited storage and premium features',
    storage: 'Priority support',
    features: ['Best choice for power users']
  }
];

const PlanSection = () => {
  return (
    <div className="plan-section">
      <h1>Choose Your Plan</h1>
      <div className="plan-options">
        {plans.map((plan, index) => (
          <div key={index} className="plan-card">
            <h2>{plan.title}</h2>
            <p>{plan.description}</p>
            <p>{plan.storage}</p>
            <ul>
              {plan.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
            <button className="btn">Select Plan</button>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default PlanSection;
