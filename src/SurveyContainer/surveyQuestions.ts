import { TContext, TQuestion } from './types';

const maleQuestions: TQuestion[] = [{
  name: 'ageMale',
  type: 'radio',
  sectionName: 'Section',
  question: 'What is your age?',
  variants: [
    {
      title: '< 16',
      infoForModal: 'Freshii vitamin packs are only available if you’re over the age of 16. Please contact a healthcare provider for your specific health concerns.',
    },
    { title: '15-49' },
    {
      title: '> 50',
      vitamins: [
        '+Vitamin D3 1000ui',
        '+Calcium Citrate 250 mg am + pm',
        '+2* Magnesium Citrate 150 mg X2',
        '-Multivitamin',
      ],
    }],
  onGoBack: (context: TContext) => {
    delete context.ageMale;
  },
}];

const femaleQuestions: TQuestion[] = [{
  name: 'ageFemale',
  type: 'radio',
  sectionName: 'Section',
  question: 'What is your age?',
  variants: [{
    title: '< 16',
    infoForModal: 'Freshii vitamin packs are only available if you’re over the age of 16. Please contact a healthcare provider for your specific health concerns.',
  },
  { title: '15-49' },
  { title: '> 50' },
  ],
  onGoBack: (context: TContext) => {
    delete context.ageFemale;
  },
}];

export const allQuestions = (data: { sex?: 'Male' | 'Female' }): TQuestion[] => [{
  name: 'name',
  type: 'text',
  sectionName: 'Section',
  question: 'What is your name?',
  vitamins: [''],
}, {
  name: 'sex',
  type: 'radio',
  sectionName: 'Section',
  question: 'What is your biological sex?',
  variants: [{ title: 'Male' }, { title: 'Female' }],
  infoTooltip: 'We need biological sex to determine the vitamins.',
},
...(data?.sex === 'Male' ? maleQuestions : []),
...(data?.sex === 'Female' ? femaleQuestions : []),
];