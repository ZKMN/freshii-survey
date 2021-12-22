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

    if((question.type === 'radio' || question.type === 'buttons') && context[question.name]?.answer) {
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

        <Row className={styles.questionMobileRow}>
          <Col flex={1}>
            <Row className={styles.questionSectionRow}>
              <p className={styles.questionSectionName}>{question.sectionName}</p>
            </Row>

            <Row className={styles.questionTitleRow}>
              <h1 className={styles.questionTitle}>{title}</h1>
            </Row>

            <Row gutter={{
              xs: 0,
              lg: 80,
            }}
            >
              <Col xs={24} lg={10} className={styles.questionMobileRow}>

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

              <Col flex={1}>
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