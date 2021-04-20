import React from 'react';

import Card from './components/Card/Card';

function App() {
  return (
    <div className="bg-gray-100 h-screen p-5 w-full">
      <div className="grid grid-cols-4">
        <Card />
      </div>
    </div>
  );
}

export default App;
