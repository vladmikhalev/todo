import React, { ChangeEvent, FormEvent } from 'react';
import styles from './formedit.module.css';

interface IFormProps {
  handleSubmit: (event: FormEvent) => void;
  title: string;
  inputWidth: number;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function FormEdit({ handleSubmit, title, inputWidth, handleChange }: IFormProps) {


  return (
    <form onSubmit={handleSubmit} >
      <input
        style={{ width: inputWidth }}
        autoFocus={true}
        spellCheck="false"
        className={styles.editInput}
        type="text"
        value={title}
        onChange={handleChange}
        onBlur={handleSubmit}
      />
    </form>
  );
}
