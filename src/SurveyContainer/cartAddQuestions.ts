import { TQuestion } from './types';

export const immunity: TQuestion[] = [{
  name: 'catchColds',
  type: 'buttons',
  sectionName: 'Section',
  question: 'Do you catch colds, get the flu or have respiratory infections annually?',
  variants: [{
    title: 'Yes',
    vitaminsAdd: [
      'VITAMIN C 500mg',
      'ZINC SULFATE,100mg,AM',
      '+2 ECHINACEA PURPURA(6:1 root extract) 125 mg / 750 mg, (AM&PM)',
    ],
  },
  { title: 'No' }],
}, {
  name: 'oftenAround',
  type: 'buttons',
  sectionName: 'Section',
  question: 'Are you often around young children, elderly people, or immunocompromised people?',
  variants: [
    { title: 'Yes' },
    { title: 'No' }],
}, {
  name: 'oftenPublic',
  type: 'buttons',
  sectionName: 'Section',
  question: 'Do you often take public transportations or spend time in spaces where you are in close contact with large groups?',
  variants: [
    { title: 'Yes' },
    { title: 'No' }],
}];

export const memoryAttention = (omegaOrOil: string): TQuestion[] => [{
  name: 'boostBrain',
  type: 'buttons',
  sectionName: 'Section',
  question: 'Do you want to boost your brain power?',
  variants: [{
    title: 'Yes',
    vitaminsAdd: ['GINKGO 60mg, AM'],
  },
  { title: 'No' }],
}, {
  name: 'troubleFocusing',
  type: 'buttons',
  sectionName: 'Section',
  question: 'Do you have have troubles focusing, concentrating, and maintaining you attention?',
  variants: [{
    title: 'Yes',
    vitaminsAdd: [
      'RHODIOLA 300mg, AM',
      omegaOrOil,
    ],
  },
  { title: 'No' }],
}, {
  name: 'mostConcerned',
  type: 'buttons',
  sectionName: 'Section',
  question: 'Are you most concerned by your short-term memory and reaction time (brain fog)?',
  variants: [{
    title: 'Yes',
    vitaminsAdd: ['RHODIOLA 300mg, AM'],
  },
  { title: 'No' }],
}];