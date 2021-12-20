import { Progress, Row } from 'antd';

import styles from './Survey.module.scss';

export const Survey: React.FC = ({ children }) => (
  <div className={styles.surveyContainer}>
    <Progress
      percent={20}
      trailColor='#BDDFCB'
      showInfo={false}
      strokeColor={{
        from: '#F3D03E',
        to: '#87CDDB',
      }}
    />

    <div className={styles.surveySlide}>
      <Row justify='end' className={styles.page}>
        1/40
      </Row>

      {children}
    </div>
  </div>
);