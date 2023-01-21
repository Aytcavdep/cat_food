import React from 'react';
import Card from './components/Card';
import { catFoodItem } from './components/catFoodItem';
import './scss/App.scss';

function App() {
  return (
    <div className="App">
      <div className="header">Ты сегодня покормил кота?</div>
      <div className="card_area">
        {catFoodItem.map((item) => {
          return <Card key={item.id} {...item} />;
        })}
      </div>
    </div>
  );
}

export default App;
