import React from 'react';
import { useDispatch } from 'react-redux';
import { removeTodo, toggleDone } from '../../../../../../store/todoSlice';
import { IconDone } from '../../../../../icons';
import styles from './btngroup.module.css';

interface IBtnGroupProps {
  id: string
  setIsEdit: (item: boolean) => void;
}

export function BtnGroup({ id, setIsEdit }: IBtnGroupProps) {
  const dispatch = useDispatch();

  function handleEdit() {
    setIsEdit(true);
  }
  
  function handleDelete() {
    const result = window.confirm('Вы действительно хотите удалить?');
    if (result === true) {
      dispatch(removeTodo({ id: id }))
    }
  }

  function handleDone() {
    dispatch(toggleDone({ id: id }))
  }


  return (
    <div className={styles.btnGroup}>
      <button onClick={handleEdit} className={styles.btnEdit}>/</button>
      <button onClick={handleDelete} className={styles.btnDelete}>X</button>
      <button onClick={handleDone} className={styles.btnDone}>
        <IconDone/>
      </button>
    </div>
  );
}
