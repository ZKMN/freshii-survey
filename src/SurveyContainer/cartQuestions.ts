import { ICommonAnswers, TQuestion } from './types';

import { cvHealth, energy, immunity, jointHealth, memoryAttention, sleep, stress } from './cartAdditionalQuestions';

export const cartQuestions = ({ maleOrWomen, ageWomen, yourDiet, healthPriorChoices }: ICommonAnswers): TQuestion[] => {
  const omegaOrOil = yourDiet === 'vegan' || yourDiet === 'vegetarian' ? 'OMEGA (VEGAN EPA-DHA)' : 'FISH OIL 1200mg, AM';

  const additionalQuestions = healthPriorChoices?.reduce<TQuestion[]>((acc, choice) => {

    if(choice.additionalQuestions) {
      acc = [...acc, ...choice.additionalQuestions];
    }

    return acc;
  }, []) || [];

  const highestPriority: TQuestion[] = (healthPriorChoices && healthPriorChoices.length > 4) ? [{
    name: 'highestPriority',
    type: 'radio',
    sectionName: 'Section',
    question: 'Which priority is at the top of your list?',
    variants: healthPriorChoices.map(choice => ({ title: choice.title })),
  }] : [];

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
    }, {
      title: 'Joint Health',
      vitaminsAdd: [
        omegaOrOil,
        'GLUCOSAMINE 500mg, AM',
      ],
      additionalQuestions: jointHealth,
    }],
  },
  ...highestPriority,
  ...additionalQuestions,
  {
    name: 'stub',
    type: 'radio',
    sectionName: 'stub',
    question: 'stub',
  }];
};