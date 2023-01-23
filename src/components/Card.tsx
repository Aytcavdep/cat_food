import React from 'react';
import '../scss/components/Card.scss';
import { CatFoodItemType } from '../components/catFoodItem';
import { UseStatePropsType } from '../App';

//кастомный атрибут
declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    disabled?: boolean;
  }
}

interface CardPropsType extends CatFoodItemType, UseStatePropsType {}

const Card: React.FC<CardPropsType> = ({
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
  isHover,
  setIsHover,
  isSelected,
  setIsSelected,
  isDisabled,
  setIsDisabled,
}) => {
  return (
    <div className="card_layout">
      <div
        disabled={isDisabled(id)}
        onMouseEnter={() => setIsHover(id)}
        onMouseLeave={() => setIsHover(id)}
        onClick={() => setIsSelected(id)}
        className={
          isSelected(id) ? 'card_border card_border_selected' : 'card_border'
        }
      >
        <div className={isHover(id) ? 'card card_hover' : 'card'}>
          <div
            disabled={isDisabled(id)}
            className={
              isHover(id) && isSelected(id)
                ? 'card_title card_title_selected_hover'
                : 'card_title'
            }
          >
            {isHover(id) && isSelected(id) ? titleSelectedHover : title}
          </div>
          <div disabled={isDisabled(id)} className="card_brand_name">
            {brand}
          </div>
          <div disabled={isDisabled(id)} className="card_taste">
            {taste}
          </div>
          <div disabled={isDisabled(id)} className="card_offer">
            <span>{offer.count}</span> {offer.serving}
            <br />
            <span>{offer.giftCount}</span> {offer.gift}
          </div>
          <div className="card_label_weight">
            <div className="card_label">
              <img disabled={isDisabled(id)} alt="Foto cat" src={img} />
              <div
                disabled={isDisabled(id)}
                className={
                  isHover(id) && isSelected(id)
                    ? 'card_weight weight_selected_hover'
                    : isSelected(id)
                    ? 'card_weight weight_selected'
                    : isHover(id)
                    ? 'card_weight weight_hover'
                    : 'card_weight'
                }
              >
                <div className="weight">{foodWeight}</div>
                <div className="unit">{foodUnit}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div disabled={isDisabled(id)} className="card_footer">
        {isDisabled(id)
          ? footerDisabled
          : !isSelected(id)
          ? footer
          : footerSelected}
        {!isSelected(id) && !isDisabled(id) ? (
          <span onClick={() => setIsSelected(id)} className="link">
            купи.
          </span>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Card;
