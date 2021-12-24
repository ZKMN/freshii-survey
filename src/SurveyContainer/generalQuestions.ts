import { IConditionalQuestions, TQuestion } from './types';

const menQuestions: TQuestion[] = [{
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
    vitaminsAdd: [
      'VITAMIN D3 1000ui',
      'CALCIUM CITRATE 250 mg am + pm',
      '+2 Magnesium CITRATE 150 mg X2',
    ],
    vitaminsRemove: ['MULTIVITAMIN FOR MEN'],
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
      vitaminsAdd: [
        'PRENATAL MULTIVITAMIN, AM',
        'OMEGA (VEGAN EPA-DHA) OR FISH OIL',
      ],
      vitaminsRemove: ['TURMERIC'],
    }, {
      title: 'Currently Pregnant or Breast feeding',
      vitaminsAdd: [
        'PRENATAL MULTIVITAMIN, AM',
        'OMEGA (VEGAN EPA-DHA) OR FISH OIL',
      ],
      vitaminsRemove: [
        'RHODIOLA',
        'ASHWAGANDHA',
        'PASSIONFLOWER',
        'MELATONIN',
        'VALERIAN',
      ],
    }],
}];

const womenQuestions = (ageWomen?: string): TQuestion[] => [{
  name: 'ageWomen',
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
    vitaminsAdd: [
      'VITAMIN D3 1000ui',
      'CALCIUM CITRATE 250 mg am + pm',
      'MAGNESIUM CITRATE 150 mg',
    ],
    vitaminsRemove: ['MULTIVITAMIN FOR WOMEN'],
  }],
},
...(ageWomen === '15-49' ? femaleAdditionalQuestions : []),
];

