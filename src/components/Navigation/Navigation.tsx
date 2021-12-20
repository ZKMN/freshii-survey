import { Row } from 'antd';
import { useContext } from 'react';

import { Context, TQuestion } from 'SurveyContainer';

import styles from './Navigation.module.scss';

interface INavigation {
  page: number;
  pagesCount: number;
  question: TQuestion;
  setPage: (fn: (prevState: number) => number) => void;
}

export const Navigation = ({ question, page, pagesCount, setPage }: INavigation) => {
  const [context] = useContext(Context);

  return (
    <Row justify={page !== 1 ? 'space-between' : 'end'}>
      {page !== 1 && (
        <button
          className={styles.backNav}
          onClick={() => {
            if(question.onGoBack) {
              question.onGoBack(context);
            }

            setPage(prevState => prevState - 1);
          }}
        >
          back
        </button>
      )}

      <button
        className={styles.nextNav}
        onClick={() => setPage(prevState => prevState + 1)}
        disabled={!context[question.name]?.answer}
      >
        {page === pagesCount ? 'Send' : 'Continue'}
      </button>
    </Row>
  );
};