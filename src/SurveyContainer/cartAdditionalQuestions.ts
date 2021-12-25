import { ICommonAnswers, TQuestion } from './types';

export const immunity: TQuestion[] = [{
  name: 'catchColds',
  type: 'buttons',
  sectionName: 'Section',
  question: 'Do you catch colds, get the flu or have respiratory infections annually?',
  variants: [{
    title: 'Yes',
    vitaminsAdd: [
      'VITAMIN C 500mg',
      'ZINC SULFATE 100mg, AM',
      '+2 ECHINACEA PURPURA(6:1 root extract) 125mg/750mg, AM + PM',
    ],
  },
  { title: 'No' }],
}, {
  name: 'oftenAround',
  type: 'buttons',
  sectionName: 'Section',
  question: 'Are you often around young children, elderly people, or immunocompromised people?',
  variants: [{
    title: 'Yes',
    vitaminsAdd: [
      'VITAMIN C 500mg',
      'ZINC SULFATE 100mg, AM',
      '+2 ECHINACEA PURPURA(6:1 root extract) 125mg/750mg, AM + PM',
    ],
  },
  { title: 'No' }],
}, {
  name: 'oftenPublic',
  type: 'buttons',
  sectionName: 'Section',
  question: 'Do you often take public transportations or spend time in spaces where you are in close contact with large groups?',
  variants: [{
    title: 'Yes',
    vitaminsAdd: [
      'VITAMIN C 500mg',
      'ZINC SULFATE 100mg, AM',
      '+2 ECHINACEA PURPURA(6:1 root extract) 125mg/750mg, AM + PM',
    ],
  },
  { title: 'No' }],
}];

export const memoryAttention = (omegaOrOil: string): TQuestion[] => [{
  name: 'boostBrain',
  type: 'buttons',
  sectionName: 'Section',
  question: 'Do you want to boost your brain power?',
  variants: [{
    title: 'Yes',
    vitaminsAdd: ['GINKGO 60mg, AM'],
  },
  { title: 'No' }],
}, {
  name: 'troubleFocusing',
  type: 'buttons',
  sectionName: 'Section',
  question: 'Do you have troubles focusing, concentrating, and maintaining you attention?',
  variants: [{
    title: 'Yes',
    vitaminsAdd: [
      'RHODIOLA 300mg, AM',
      omegaOrOil,
    ],
  },
  { title: 'No' }],
}, {
  name: 'mostConcerned',
  type: 'buttons',
  sectionName: 'Section',
  question: 'Are you most concerned by your short-term memory and reaction time (brain fog)?',
  variants: [{
    title: 'Yes',
    vitaminsAdd: ['RHODIOLA 300mg, AM'],
  },
  { title: 'No' }],
}];

export const energy: TQuestion[] = [{
  name: 'feelWeak',
  type: 'buttons',
  sectionName: 'Section',
  question: 'Do you feel weak, fatigued, or find yourself tiring out easily?',
  variants: [{
    title: 'Yes',
    vitaminsAdd: ['ASHWAGANDHA 250mg, AM'],
  },
  { title: 'No' }],
}, {
  name: 'feelLess',
  type: 'buttons',
  sectionName: 'Section',
  question: 'Do you want to feel less burnt out?',
  variants: [{
    title: 'Yes',
    vitaminsAdd: ['RHODIOLA 300mg, AM'],
  },
  { title: 'No' }],
}, {
  name: 'ironBlood',
  type: 'buttons',
  sectionName: 'Section',
  question: 'Have you had your iron blood levels tested and received a recommendation to take iron supplements?',
  variants: [{
    title: 'Yes',
    infoForModal: 'Consult your pharamcist for the appropriate dose.',
  }, {
    title: 'No',
    vitaminsAdd: ['IRON 10mg, PM'],
  }],
}];

