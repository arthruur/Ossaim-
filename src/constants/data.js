import images from './images';

const wines = [
  {
    title: 'Baden Baden',
    price: 'R$ 24',
    tags: 'Witbier, Ippa',
  },
  {
    title: 'Heineken',
    price: 'R$ 18',
    tags: '600ml',
  },
  {
    title: 'Amstel',
    price: 'R$ 12',
    tags: '600ml',
  },
  {
    title: 'Heineken',
    price: 'R$ 12',
    tags: 'Longneck',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '$20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '$16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '$10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '$31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '$26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award01,
    title: 'Projeto de Pesquisa da UEFS',
    subtitle: 'Sugerido por Natan Ourives.'
  },
  {
    imgUrl: images.award01,
    title: 'Automatizar o processo de consulta dos artigos.',
    subtitle: 'Sugerido por Arthur Teles',
  },
  {
    imgUrl: images.award01,
    title: 'Automatizar o processo de consulta das leis.',
    subtitle: 'Sugerido por Arthur Teles',
  },

];

export default { wines, cocktails, awards };
