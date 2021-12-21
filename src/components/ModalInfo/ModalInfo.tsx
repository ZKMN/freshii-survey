import clsx from 'clsx';
import { Button, Row } from 'antd';
import { CloseOutlined } from '@ant-design/icons';

import styles from './ModalInfo.module.scss';

interface IModalInfo {
  content: React.ReactNode;
  showModal: boolean;
  toggleShowModal: () => void;
}

export const ModalInfo: React.FC<IModalInfo> = ({ content, showModal, toggleShowModal }) => (
  <>
    <div className={clsx(styles.modalOverlay, showModal && styles.showOverlay)} />

    <div className={clsx(styles.modal, showModal && styles.showModal)}>
      <Row justify='space-between' className={styles.modalHeader}>
        <p>Info</p>

        <CloseOutlined style={{ fontSize: 20 }} onClick={toggleShowModal} />
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