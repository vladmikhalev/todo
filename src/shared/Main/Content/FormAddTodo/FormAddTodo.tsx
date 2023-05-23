import React, { ChangeEvent, FormEvent } from 'react';
import styles from './formaddtodo.module.css';
import { nanoid } from 'nanoid';

export function FormAddTodo() {
  const [title, setTitle] = React.useState('');

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (title.trim().length) {
      const id = nanoid(6);
      localStorage.setItem(id, title);
      setTitle('');
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input type="text" value={title} onChange={handleChange} className={styles.inputAddTask} placeholder="Название задачи" />
      <button type="submit" className={styles.btnAdd} >Добавить</button>
    </form>
  );
}
