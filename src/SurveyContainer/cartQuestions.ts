import { ICommonAnswers, TQuestion } from './types';

import {
  boneHealth, cvHealth, digestiveWellness, energy, hair, immunity,
  jointHealth, memoryAttention, nails, skin, sleep, stress,
} from './cartAdditionalQuestions';

export const cartQuestions = ({ maleOrWomen, ageWomen, healthPriorChoices }: ICommonAnswers): TQuestion[] => {
  const magnesium = (ageWomen === '> 50' || maleOrWomen === 'MEN') ? '+2 MAGNESIUM 150mg, PM' : 'MAGNESIUM 150mg, PM';

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
    colMdSpan: healthPriorChoices.length > 6 ? 8 : 12,
    variants: healthPriorChoices.map(choice => ({ title: choice.title })),
  }] : [];

  return [{
    name: 'healthPriorities',
    type: 'checkboxes',
    sectionName: 'Section',
    question: 'What are your top health priorities?',
    colMdSpan: 8,
    variants: [{
      title: 'General Health',
      vitaminsAdd: [
        'PROBIOTICS, AM',
        `MULTIVITAMIN FOR ${maleOrWomen}`,
        'OMEGA (VEGAN EPA-DHA) OR FISH OIL 1200mg, AM',
      ],
      vitaminsRemove: ['IRON 10mg, PM'],
    }, {
      title: 'Immunity',
      vitaminsAdd: [
        'PROBIOTICS, AM',
        'VITAMIN D3 400ui, AM',
      ],
      additionalQuestions: immunity,
    }, {
      title: 'Memory & Attention',
      vitaminsAdd: ['OMEGA (VEGAN EPA-DHA) OR FISH OIL 1200mg, AM'],
      additionalQuestions: memoryAttention,
    }, {
      title: 'Energy',
      vitaminsAdd: ['B COMPLEX, AM'],
      additionalQuestions: energy,
    }, {
      title: 'Sleep',
      vitaminsAdd: ['MELATONIN 5mg, PM'],
      additionalQuestions: sleep(magnesium),
    }, {
      title: 'Stress',
      vitaminsAdd: [
        'B COMPLEX, AM',
        'ASHWAGANDHA 250mg, AM',
      ],
      additionalQuestions: stress,
    }, {
      title: 'CV Health',
      vitaminsAdd: ['OMEGA (VEGAN EPA-DHA) OR FISH OIL 1200mg, AM'],
      additionalQuestions: cvHealth,
    }, {
      title: 'Joint Health',
      vitaminsAdd: [
        'OMEGA (VEGAN EPA-DHA) OR FISH OIL 1200mg, AM',
        'GLUCOSAMINE 500mg, AM',
      ],
      additionalQuestions: jointHealth,
    }, {
      title: 'Bone Health',
      vitaminsAdd: [
        'VITAMIN D3 1000ui, AM',
        'CALCIUM CITRATE 250mg, AM OR CARBONATE 500mg, AM',
        '+2 MAGNESIUM CITRATE 150mg, PM',
      ],
      additionalQuestions: boneHealth(magnesium),
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
    name: 'submitSurvey',
    type: null,
    sectionName: 'Section',
    title: 'Create your personalized recommendation',
    question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  }];
};