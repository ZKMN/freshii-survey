export type TQuestion = {
  name: string;
  type: 'radio' | 'text' | 'buttons';
  infoTooltip?: string;
  sectionName: string;
  question: string;
  vitaminsAdd?: string[];
  isLastInSurvey?: boolean;
  variants?: {
    title: string;
    vitaminsAdd?: string[];
    vitaminsRemove?: string[];
    infoForModal?: string;
    shortAnswer?: string;
  }[];
  onGoBack?: (context: TContext) => void;
};

type TContextValue = {
  name: string;
  answer: string;
  shortAnswer?: string;
  question: string;
  vitaminsAdd?: string[];
  vitaminsRemove?: string[];
}

export type TContext = { [key: string]: TContextValue }
export type TSetContext = (data: { [key: string]: TContextValue }) => void;