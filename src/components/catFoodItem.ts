export type CatFoodItemType = {
  id: number;
  title: string;
  titleSelectedHover: string;
  brand: string;
  taste: string;
  offer: {
    count: string;
    serving: string;
    giftCount: string;
    gift: string;
  };
  img: any;
  foodWeight: string;
  foodUnit: string;
  footer: string;
  footerSelected: string;
  footerDisabled: string;
};
export const catFoodItem = [
  {
    id: 1,
    title: 'Сказачное заморское явство',
    titleSelectedHover: 'Котэ не одобряет?',
    brand: 'Нямушка',
    taste: 'с фуа-гра',
    offer: {
      count: '10',
      serving: 'порций',
      giftCount: '',
      gift: 'мышь в подарок',
    },
    img: require('../assets/img/Photo.png'),
    foodWeight: '0,5',
    foodUnit: 'кг',
    footer: 'Чего сидишь? Порадуй котэ, ',
    footerSelected: 'Печень утки разварная с артишоками.',
    footerDisabled: 'Печалька, с фуа-гра закончился.',
  },
  {
    id: 2,
    title: 'Сказачное заморское явство',
    titleSelectedHover: 'Котэ не одобряет?',
    brand: 'Нямушка',
    taste: 'с рыбой',
    offer: {
      count: '40',
      serving: 'порций',
      giftCount: '2',
      gift: 'мыши в подарок',
    },
    img: require('../assets/img/Photo.png'),
    foodWeight: '2',
    foodUnit: 'кг',
    footer: 'Чего сидишь? Порадуй котэ, ',
    footerSelected: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
    footerDisabled: 'Печалька, с рыбой закончился.',
  },
  {
    id: 3,
    title: 'Сказачное заморское явство',
    titleSelectedHover: 'Котэ не одобряет?',
    brand: 'Нямушка',
    taste: 'с курой',
    offer: {
      count: '100',
      serving: 'порций',
      giftCount: '5',
      gift: 'мышей в подарок заказчик доволен',
    },
    img: require('../assets/img/Photo.png'),
    foodWeight: '5',
    foodUnit: 'кг',
    footer: 'Чего сидишь? Порадуй котэ, ',
    footerSelected: 'Филе из цыплят с трюфелями в бульоне.',
    footerDisabled: 'Печалька, с курой закончился.',
  },
];
