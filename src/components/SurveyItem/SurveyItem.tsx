import { Col, Row } from 'antd';

import { TQuestion } from 'SurveyContainer';

import { FieldByType } from './FieldByType';

import styles from './SurveyItem.module.scss';

interface ISurveyItem {
  title: string;
  question: TQuestion;
  activePage: boolean;
}

export const SurveyItem: React.FC<ISurveyItem> = ({ children, activePage, question, title } ) => {

  if(activePage) {
    return (
      <div className={styles.questionContainer}>
        <Row>
          <Col flex={1}>
            <Row className={styles.questionSectionRow}>
              <p className={styles.questionSectionName}>{question.sectionName}</p>
            </Row>

            <Row className={styles.questionTitleRow}>
              <h1 className={styles.questionTitle}>{title}</h1>
            </Row>

            <Row>
              <Col xs={24} lg={8}>
                <p className={styles.question}>{question.question}</p>
              </Col>

              <Col xs={24} lg={6}>
                <FieldByType question={question} />
              </Col>
            </Row>
          </Col>

        </Row>

        {children}
      </div>
    );
  }

  return null;
};