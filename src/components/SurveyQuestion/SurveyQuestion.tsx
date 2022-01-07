import { Col, Row, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import React, { useContext, useEffect, useState } from 'react';

import { ModalInfo } from 'components';
import { Context, TQuestion } from 'SurveyContainer';

import { FieldByType } from './FieldByType';

import styles from './SurveyQuestion.module.scss';

interface ISurveyQuestion {
  title: string;
  question: TQuestion;
  activePage: boolean;
}

export const SurveyQuestion: React.FC<ISurveyQuestion> = React.memo(({ children, activePage, question, title } ) => {
  const [context] = useContext(Context);

  const [modalText, setModalText] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {

    if(context[question.name]?.infoForModal || context[question.name]?.choices) {
      const info = context[question.name].infoForModal;

      const infoChoice = context[question.name]?.choices?.find(choice => choice.infoForModal && choice.isShowInfo);
      const infoModalChoice = infoChoice?.infoForModal || '';

      if(info || infoModalChoice) {
        setModalText(info || infoModalChoice);
        setShowModal(true);
      }

      if(infoChoice && infoModalChoice) {
        infoChoice.isShowInfo = false;
      }

    }

  }, [context[question.name]?.infoForModal, context[question.name]?.choices?.length]);

  if(activePage) {
    return (
      <div className={styles.questionContainer}>
        <ModalInfo
          content={modalText}
          showModal={showModal}
          toggleShowModal={() => setShowModal(!showModal)}
        />

        <Row className={styles.questionMobileRow}>
          <Col flex={1}>
            <Row className={styles.questionSectionRow}>
              <p className={styles.questionSectionName}>{question.sectionName}</p>
            </Row>

            <Row>

              <Col xs={24} lg={10} className={styles.questionTitleContainer}>
                <Row className={styles.questionTitleRow}>
                  <h1 className={styles.questionTitle}>{title}</h1>
                </Row>

                <Row wrap={false}>
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

              <Col
                xs={24}
                lg={14}
                className={styles.questionAnswersContainer}
              >
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
});