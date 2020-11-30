import React from 'react';
import Filter from './Filter';
import Store from '../store';
import Movies from './Movies';

function App() {
  return (
    <Store>
      <div style={{
        overflow: 'hidden',
      }}>
        <Filter />
        <Movies />
      </div>
    </Store>
  );
}

export default App;
