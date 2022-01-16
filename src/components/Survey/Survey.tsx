import { Progress, Row } from 'antd';

import styles from './Survey.module.scss';

interface ISurvey {
  currentPage: number;
  isLastQuestion: boolean;
}

export const Survey: React.FC<ISurvey> = ({ children, currentPage, isLastQuestion }) => {
  const MAX_QUESTIONS = isLastQuestion ? currentPage : 25;

  return (
    <div className={styles.surveyContainer}>
      <Progress
        percent={Math.round(100 - (((MAX_QUESTIONS - currentPage) / MAX_QUESTIONS) * 100))}
        trailColor='rgba(0, 0, 0, 0.05)'
        showInfo={false}
        strokeColor={{
          from: '#F3D03E',
          to: '#87CDDB',
        }}
      />

      <div className={styles.surveyQuestionWrapper}>
        <Row justify='end' className={styles.page}>
          {currentPage}/{MAX_QUESTIONS}
        </Row>

        {children}
      </div>
    </div>
  );
};