export const sleep = ({ ageWomen, maleOrWomen }: Omit<ICommonAnswers, 'yourDiet'>): TQuestion[] => {
  const magnesium = (ageWomen === '> 50' || maleOrWomen === 'MEN') ? '+2 MAGNESIUM 150mg, PM' : 'MAGNESIUM 150mg, PM';

  return [{
    name: 'oftenWake',
    type: 'buttons',
    sectionName: 'Section',
    question: 'Do you wake up often during the night or sleep only a few hours?',
    variants: [{
      title: 'Yes',
      vitaminsAdd: ['VALERIAN 500mg, PM'],
    },
    { title: 'No' }],
  }, {
    name: 'fallingAsleep',
    type: 'buttons',
    sectionName: 'Section',
    question: 'Do you have difficulties falling asleep?',
    variants: [{
      title: 'Yes',
      vitaminsAdd: [
        magnesium,
        'PASSIFLORA 500mg, PM',
      ],
    },
    { title: 'No' }],
  }, {
    name: 'oftenTired',
    type: 'buttons',
    sectionName: 'Section',
    question: 'Do you often feel tired or groggy upon waking up?',
    variants: [{
      title: 'Yes',
      vitaminsAdd: ['CHAMOMILE 350mg, PM'],
    },
    { title: 'No' }],
  }];
};

export const stress: TQuestion[] = [{
  name: 'oftenWorry',
  type: 'buttons',
  sectionName: 'Section',
  question: 'Do you often worry or feel anxious?',
  variants: [{
    title: 'Yes',
    vitaminsAdd: ['PASSIFLORA 500mg, PM'],
  },
  { title: 'No' }],
}, {
  name: 'feelStressed',
  type: 'buttons',
  sectionName: 'Section',
  question: 'Do you feel stressed because of specific situations (work assignments, exams, relationships, etc.)?',
  variants: [{
    title: 'Yes',
    vitaminsAdd: ['STRESS GUMMIES'],
  },
  { title: 'No' }],
}, {
  name: 'muscleTensions',
  type: 'buttons',
  sectionName: 'Section',
  question: 'Do you experience muscle tensions or feel restless when you are sitting or lying down?',
  variants: [{
    title: 'Yes',
    vitaminsAdd: ['MAGNESIUM 150mg, PM'],
  },
  { title: 'No' }],
}];

export const cvHealth: TQuestion[] = [{
  name: 'cardiovascular',
  type: 'radio',
  sectionName: 'Section',
  question: 'How often do you do cardiovascular exercise? Example: any activity that increases heart rate and respiration for over 20 minutes. Hint: sweating is a good indicator of a cardio workout!',
  variants: [{
    title: 'Rarely/Never',
    vitaminsAdd: [
      'VITAMIN C 500mg, AM',
      'GREEN TEA 400mg, AM',
    ],
  }, {
    title: '1/2 times a week',
    vitaminsAdd: [
      'VITAMIN C 500mg, AM',
      'GREEN TEA 400mg, AM',
    ],
  },
  { title: '3-4 days a week' },
  { title: 'More than 4 days a week' },
  ],
}, {
  name: 'familyHistory',
  type: 'buttons',
  sectionName: 'Section',
  question: 'Do you have a family history of heart diseases, high cholesterol or hypertension?',
  variants: [{
    title: 'Yes',
    vitaminsAdd: ['GARLIC 1500mg, AM'],
  },
  { title: 'No' }],
}, {
  name: 'highCholesterol',
  type: 'buttons',
  sectionName: 'Section',
  question: 'Do you have high cholesterol, heart problems or hypertension?',
  variants: [{
    title: 'Yes',
    vitaminsAdd: ['GARLIC 1500mg, AM'],
  },
  { title: 'No' }],
}];

export const jointHealth: TQuestion[] = [{
  name: 'jointsFeel',
  type: 'radio',
  sectionName: 'Section',
  question: 'Which of the following most accurately describes how your joints feel on a daily basis?',
  variants: [{
    title: 'Severe pain',
    vitaminsAdd: ['CHONDROITIN SULFATE 400mg, AM'],
  },
  { title: 'Mild pain' },
  { title: 'I dont have pain' },
  ],
}, {
  name: 'jointPain',
  type: 'buttons',
  sectionName: 'Section',
  question: 'Do you have exercise related joint pain?',
  variants: [{
    title: 'Yes',
    vitaminsAdd: ['COLLAGEN PEPTIDES 5g, AM'],
  },
  { title: 'No' }],
}, {
  name: 'jointStiffness',
  type: 'buttons',
  sectionName: 'Section',
  question: 'Do you have joint stiffness or restricted motion in your joints?',
  variants: [{
    title: 'Yes',
    vitaminsAdd: ['TURMERIC 1000mg, AM'],
  },
  { title: 'No' }],
}];