import { immunity, memoryAttention } from './cartAddQuestions';
import { ICommonAnswers, TQuestion } from './types';

export const cartQuestions = ({ maleOrWomen, yourDiet, healthPriorChoices }: ICommonAnswers): TQuestion[] => {
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
      vitaminsRemove: ['IRON'],
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