export const generalQuestions = ({ maleOrWomen, ageWomen, yourDiet }: IConditionalQuestions): TQuestion[] => [{
  name: 'name',
  type: 'text',
  sectionName: 'Section',
  question: 'What is your name?',
  vitaminsAdd: [
    'MULTIVITAMIN',
    'OMEGA (VEGAN EPA-DHA) OR FISH OIL',
  ],
}, {
  name: 'sex',
  type: 'radio',
  sectionName: 'Section',
  question: 'What is your biological sex?',
  variants: [{ title: 'Male' }, { title: 'Female' }],
  infoTooltip: 'We need biological sex to determine the vitaminsAdd.',
},
...(maleOrWomen === 'MEN' ? menQuestions : []),
...(maleOrWomen === 'WOMEN' ? womenQuestions(ageWomen) : []),
{
  name: 'fruitsOrVegetables',
  type: 'radio',
  sectionName: 'Section',
  question: 'How often do you eat 7-10 servings of fruits or vegetables per day? For reference, a serving size consists of ½ cup cooked vegetables, 1 cup raw leafy vegetables or 1 piece of fruit.',
  variants: [{
    title: 'Sometimes',
    vitaminsAdd: [`MULTIVITAMIN FOR ${maleOrWomen}`],
  }, {
    title: '1 or 2 two times',
    vitaminsAdd: [`MULTIVITAMIN FOR ${maleOrWomen}`],
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
    vitaminsAdd: ['VITAMIN B12, 1000mcg, AM'],
    vitaminsRemove: [
      'KERATIN, 10 mg, AM',
      'FISH OIL',
      'CERAMID, 5 mg GLYCOSYLCERAMIDES, AM',
    ],
  }, {
    title: 'I am Vegan',
    vitaminsAdd: ['VITAMIN B12, 1000mcg, AM'],
    vitaminsRemove: [
      'KERATIN, 10 mg, AM',
      'FISH OIL',
      'CERAMID, 5 mg GLYCOSYLCERAMIDES, AM',
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
    vitaminsRemove: [
      'OMEGA (VEGAN EPA-DHA)' ,
      'FISH OIL',
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
    vitaminsRemove: [
      'OMEGA (VEGAN EPA-DHA)' ,
      'FISH OIL',
    ],
  },
  { title: 'No' }],
}] as TQuestion[] : []),
{
  name: 'dairyProducts,',
  type: 'buttons',
  sectionName: 'Section',
  question: 'I eat 2 servings of dairy products, soy milk, chia or sesame seeds, kale, spinach or tofu every day.',
  variants: [
    { title: 'Yes' },
    {
      title: 'No',
      vitaminsAdd: ['CALCIUM CITRATE, 250 mg, AM'],
    }],
}, {
  name: 'smoke',
  type: 'buttons',
  sectionName: 'Section',
  question: 'I smoke cigarettes.',
  variants: [{
    title: 'Yes',
    infoForModal: 'Recommendations on daily intake',
    vitaminsAdd: ['VITAMIN C, 250mg, AM'],
  },
  { title: 'No' }],
}, {
  name: 'lookingBoost',
  type: 'buttons',
  sectionName: 'Section',
  question: 'Are you looking to boost your metabolism or manage your weight?',
  variants: [{
    title: 'Yes',
    vitaminsAdd: ['GREEN TEA EXTRACT, 400mg, AM'],
  },
  { title: 'No' }],
}, {
  name: 'intollerantAllergic',
  type: 'checkboxes',
  sectionName: 'Section',
  question: 'I am intolerant or allergic to some of these dietary components. We will make sure the supplements we recommend are free of these allergens.',
  variants: [
    { title: 'Lactose' },
    { title: 'Gluten' },
    { title: 'Egg' },
    { title: 'Soy' },
    { title: 'Any kind of nuts' },
    { title: 'Shellfish' },
  ],
}, {
  name: 'spendMajorg',
  type: 'buttons',
  sectionName: 'Section',
  question: 'I spend the majority of my time from November to March in Canada. Understanding your lifestyle will help us to make an informed vitamin D recommendation.',
  variants: [{
    title: 'Yes',
    vitaminsAdd: ['VITAMIN D3 1000ui'],
  },
  { title: 'No' }],
}, {
  name: 'medications',
  type: 'checkboxes',
  threeCols: true,
  sectionName: 'Section',
  question: 'Do you have any of these conditions or take any of these medications?',
  variants: [{
    title: 'Lithium',
    vitaminsRemove: ['CALCIUM'],
  }, {
    title: 'Antibiotics',
    vitaminsAdd: ['PROBIOTICS'],
  }, {
    title: 'Dementia',
    vitaminsRemove: ['Melatonin'],
  }, {
    title: 'Thyroid hormones',
    vitaminsRemove: ['ASHWAGANDHA'],
    infoForModal: 'Allow a delay of 2 hours before or after taking Calcium and Magnesium, Zinc',
  }, {
    title: 'Liver disease',
    vitaminsRemove: ['GREENTEA EXTRACT'],
  }, {
    title: 'Diuretics',
    infoForModal: 'Consult your Pharamacist before taking Magnesium',
  }, {
    title: 'Osteoporosis or take biphosphonates',
    vitaminsAdd: ['VITAMIN D3 100ui'],
  }, {
    title: 'HTA or High Blood Pressure medication',
    vitaminsRemove: [
      'GREENTEA EXTRACT',
      'GINSENG',
    ],
  }, {
    title: 'Chohn Disease or Celiac Disease',
    vitaminsAdd: ['VITAMIN D3 1000ui'],
  }, {
    title: 'Epilepsy',
    vitaminsRemove: ['Melatonin'],
  }, {
    title: 'Immunosuppresion or Cancer',
    infoForModal: 'Based on your condition, it is safe that you consult your healthcare provider for a supplements recommendation that is right for you.',
  }, {
    title: 'Blood thinner, Anticoagulants (ie. warfarin, NOAC) or Antiplatelets (ie. aspirin, ASA)',
    vitaminsRemove: [
      'GARLIC',
      'OMEGA (VEGAN EPA-DHA)',
      'TURMERIC',
      'GINGKO',
      'GINGER',
    ],
  }],
}];