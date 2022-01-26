const initialState = [
  {
    id: 1,
    title: 'Commics',
    image:
      'https://i.pinimg.com/originals/c7/c7/41/c7c7412fe770f16685f1c1f7a39ee357.jpg',
    background: '#9c9c9c',
    color: '#282828',
  },
  {
    id: 2,
    title: 'Cuentos',
    image: 'https://visme.co/blog/wp-content/uploads/2016/01/16.jpg',
    background: '#b5936f',
    color: '#fbfbfb',
  },
  {
    id: 3,
    title: 'Derechos',
    image:
      'https://img.pngio.com/earth-surrounded-by-children-illustration-universal-declaration-declaration-of-the-rights-of-the-child-png-587_596.jpg',
    background: '#248A34',
    color: '#fbfbfb',
  },
  {
    id: 4,
    title: 'Deberes',
    image:
      'https://c8.alamy.com/comp/BR7TPE/an-graphic-representation-of-a-dad-helping-his-son-with-homework-BR7TPE.jpg',
    background: '#3383FF',
    color: '#fbfbfb',
  },
];
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
export default categoryReducer;
