import React, { useState } from 'react';
import './table.css';

interface Meal {
  id: number;
  name: string;
  description: string;
  price: number;
}

const meals: Meal[] = [
  { id: 1, name: 'Sushi', description: 'Finest fish and veggies', price: 22.99 },
  { id: 2, name: 'Schnitzel', description: 'A german specialty!', price: 16.50 },
  { id: 3, name: 'Barbecue Burger', description: 'American, raw, meaty', price: 12.99 },
  { id: 4, name: 'Green Bowl', description: 'Healthy...and green...', price: 18.99 },
  { id: 5, name: 'Honey', description: 'Sweet and natural', price: 14.99 },
];

const MenuTable: React.FC = () => {
  const [amounts, setAmounts] = useState<{ [key: number]: number }>({});

  const handleAmountChange = (mealId: number, amount: number) => {
    setAmounts(prev => ({
      ...prev,
      [mealId]: amount
    }));
  };


  return (
    <div className="menu-container">
      <div className="menu-card">
        <div className="meals-list">
          {meals.map((meal) => (
            <div key={meal.id} className="meal-item">
              <div className="meal-info">
                <h3 className="meal-name">{meal.name}</h3>
                <p className="meal-description">{meal.description}</p>
                <span className="meal-price">${meal.price.toFixed(2)}</span>
              </div>
              <div className="meal-controls">
                <div className="amount-controls">
                  <label htmlFor={`amount-${meal.id}`}>Amount</label>
                  <input
                    id={`amount-${meal.id}`}
                    type="number"
                    min="1"
                    max="5"
                    value={amounts[meal.id] || 1}
                    onChange={(e) => handleAmountChange(meal.id, parseInt(e.target.value) || 1)}
                    className="amount-input"
                  />
                </div>
                <button className="add-button">
                  + Add
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuTable;