import clsx from 'clsx';
import { Col, Row } from 'antd';

import { TQuestion } from 'SurveyContainer';

import styles from './SurveyItem.module.scss';

interface ISurveyItem {
  question: TQuestion;
  activePage: boolean;
}

export const SurveyItem: React.FC<ISurveyItem> = ({ children, activePage, question } ) => (
  <div className={clsx(styles.questionContainer, activePage && styles.active)}>
    <Row>
      <Col>
        <Row className={styles.questionSectionRow}>
          <p className={styles.questionSectionName}>{question.sectionName}</p>
        </Row>

        <Row className={styles.questionTitleRow}>
          <h1 className={styles.questionTitle}>{question.title}</h1>
        </Row>

        <Row>
          <p className={styles.question}>{question.question}</p>
        </Row>
      </Col>

      <Col>

      </Col>
    </Row>

    {children}
  </div>
);