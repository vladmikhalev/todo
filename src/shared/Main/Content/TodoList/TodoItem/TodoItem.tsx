import React, { ChangeEvent, FormEvent } from 'react';
import { useAppDispatch } from '../../../../../hooks/hook';
import { editTodo, Todo } from '../../../../../store/todoSlice';
import { BtnGroup } from './BtnGroup';
import { FormEdit } from './FormEdit';
import styles from './todoitem.module.css';

interface ITodoItemProps {
  todo: Todo;
  inputWidth: number;
}

export function TodoItem({ todo, inputWidth }: ITodoItemProps) {
  const [isHovered, setIsHovered] = React.useState(false);
  const [title, setTitle] = React.useState(todo.title);
  const [isEdit, setIsEdit] = React.useState(false);
  const dispatch = useAppDispatch();
  console.log(todo.isDone);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    setTitle(event.target.value);
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    if (!title.trim().length) {
      dispatch(editTodo({ id: todo.id, title: todo.title }));

      setTitle(todo.title);
    } else {
      dispatch(editTodo({ id: todo.id, title: title }));
    }
    setIsEdit(false);
  }

  return (
    <li
      className={styles.itemTodo}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >


      {isEdit
        ? (
          <FormEdit inputWidth={inputWidth}  handleSubmit={handleSubmit} title={title} handleChange={handleChange} />
        ) : (
            <div className={styles.todo} style={{ width: inputWidth, backgroundColor: todo.isDone ? '#c3e6cb' : '#DDDCDA' }}>{todo.title}</div>
        )}
        {isHovered && <BtnGroup setIsEdit={setIsEdit} id={todo.id} />}

    </li>
  );
}
