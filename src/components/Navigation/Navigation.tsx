import { Row } from 'antd';

import styles from './Navigation.module.scss';

interface INavigation {
  page: number;
  pagesCount: number;
  setPage: (fn: (prevState: number) => number) => void;
}

export const Navigation = ({ page, pagesCount, setPage }: INavigation) => (
  <Row justify='space-between'>
    <button
      className={styles.backNav}
      onClick={() => setPage(prevState => prevState - 1)}
      disabled={page === 1}
    >
      back
    </button>

    <button
      className={styles.nextNav}
      onClick={() => setPage(prevState => prevState + 1)}
      disabled={page === pagesCount}
    >
      Continue
    </button>
  </Row>
);