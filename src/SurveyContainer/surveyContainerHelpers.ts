import { TContext } from './types';

const maleQuestions = [{
  name: 'ageMale',
  type: 'radio',
  sectionName: 'Section',
  question: 'What is your age?',
  variants: [
    { title: '< 16' },
    { title: '15-49' },
    {
      title: '> 50',
      vitamins: ['+Vitamin D3 1000ui', '+Calcium Citrate 250 mg am + pm', '+2* Magnesium Citrate 150 mg X2', '-Multivitamin'],
    }],
  onGoBack: (context: TContext) => {
    delete context.ageMale;
  },
}];

const femaleQuestions = [{
  name: 'ageFemale',
  type: 'radio',
  sectionName: 'Section',
  question: 'What is your age?',
  variants: [{ title: '< 16' }, { title: '15-49' }, { title: '> 50' }],
  onGoBack: (context: TContext) => {
    delete context.ageFemale;
  },
}];

export const questions = (data: { sex?: 'Male' | 'Female' }) => [{
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
},
...(data?.sex === 'Male' ? maleQuestions : []),
...(data?.sex === 'Female' ? femaleQuestions : []),
];