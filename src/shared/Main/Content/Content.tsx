import React from 'react';
import styles from './content.module.css';
import { FormAddTodo } from './FormAddTodo';
import { TodoList } from './TodoList';

export function Content() {
  return (
    <section>
      <div className={styles.container}>
        <FormAddTodo />
        <TodoList/>
      </div>
    </section>
  );
}
