import { Row } from 'antd';
import { useContext } from 'react';

import { Context, TQuestion } from 'SurveyContainer';

import styles from './Navigation.module.scss';

interface INavigation {
  page: number;
  question: TQuestion;
  setPage: (fn: (prevState: number) => number) => void;
}

export const Navigation = ({ question, page, setPage }: INavigation) => {
  const [context] = useContext(Context);

  const disableButton =
    (!context[question.name]?.answer && !context[question.name]?.choices?.length) ||
    context.ageWomen?.answer === '< 16' ||
    context.ageMale?.answer === '< 16';

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
        onClick={question.isLastInSurvey ? undefined : () => setPage(prevState => prevState + 1)}
        disabled={disableButton}
      >
        {question.isLastInSurvey ? 'Send' : 'Continue'}
      </button>
    </Row>
  );
};