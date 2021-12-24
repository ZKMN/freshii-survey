import { ICommonAnswers, TQuestion } from './types';

import { cvHealth, energy, immunity, memoryAttention, sleep, stress } from './cartAddQuestions';

export const cartQuestions = ({ maleOrWomen, ageWomen, yourDiet, healthPriorChoices }: ICommonAnswers): TQuestion[] => {
  const omegaOrOil = yourDiet === 'vegan' || yourDiet === 'vegetarian' ? 'OMEGA (VEGAN EPA-DHA)' : 'FISH OIL';

  const addQuestions = healthPriorChoices?.reduce<TQuestion[]>((acc, choice) => {

    if(choice.additionalQuestions) {
      acc = [...acc, ...choice.additionalQuestions];
    }

    return acc;
  }, []);

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
      vitaminsRemove: ['IRON 10mg, PM'],
    }, {
      title: 'Immunity',
      vitaminsAdd: [
        'PROBIOTIC',
        'VITAMIN D3 400ui, AM',
      ],
      additionalQuestions: immunity,
    }, {
      title: 'Memory & Attention',
      vitaminsAdd: [omegaOrOil],
      additionalQuestions: memoryAttention(omegaOrOil),
    }, {
      title: 'Energy',
      vitaminsAdd: ['B COMPLEX, AM'],
      additionalQuestions: sleep({
        ageWomen,
        maleOrWomen,
      }),
    }, {
      title: 'Sleep',
      vitaminsAdd: ['MELATONIN 5mg, PM'],
      additionalQuestions: energy,
    }, {
      title: 'Stress',
      vitaminsAdd: [
        'B COMPLEX, AM',
        'ASHWAGANDHA 250mg, AM',
      ],
      additionalQuestions: stress,
    }, {
      title: 'CV Health',
      vitaminsAdd: [omegaOrOil],
      additionalQuestions: cvHealth,
    }],
  },
  ...(addQuestions || []),
  {
    name: 'stub',
    type: 'radio',
    sectionName: 'stub',
    question: 'stub',
  }];
};