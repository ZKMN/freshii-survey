import { IConditionalQuestions, TQuestion } from './types';

export const cartQuestions = ({ maleOrWomen, yourDiet }: IConditionalQuestions): TQuestion[] => {
  const omegaOrOil = yourDiet === 'vegan' || yourDiet === 'vegetarian' ? 'OMEGA (VEGAN EPA-DHA)' : 'FISH OIL';

  return [{
    name: 'healthPriorities',
    type: 'checkboxes',
    sectionName: 'Section',
    question: 'What are your top health priorities?',
    variants: [{
      title: 'General Health',
      vitaminsAdd: [
        'PROBIOTIC',
        `MULTIVITAMIN FOR ${maleOrWomen}`,
        omegaOrOil,
      ],
      vitaminsRemove: ['IRON'],
    }],
  }, {
    name: 'stub',
    type: 'radio',
    sectionName: 'stub',
    question: 'stub',
  }];
};