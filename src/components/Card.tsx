import React from 'react';
import '../scss/components/Card.scss';
import cat from '../assets/img/Photo.png';
import { CatFoodItemType } from '../components/catFoodItem';

const Card: React.FC<CatFoodItemType> = ({
  id,
  title,
  titleSelectedHover,
  brand,
  taste,
  offer,
  img,
  foodWeight,
  foodUnit,
  footer,
  footerSelected,
  footerDisabled,
}) => {
  return (
    <div className="card_layout">
      <div className="card_border">
        <div className="card">
          <div className="card_title">{title}</div>
          <div className="card_brand_name">{brand}</div>
          <div className="card_taste">{taste}</div>
          <div className="card_offer">
            <span>{offer.count}</span> {offer.serving}
            <br />
            <span>{offer.giftCount}</span> {offer.gift}
          </div>
          <div className="card_label_weight">
            <div className="card_label">
              <img alt="Foto cat" src={img} />
              <div className="card_weight">
                <div className="weight">{foodWeight}</div>
                <div className="unit">{foodUnit}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card_footer">
        {footer}
        <span className="link">купи</span>.
      </div>
    </div>
  );
};

export default Card;
