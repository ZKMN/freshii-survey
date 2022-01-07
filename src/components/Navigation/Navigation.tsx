import { Row } from 'antd';
import { useContext } from 'react';

import { Context, ICommonAnswers, TQuestion } from 'SurveyContainer';

import { getSurveyVitamins } from './navigationHelpers';

import styles from './Navigation.module.scss';

interface INavigation {
  page: number;
  question: TQuestion;
  commonAnswers: ICommonAnswers;
  isLastQuestion: boolean;
  setPage: (fn: (prevState: number) => number) => void;
}

export const Navigation = ({ isLastQuestion, commonAnswers, question, page, setPage }: INavigation) => {
  const [context] = useContext(Context);

  const disableButton =
    (!context[question.name]?.answer && !context[question.name]?.choices?.length) ||
    context.ageWomen?.answer === '< 16' ||
    context.ageMale?.answer === '< 16';

  const handleSaveSurveyResult = () => sessionStorage.setItem('surveyResult', JSON.stringify(context));

  getSurveyVitamins(context, commonAnswers.yourDiet);

  return (
    <Row justify={page !== 1 ? 'space-between' : 'end'}>
      {page !== 1 && (
        <button
          className={styles.backNav}
          onClick={() => {
            delete context[question.name];

            setPage(prevState => prevState - 1);
          }}
        >
          back
        </button>
      )}

      <button
        className={styles.nextNav}
        onClick={isLastQuestion ? handleSaveSurveyResult : () => setPage(prevState => prevState + 1)}
        disabled={disableButton}
      >
        {isLastQuestion ? 'Submit' : 'Continue'}
      </button>
    </Row>
  );
};