import React from 'react';
import styles from './content.module.css';
import { FormAddTodo } from './FormAddTodo';
import { TodoList } from './TodoList';

export function Content() {
  const [inputWidth, setInputWidth] = React.useState(0);

  return (
    <section>
      <div className={styles.container}>
        <FormAddTodo setInputWidth={setInputWidth} />
        <TodoList inputWidth={inputWidth} />
      </div>
    </section>
  );
}
