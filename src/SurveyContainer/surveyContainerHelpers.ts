export type TQuestion = {
  name: string;
  sectionName: string;
  title: string;
  question: string;
  type: string;
  variants?: string[];
};

export const questions = [{
  name: 'questionOne',
  sectionName: 'Section',
  title: 'Question 1',
  question: 'What is your name?',
  type: 'text',
}, {
  name: 'questionTwo',
  sectionName: 'Section',
  title: 'Question 2',
  question: 'What is your biological sex?',
  type: 'radio',
  variants: ['Male', 'Female'],
}];