import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { StoreProvider, useStore } from './store/AppState';

const initialState = {tasks: []};

function taskReducer(state, action) {
  switch (action.type) {
    case 'add':
      return { tasks: state.tasks.concat(action.payload) };
    case 'remove':
      return { tasks: state.tasks.filter(task => task !== action.payload) };
  }
}

const App = () => (
  <StoreProvider initialState={initialState} reducers={[taskReducer]}>
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://github.com/nitemarket/simple-state-management-sample"
          target="_blank"
          rel="noopener noreferrer"
        >
          Simple State Management with Hook
        </a>
        <div style={{ marginTop: '24px' }}>
          <Sample />
        </div>
      </header>
    </div>
  </StoreProvider>
);

const Sample = () => {
  const [state, dispatch] = useStore();
  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    dispatch({ type: 'add', payload: text });
    setText('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          className="List-input"
          placeholder="Write your task..."
          value={text}
          onChange={e => setText(e.target.value)}
          />
      </form>
      {state.tasks.map(task => (
        <div
          className="List-item"
          onClick={() => dispatch({ type: 'remove', payload: task })}
          >
          {task}
        </div>
      ))}
    </div>
  );
};

export default App;
