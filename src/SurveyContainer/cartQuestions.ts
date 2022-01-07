import { ICommonAnswers, TQuestion } from './types';

import {
  boneHealth, cvHealth, digestiveWellness, energy, hair, immunity,
  jointHealth, memoryAttention, nails, skin, sleep, stress,
} from './cartAdditionalQuestions';

export const cartQuestions = ({ maleOrWomen, ageWomen, yourDiet, healthPriorChoices }: ICommonAnswers): TQuestion[] => {
  const omegaOrOil = yourDiet === 'vegan' || yourDiet === 'vegetarian' ? 'OMEGA (VEGAN EPA-DHA)' : 'FISH OIL 1200mg, AM';

  const allAdditionalQuestions = healthPriorChoices?.reduce<TQuestion[]>((acc, choice) => {

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
    colsMdSpan: healthPriorChoices.length > 6 ? 8 : 12,
    variants: healthPriorChoices.map(choice => ({ title: choice.title })),
  }] : [];

  return [{
    name: 'healthPriorities',
    type: 'checkboxes',
    sectionName: 'Section',
    question: 'What are your top health priorities?',
    colsMdSpan: 8,
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
      additionalQuestions: energy,
    }, {
      title: 'Sleep',
      vitaminsAdd: ['MELATONIN 5mg, PM'],
      additionalQuestions: sleep({
        ageWomen,
        maleOrWomen,
      }),
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
    }, {
      title: 'Bone Health',
      vitaminsAdd: [
        'VITAMIN D3 1000ui, AM',
        'CALCIUM CITRATE OR CARBONATE 500mg, AM',
        '+2 MAGNESIUM CITRATE 150mg, PM',
      ],
      additionalQuestions: boneHealth({
        ageWomen,
        maleOrWomen,
      }),
    }, {
      title: 'Skin',
      vitaminsAdd: ['COLLAGEN PEPTIDES 5mg, AM'],
      additionalQuestions: skin,
    }, {
      title: 'Hair',
      vitaminsAdd: ['COLLAGEN PEPTIDES 5mg, AM'],
      additionalQuestions: hair,
    }, {
      title: 'Nails',
      vitaminsAdd: ['COLLAGEN PEPTIDES 5mg, AM'],
      additionalQuestions: nails,
    }, {
      title: 'Digestive wellness',
      vitaminsAdd: ['PROBIOTICS, AM'],
      additionalQuestions: digestiveWellness,
    }],
  },
  ...highestPriority,
  ...allAdditionalQuestions,
  {
    name: 'stub',
    type: 'radio',
    sectionName: 'stub',
    question: 'stub',
  }];
};