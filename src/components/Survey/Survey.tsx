import { Progress, Row } from 'antd';

import styles from './Survey.module.scss';

interface ISurvey {
  currentPage: number;
  pagesCount: number;
}

export const Survey: React.FC<ISurvey> = ({ children, currentPage, pagesCount }) => (
  <div className={styles.surveyContainer}>
    <Progress
      percent={Math.round(100 - (((pagesCount - (currentPage - 1)) / pagesCount) * 100))}
      trailColor='rgba(0, 0, 0, 0.05)'
      showInfo={false}
      strokeColor={{
        from: '#F3D03E',
        to: '#87CDDB',
      }}
    />

    <div className={styles.surveySlide}>
      <Row justify='end' className={styles.page}>
        {currentPage}/{pagesCount}
      </Row>

      {children}
    </div>
  </div>
);