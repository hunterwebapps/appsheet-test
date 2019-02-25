import React, { memo } from 'react';
import styles from './Layout.module.css';

function Layout({ children }) {
  return (
    <div className={styles['container']}>
      {children}
    </div>
  );
}

export default memo(Layout);
