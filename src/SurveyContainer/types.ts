type TChoice = {
  title: string;
  vitaminsAdd?: string[];
  vitaminsRemove?: string[];
  infoForModal?: string;
  isShowInfo?: boolean;
  additionalQuestions?: TQuestion[];
}

type TQuestionAnswer = {
  name: string;
  answer?: string;
  shortAnswer?: string;
  question: string;
  vitaminsAdd?: string[];
  vitaminsRemove?: string[];
  infoForModal?: string;
  choices?: TChoice[];
}

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
    additionalQuestions?: TQuestion[];
  }[];
};

export interface ICommonAnswers {
  maleOrWomen: string;
  yourDiet: 'vegan' | 'vegetarian' | 'flexatarian' | 'pescatarian';
  ageWomen?: string;
  healthPriorChoices?: TChoice[];
}

export type TContext = { [key: string]: TQuestionAnswer }
export type TSetContext = (data: { [key: string]: TQuestionAnswer }) => void;