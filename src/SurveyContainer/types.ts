export type TQuestion = {
  name: string;
  type: string;
  sectionName: string;
  question: string;
  variants?: { title: string; vitamins?: string[] }[];
  vitamins?: string[];
  onGoBack?: (context: any) => void;
};

type TContextValue = {
  name: string;
  answer: string;
  question: string;
  vitamins?: string[];
}

export type TContext = { [key: string]: TContextValue }
export type TSetContext = (data: { [key: string]: TContextValue }) => void;