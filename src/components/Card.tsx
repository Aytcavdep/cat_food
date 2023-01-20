import React from 'react';
import '../scss/components/Card.scss';
import cat from '../assets/img/Photo.png';

const Card: React.FC = () => {
  return (
    <div className="card_layout">
      <div className="card_border">
        <div className="card">
          <div className="card_title">Сказачное заморское явство</div>
          <div className="card_brand_name">Нямушка</div>
          <div className="card_taste">с фуа-гра</div>
          <div className="card_offer">
            <span>10</span> порций
            <br />
            мышь в подарок
          </div>
          <div className="card_label_weight">
            <div className="card_label">
              <img alt="Foto cat" src={cat} />
              <div className="card_weight">
                <span>0,5</span>
                <br />
                кг
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card_footer">Чего сидишь? Порадуй котэ, купи.</div>
    </div>
  );
};

export default Card;
