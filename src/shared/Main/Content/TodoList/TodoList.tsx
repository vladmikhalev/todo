import React from 'react';
import {TransitionGroup, CSSTransition} from 'react-transition-group';
import { useAppSelector } from '../../../../hooks/hook';
import { Todo } from '../../../../store/todoSlice';
import { TodoItem } from './TodoItem';
import styles from './todolist.module.css';

interface ITodoProps {
  inputWidth: number
}

export function TodoList({inputWidth}: ITodoProps) {
  const todos = useAppSelector(state => state.todo.list);

  const transitionClasses = {
    enterActive: styles.itemEnterActive,
    exitActive: styles.itemExitActive,
  };

  return (
    <ul className={styles.todoList} >
      <TransitionGroup >
        {todos.length !== 0 && todos.map((todo: Todo) => (
          <CSSTransition
            key={todo.id}
            timeout={500}
            classNames={transitionClasses}
          >
            <TodoItem inputWidth={inputWidth} todo={todo} key={todo.id} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
}
