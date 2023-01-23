import React, { useState } from 'react';
import Card from './components/Card';
import { catFoodItem } from './components/catFoodItem';
import './scss/App.scss';

export type HoverType = number[];
export type SelectedType = number[];
export type DisabledType = number[];

export type UseStatePropsType = {
  isHover: (id: number) => boolean;
  setIsHover: (id: number) => void;
  isSelected: (id: number) => boolean;
  setIsSelected: (id: number) => void;
  isDisabled: (id: number) => boolean;
  setIsDisabled: (id: number) => void;
};

function App() {
  const [hover, setHover] = useState([0]);
  const [selected, setSelected] = useState([0]);
  const [disabled, setDisabled] = useState([0]);

  const isHover = (id: number) => {
    return hover.includes(id);
  };
  const isSelected = (id: number) => {
    return selected.includes(id);
  };
  const isDisabled = (id: number) => {
    return disabled.includes(id);
  };

  const setIsHover = (id: number) => {
    if (hover.includes(id)) {
      return setHover((prev) => [...prev].filter((item) => item !== id));
    }
    setHover((prev) => [...prev, id]);
  };
  const setIsSelected = (id: number) => {
    if (selected.includes(id)) {
      return setSelected((prev) => [...prev].filter((item) => item !== id));
    }
    setSelected((prev) => [...prev, id]);
  };
  const setIsDisabled = (id: number) => {
    if (disabled.includes(id)) {
      return setDisabled((prev) => [...prev].filter((item) => item !== id));
    }
    setDisabled((prev) => [...prev, id]);
  };
  const useStateProps = {
    isHover,
    setIsHover,
    isSelected,
    setIsSelected,
    isDisabled,
    setIsDisabled,
  };
  return (
    <div className="App">
      {/* Кнопки для проверки функционала Disabled */}
      <div className="button_disabled_area">
        <button onClick={() => setIsDisabled(1)}>disabled 1</button>
        <button onClick={() => setIsDisabled(2)}>disabled 2</button>
        <button onClick={() => setIsDisabled(3)}>disabled 3</button>
      </div>
      <div className="header">Ты сегодня покормил кота?</div>
      <div className="card_area">
        {catFoodItem.map((item) => {
          return <Card key={item.id} {...item} {...useStateProps} />;
        })}
      </div>
    </div>
  );
}

export default App;
