import { Row } from 'antd';

import styles from './Navigation.module.scss';

export const Navigation = () => (
  <Row justify='space-between'>
    <button className={styles.backNav}>back</button>

    <button className={styles.nextNav}>Continue</button>
  </Row>
);