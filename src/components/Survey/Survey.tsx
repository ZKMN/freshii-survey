import { Progress, Row } from 'antd';

import styles from './Survey.module.scss';

interface ISurvey {
  currentPage: number;
}

export const Survey: React.FC<ISurvey> = ({ children, currentPage }) => {
  const MAX_QUESTIONS = 25;

  return(
    <div className={styles.surveyContainer}>
      <Progress
        percent={Math.round(100 - (((MAX_QUESTIONS - (currentPage - 1)) / MAX_QUESTIONS) * 100))}
        trailColor='rgba(0, 0, 0, 0.05)'
        showInfo={false}
        strokeColor={{
          from: '#F3D03E',
          to: '#87CDDB',
        }}
      />

      <div className={styles.surveySlide}>
        <Row justify='end' className={styles.page}>
          {currentPage}/{MAX_QUESTIONS}
        </Row>

        {children}
      </div>
    </div>
  );
};