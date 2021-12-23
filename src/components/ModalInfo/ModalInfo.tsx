import clsx from 'clsx';
import { Button, Row } from 'antd';

import styles from './ModalInfo.module.scss';

interface IModalInfo {
  content: React.ReactNode;
  showModal: boolean;
  toggleShowModal: () => void;
}

export const ModalInfo: React.FC<IModalInfo> = ({ content, showModal, toggleShowModal }) => {
  const modal = document.getElementById('modal');

  const modalWidth = modal?.offsetWidth || 0;
  const modalHeight = modal?.offsetHeight || 0;
  const surveyContainerHeight = 430;
  const windowWidth = window.innerWidth;

  const top = ((surveyContainerHeight - modalHeight) / 2 + window.pageYOffset) + 'px';
  const left = ((windowWidth - modalWidth) / 2 + window.pageXOffset) + 'px';

  return (
    <>
      <div className={clsx(styles.modalOverlay, showModal && styles.showOverlay)} />

      <div
        id='modal'
        className={clsx(styles.modal, showModal && styles.showModal)}
        style={{
          top,
          left,
        }}
      >
        <Row className={styles.modalHeader}>
          <p>Info</p>
        </Row>

        <Row className={styles.modalContent}>
          <p>
            {content}
          </p>
        </Row>

        <Row className={styles.modalFooter}>
          <Button
            block
            size='large'
            type='primary'
            onClick={toggleShowModal}
          >
          OKAY
          </Button>
        </Row>
      </div>
    </>

  );

};