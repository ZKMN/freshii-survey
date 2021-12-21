import { Col, Row, Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import { useContext, useEffect, useState } from 'react';

import { ModalInfo } from 'components';
import { Context, TQuestion } from 'SurveyContainer';

import { FieldByType } from './FieldByType';

import styles from './SurveyItem.module.scss';

interface ISurveyItem {
  title: string;
  question: TQuestion;
  activePage: boolean;
}

export const SurveyItem: React.FC<ISurveyItem> = ({ children, activePage, question, title } ) => {
  const [context] = useContext(Context);

  const [modalText, setModalText] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {

    if(question.type === 'radio' && context[question.name]?.answer) {
      const variantInfo = question.variants?.find(v => v.title === context[question.name].answer)?.infoForModal;

      if(variantInfo) {
        setModalText(variantInfo);
        setShowModal(true);
      }

    }

  }, [context[question.name]?.answer]);

  if(activePage) {
    return (
      <div className={styles.questionContainer}>
        <ModalInfo
          showModal={showModal}
          toggleShowModal={() => setShowModal(!showModal)}
          content={modalText}
        />

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
                <Row align='middle'>
                  <p className={styles.question}>{question.question}</p>

                  {question.infoTooltip && (
                    <Tooltip placement='bottom' title={question.infoTooltip}>
                      <InfoCircleOutlined style={{ fontSize: 20 }} />
                    </Tooltip>
                  )}
                </Row>

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