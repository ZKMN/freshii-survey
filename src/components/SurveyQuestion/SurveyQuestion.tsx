import { Col, Row, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useContext, useEffect, useState } from 'react';

import { ModalInfo } from 'components';
import { Context, TQuestion } from 'SurveyContainer';

import { FieldByType } from './FieldByType';

import styles from './SurveyQuestion.module.scss';

interface ISurveyQuestion {
  title: string;
  question: TQuestion;
  activePage: boolean;
}

export const SurveyQuestion: React.FC<ISurveyQuestion> = ({ children, activePage, question, title } ) => {
  const [context] = useContext(Context);

  const [modalText, setModalText] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {

    if(context[question.name]?.infoForModal) {
      const info = context[question.name].infoForModal;

      if(info) {
        setModalText(info);
        setShowModal(true);
      }

    }

  }, [context[question.name]?.infoForModal]);

  if(activePage) {
    return (
      <div className={styles.questionContainer}>
        <ModalInfo
          showModal={showModal}
          toggleShowModal={() => setShowModal(!showModal)}
          content={modalText}
        />

        <Row className={styles.questionMobileRow}>
          <Col flex={1}>
            <Row className={styles.questionSectionRow}>
              <p className={styles.questionSectionName}>{question.sectionName}</p>
            </Row>

            <Row
              gutter={{
                xs: 0,
                lg: 80,
              }}
            >

              <Col xs={24} lg={10} className={styles.questionMobileRow}>
                <Row className={styles.questionTitleRow}>
                  <h1 className={styles.questionTitle}>{title}</h1>
                </Row>

                <Row>
                  {question.infoTooltip && (
                    <Col style={{ marginRight: 10 }}>
                      <Tooltip placement='right' title={question.infoTooltip}>
                        <InfoCircleOutlined style={{ fontSize: 20 }} />
                      </Tooltip>
                    </Col>
                  )}
                  <Col>
                    <p className={styles.question}>{question.question}</p>
                  </Col>
                </Row>
              </Col>

              <Col xs={24} lg={14}>
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