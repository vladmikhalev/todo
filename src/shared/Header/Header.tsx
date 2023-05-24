import React from 'react';
import styles from './header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>TODO</h1>
    </header>
  );
}
