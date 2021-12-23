export type TQuestion = {
  name: string;
  type: 'radio' | 'text' | 'buttons' | 'checkboxes';
  infoTooltip?: string;
  sectionName: string;
  question: string;
  vitaminsAdd?: string[];
  threeCols?: boolean;
  isLastInSurvey?: boolean;
  variants?: {
    title: string;
    vitaminsAdd?: string[];
    vitaminsRemove?: string[];
    infoForModal?: string;
    shortAnswer?: string;
  }[];
};

export interface IConditionalQuestions {
  maleOrWomen: string;
  ageFemale: string;
  yourDiet: 'vegan' | 'vegetarian' | 'flexatarian' | 'pescatarian';
}

type TQuestionAnswer = {
  name: string;
  answer?: string;
  shortAnswer?: string;
  question: string;
  vitaminsAdd?: string[];
  vitaminsRemove?: string[];
  infoForModal?: string;
  choices?: {
    title: string;
    vitaminsAdd?: string[];
    vitaminsRemove?: string[];
    infoForModal?: string;
    isShowInfo?: boolean;
  }[];
}

export type TContext = { [key: string]: TQuestionAnswer }
export type TSetContext = (data: { [key: string]: TQuestionAnswer }) => void;