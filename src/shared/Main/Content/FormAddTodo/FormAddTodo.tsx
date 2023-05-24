/* eslint-disable react-hooks/exhaustive-deps */
import React, { ChangeEvent, FormEvent } from 'react';
import styles from './formaddtodo.module.css';
import { nanoid } from 'nanoid';
import { useAppDispatch } from '../../../../hooks/hook';
import { addTodo } from '../../../../store/todoSlice';

interface IFormProps {

  setInputWidth: (item: number) => void;
}

export function FormAddTodo({ setInputWidth }: IFormProps) {
  const [title, setTitle] = React.useState('');
  const inputRef = React.useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    if (title.trim().length) {
      const id = nanoid(6);
      dispatch(addTodo({ title, id: id }));
      setTitle('');
    } else {
      alert("Поле пустое! Необходимо ввести текст.");
    }
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  React.useEffect(() => {
    const input = inputRef.current;
    if (input) {
      const resizeObserver = new ResizeObserver(entries => {
        setInputWidth(input.getBoundingClientRect().width);
      });
      resizeObserver.observe(input);

      return () => {
        resizeObserver.unobserve(input);
      };
    }
  }, [inputRef]);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" value={title} onChange={handleChange} className={styles.inputAddTask} placeholder="Название задачи" />
      <button type="submit" className={styles.btnAdd} >Добавить</button>
    </form>
  );
}
