import { TQuestion } from './types';

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
      '+ VITAMIN D3 1000ui',
      '+ CALCIUM CITRATE 250 mg am + pm',
      '+2 Magnesium CITRATE 150 mg X2',
      '- MULTIVITAMIN',
    ],
  }],
}];

const femaleAdditionalQuestions: TQuestion[] = [{
  name: 'pregnant',
  type: 'radio',
  sectionName: 'Section',
  question: 'Are you planning on getting pregnant in the next 3-6 months, currently pregnant, or breastfeeding?',
  infoTooltip: 'You should always mention the natural supplements that you are taking to your healthcare provider  OR  Reach out to your healthcare provider to know more about the supplements that are right for you',
  variants: [
    { title: 'I am not Pregnant or not planning on getting pregnant in the next 3-6 months' },
    {
      title: 'Planning in getting pregnant in the next 3-6 months',
      vitamins: [
        '- TURMERIC',
        '+ PRENATAL MULTIVITAMIN, AM',
        '- MULTIVITAMIN',
        '+ OMEGA (VEGAN EPA-DHA) OR FISH OIL',
      ],
    }, {
      title: 'Currently Pregnant or Breast feeding',
      vitamins: [
        '- RHODIOLA',
        '- ASHWAGANDHA',
        '- PASSIONFLOWER',
        '- MELATONIN',
        '- VALERIAN',
        '+ PRENATAL MULTIVITAMIN, AM',
        '+ OMEGA (VEGAN EPA-DHA) OR FISH OIL',
      ],
    }],
}];

const femaleQuestions = (ageFemale: string): TQuestion[] => [{
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
      '+ VITAMIN D3 1000ui',
      '+ CALCIUM CITRATE 250 mg am + pm',
      '+ MAGNESIUM CITRATE 150 mg',
      '- MULTIVITAMIN',
    ],
  }],
},
...(ageFemale === '15-49' ? femaleAdditionalQuestions : []),
];

interface IConditionalQuestions {
  sex: 'Male' | 'Female';
  ageFemale: string;
  yourDiet: 'vegan' | 'vegetarian' | 'flexatarian' | 'pescatarian';
}

export const allQuestions = ({ sex, ageFemale, yourDiet }: IConditionalQuestions): TQuestion[] => {
  const maleOrWomen = sex === 'Male' ? 'Men' : 'Women';
  const omegaOrOil = yourDiet === 'vegan' || yourDiet === 'vegetarian' ? '+ OMEGA (VEGAN EPA-DHA)' : '+ FISH OIL';

  return [{
    name: 'name',
    type: 'text',
    sectionName: 'Section',
    question: 'What is your name?',
    vitamins: [
      '+ MULTIVITAMIN',
      '+ OMEGA (VEGAN EPA-DHA)',
      omegaOrOil,
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
  {
    name: 'fruitsOrVegetables',
    type: 'radio',
    sectionName: 'Section',
    question: 'How often do you eat 7-10 servings of fruits or vegetables per day? For reference, a serving size consists of ½ cup cooked vegetables, 1 cup raw leafy vegetables or 1 piece of fruit.',
    variants: [{
      title: 'Sometimes',
      vitamins: [
        `+ MULTIVITAMIN for ${maleOrWomen}`,
      ],
    }, {
      title: '1 or 2 two times',
      vitamins: [
        `+ MULTIVITAMIN for ${maleOrWomen}`,
      ],
    },
    { title: 'Everyday' },
    { title: 'Every second day' },
    ],
  }, {
    name: 'yourDiet',
    type: 'radio',
    sectionName: 'Section',
    question: 'Which of the following describes your diet?',
    variants: [{
      title: 'I am Vegetarian',
      vitamins: [
        '+ VITAMIN B12, 1000mcg, AM',
        '+ OMEGA (VEGAN EPA-DHA)',
        '- KERATIN, 10 mg, AM',
        '- FISH OIL',
        '- CERAMID, 5 mg glycosylceramides, AM',
      ],
    }, {
      title: 'I am Vegan',
      vitamins: [
        '+ VITAMIN B12, 1000mcg, AM',
        '+ OMEGA (VEGAN EPA-DHA)',
        '- KERATIN, 10 mg, AM',
        '- FISH OIL',
        '- CERAMID, 5 mg glycosylceramides, AM',
      ],
    },
    {
      title: 'I am Pescatarian',
      shortAnswer: 'pescatarian',
    },
    {
      title: 'I am Flexatarian (I’m trying to eat less meat!)',
      shortAnswer: 'flexatarian',
    }],
  },
  ...(yourDiet === 'flexatarian' ? [{
    name: 'flexatarian',
    type: 'buttons',
    sectionName: 'Section',
    question: 'I eat fish like salmon, mackarel, sardines at least twice a week.',
    variants: [{
      title: 'Yes',
      vitamins: [
        '- OMEGA (VEGAN EPA-DHA)' ,
        '- FISH OIL',
      ],
    },
    { title: 'No' }],
  }] as TQuestion[] : []),
  ...(yourDiet === 'pescatarian' ? [{
    name: 'pescatarian',
    type: 'buttons',
    sectionName: 'Section',
    question: 'I eat fish like salmon, mackarel, sardines at least twice a week.',
    variants: [{
      title: 'Yes',
      vitamins: [
        '- OMEGA (VEGAN EPA-DHA)' ,
        '- FISH OIL',
      ],
    },
    { title: 'No' }],
  }] as TQuestion[] : []),
  {
    name: 'dairyProducts,',
    type: 'buttons',
    sectionName: 'Section',
    question: ' I eat 2 servings of dairy products, soy milk, chia or sesame seeds, kale, spinach or tofu every day',
    variants: [
      { title: 'Yes' },
      {
        title: 'No',
        vitamins: ['+ CALCIUM CITRATE, 250 mg, AM'],
      }],
  }, {
    name: 'smoke',
    type: 'buttons',
    sectionName: 'Section',
    question: 'I smoke cigarettes.',
    variants: [{
      title: 'Yes',
      infoForModal: 'Recommendations on daily intake',
      vitamins: ['+ VITAMIN C, 250mg, AM'],
    },
    { title: 'No' }],
  }, {
    name: 'lookingBoost',
    type: 'buttons',
    sectionName: 'Section',
    question: 'Are you looking to boost your metabolism or manage your weight?',
    variants: [{
      title: 'Yes',
      vitamins: ['+ GREEN TEA EXTRACT, 400mg, AM'],
    },
    { title: 'No' }],
  },
  {
    name: 'stub',
    type: 'radio',
    sectionName: 'stub',
    question: 'stub',
  }];
};