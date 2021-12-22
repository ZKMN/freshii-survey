import { TContext, TQuestion } from './types';

const maleQuestions: TQuestion[] = [{
  name: 'ageMale',
  type: 'radio',
  sectionName: 'Section',
  question: 'What is your age?',
  variants: [{
    title: '< 16',
    infoForModal: 'Freshii vitamin packs are only available if you’re over the age of 16. Please contact a healthcare provider for your specific health concerns.',
  },
  { title: '15-49' },
  {
    title: '> 50',
    vitamins: [
      '+ Vitamin D3 1000ui',
      '+ Calcium Citrate 250 mg am + pm',
      '+2 Magnesium Citrate 150 mg X2',
      '- Multivitamin',
    ],
  }],
  onGoBack: (context: TContext) => {
    delete context.ageMale;
  },
}];

const femaleAdditionalQuestions: TQuestion[] = [{
  name: 'pregnant',
  type: 'radio',
  sectionName: 'Section',
  question: 'Are you planning on getting pregnant in the next 3-6 months, currently pregnant, or breastfeeding?',
  infoTooltip: 'You should always mention the natural supplements that you are taking to your healthcare provider  OR  Reach out to your healthcare provider to know more about the supplements that are right for you',
  variants: [{ title: 'I am not Pregnant or not planning on getting pregnant in the next 3-6 months' },
    {
      title: 'Planning in getting pregnant in the next 3-6 months',
      vitamins: [
        '- TURMERIC',
        '+ Prenatal multivaitamin, AM',
        '+ OMEGA (VEGAN EPA-DHA) OR FISH OIL, 1200 mg, AM',
        '- Multivitamin',
      ],
    }, {
      title: 'Currently Pregnant or Breast feeding',
      vitamins: [
        '- Rhodiola',
        '- Ashwagandha',
        '- Passionflower',
        '- Melatonin',
        '- Valerian',
        '+ Prenatal multivaitamin, AM',
        '+ OMEGA (VEGAN EPA-DHA) OR FISH OIL, 1200 mg, AM',
      ],
    }],
}];

const femaleQuestions = (ageFemale?: string): TQuestion[] => [{
  name: 'ageFemale',
  type: 'radio',
  sectionName: 'Section',
  question: 'What is your age?',
  variants: [{
    title: '< 16',
    infoForModal: 'Freshii vitamin packs are only available if you’re over the age of 16. Please contact a healthcare provider for your specific health concerns.',
  },
  { title: '15-49' },
  {
    title: '> 50',
    vitamins: [
      '+ Vitamin D3 1000ui',
      '+ Calcium Citrate 250 mg am + pm',
      '+ Magnesium Citrate 150 mg',
      '- Multivitamin',
    ],
  }],
  onGoBack: (context: TContext) => {
    delete context.ageFemale;
  },
},
...(ageFemale === '15-49' ? femaleAdditionalQuestions : []),
];

interface IConditionalQuestions {
  sex: 'Male' | 'Female';
  ageFemale: string;
}

export const allQuestions = ({ sex, ageFemale }: IConditionalQuestions): TQuestion[] => [{
  name: 'name',
  type: 'text',
  sectionName: 'Section',
  question: 'What is your name?',
  vitamins: [
    '+ Multivitamin',
    '+ Omega',
    '+ OMEGA (VEGAN EPA-DHA) OR FISH OIL, 1200 mg, AM',
  ],
}, {
  name: 'sex',
  type: 'radio',
  sectionName: 'Section',
  question: 'What is your biological sex?',
  variants: [{ title: 'Male' }, { title: 'Female' }],
  infoTooltip: 'We need biological sex to determine the vitamins.',
},
...(sex === 'Male' ? maleQuestions : []),
...(sex === 'Female' ? femaleQuestions(ageFemale) : []),
];