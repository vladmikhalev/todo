import React from 'react';
import './App.css';
import { Header } from './shared/Header';
import { Main } from './shared/Main';
import { Content } from './shared/Main/Content';

function App() {
  return (
    <div className="App">
      <Header />
      <Main>
        <Content />
      </Main>
    </div>
  );
}

export default App;
