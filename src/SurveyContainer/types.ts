export type TQuestion = {
  name: string;
  type: 'radio' | 'text';
  infoTooltip?: string;
  sectionName: string;
  question: string;
  vitamins?: string[];
  isLastInSurvey?: boolean;
  variants?: {
    title: string;
    vitamins?: string[];
    infoForModal?: string;
  }[];
  onGoBack?: (context: TContext) => void;
};

type TContextValue = {
  name: string;
  answer: string;
  question: string;
  vitamins?: string[];
}

export type TContext = { [key: string]: TContextValue }
export type TSetContext = (data: { [key: string]: TContextValue }) => void;